var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

var NavBar = require('./components/image_board.jsx').NavBar;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){

  },
  index: function(){
    ReactDom.render(
      React.createElement(NavBar),
      document.getElementById('app')
    );
  }
})

var router = new AppRouter();

module.exports = router;
