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
      model: imageModel,
      imageToEdit: false
    };
  },
  handleDelete: function(model){
    model.destroy();
    this.setState({collection: this.state.collection});
  },
  handleEdit: function(model){
    this.setState({showForm: true, imageToEdit: model});
  },
  editImage: function(model, data){
    model.set(data);
    model.save();

    this.setState({imageToEdit: false, showForm: false});
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
      var key = image.get("_id") || image.cid;

      return (
        <ListingComponent
          key={key}
          model={image}
          handleDelete={self.handleDelete}
          handleEdit={self.handleEdit}
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
              {this.state.showForm ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage} editImage={this.editImage} /> : null}
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
