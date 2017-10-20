import 'psychic-ui/dist/psychic-min.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import { render } from 'react-dom';

import routes from './router';

render(routes, document.querySelector('#root'));
