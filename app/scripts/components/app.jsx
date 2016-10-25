var React = require('react');

var ImageCollection = require('../models/image_board.js').ImageCollection;
var Image = require('../models/image_board.js').Image;
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ImageList;

var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImageCollection();
    var imageModel = new Image();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });

    return {
      collection: imageBoard,
      showForm: false,
      model: imageModel
    };
  },
  handleDelete: function(model){
    model.destroy();
    this.setState({collection: this.state.collection});
  },
  toggleForm: function(e){
    e.preventDefault();

    var showForm = !this.state.showFrom;
    this.setState({showForm: showForm});
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
  },
  render: function(){
    var self = this;

    var imageList = this.state.collection.map(function(image){

      return (
        <ListingComponent
          key={image.get("_id")}
          model={image}
          handleDelete={self.handleDelete}
        />
      );
    });
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button className="btn btn-primary glyphicon glyphicon-plus"
                onClick={this.toggleForm}></button>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.showForm ? <FormComponent model={this.state.model} handleAdd={this.addImage} /> : null}
            </div>
          </div>
        </div>

        <div className="row">
          {imageList}
        </div>

      </div>
    );
  }
});

module.exports = {
  AppComponent: AppComponent
};
