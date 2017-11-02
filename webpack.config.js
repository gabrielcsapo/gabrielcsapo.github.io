const webpack = require('webpack');

const BabiliPlugin = require('babili-webpack-plugin');

const got = require('got');

async function getProjects() {
  const res = await got('https://api.github.com/users/gabrielcsapo/repos', {
    json: true,
    headers: {
      'Accept': 'application/vnd.github.mercy-preview+json'
    }
  });
  return res.body.filter((repo) => {
    return repo.topics.indexOf('deprecated') == -1 && repo.fork === false
  }).map((repo) => {
    return {
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      name: repo.name
    }
  });
}



module.exports = async function() {
  const projects = await getProjects();

  const config = {
    entry: {
      vendor: ['react', 'react-dom', 'react-router-dom'],
      app: './src/app.js'
    },
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: './dist/'
    },
    devServer: {
      contentBase: 'dist',
      inline: true,
      hot: true,
      historyApiFallback: true
    },
    resolve: {
      alias: {
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      }
    },
    module: {
      rules: [{
          test: /\.css$/,
          use: [{
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules(?!\/tap-html)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [{
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
          }]
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [{
            loader: "file-loader"
          }]
        }
      ]
    },
    plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': process.env.NODE_ENV ? `"${process.env.NODE_ENV}"` : JSON.stringify('production')
        },
        'process.projects': JSON.stringify(projects)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js',
        minChunks: Infinity
      })
    ]
  };

  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new BabiliPlugin());
  }

  return config;
};
