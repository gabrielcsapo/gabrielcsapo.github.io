import './index.css';
import 'psychic.css/dist/psychic.min.css';
import 'font-awesome/css/font-awesome.css';

import { render } from 'react-dom';

import routes from './router';

render(routes, document.querySelector('#root'));
