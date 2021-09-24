import React from 'react'
import ReactDOM from 'react-dom'
import AppWithRoute from './AppWithRoute'
import registerServiceWorker from './registerServiceWorker'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
window.jQuery = window.$ = jQuery
require('semantic-ui-css/semantic.min.css')
require('react-owl-carousel2/src/owl.carousel.css')
require('react-owl-carousel2/src/owl.theme.default.css')
require('animate.css/animate.min.css')

ReactDOM.render(<AppWithRoute />, document.getElementById('root'))
registerServiceWorker()
