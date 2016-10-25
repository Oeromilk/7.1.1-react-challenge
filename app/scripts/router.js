var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

var AppComponent = require('./components/app.jsx').AppComponent;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDom.render(
      React.createElement(AppComponent),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
