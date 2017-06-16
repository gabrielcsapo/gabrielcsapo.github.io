require('psychic-ui/dist/psychic-min.css')
require('./index.css');

var html = require('choo/html')
var choo = require('choo')

var app = choo()
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
      <body>
          <div id="container">
              <div class="quote-container">
                  <a href="https://twitter.com/gabriel_csapo" target="_blank" style="margin-right:5px;" data-tooltip="Twitter" class="btn btn-black tooltip-bottom">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/gabrielcsapo" target="_blank" style="margin-right:5px;" data-tooltip="Linkedin" class="btn btn-black tooltip-bottom">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="https://www.github.com/gabrielcsapo" target="_blank" data-tooltip="Github" class="btn btn-black tooltip-bottom">
                    <i class="fa fa-github"></i>
                  </a>
                  <a href="./dist/resume_summer_2017.pdf" data-tooltip="Resume" class="btn btn-black tooltip-bottom">
                    <i class="fa fa-suitcase"></i>
                  </a>
              </div>
              <div style="width:100%;height:100%;">
                  <img style="width:100%;height:100%;" src="./dist/nature.svg"/>
              </div>
              <div class="navbar navbar-bottom navbar-center">
                  <div class="container text-center">
                    <a href="https://www.github.com/gabrielcsapo" target="_blank" data-tooltip="@gabrielcsapo" class="btn btn-black tooltip-top">
                        <img style="display:inline-block;height:25px;" src="./dist/coffee.svg"/>
                    </a>
                  </div>
              </div>
          </div>
        </body>
  `
}
