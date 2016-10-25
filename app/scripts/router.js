var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

var NavBar = require('./components/form.jsx').NavBar;
var models = require('./models/image_board.js');


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    var images = this.images = new models.ImageCollection();
    //console.log(this.images);
    images.fetch();
  },
  index: function(){
    ReactDom.render(
      React.createElement(NavBar, {collection: this.images}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
