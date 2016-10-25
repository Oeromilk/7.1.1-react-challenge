var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var ImageList = React.createClass({

  render: function(){

    var imageItems = this.props.image.map(function(image){

      return (
        <div key={image.cid}>
          <img key={image.cid} className="card-img-top" ng-src="{image.get('form-url')}" alt="Image Holder" />
          <div className="card-block">
            <p className="card-text">Test</p>
          </div>
        </div>
      );
    });

    return (

      <div className="card col-md-9 col-md-offset-2">
        {imageItems}
      </div>
    );
  }
});

module.exports = {
  ImageList: ImageList
};
