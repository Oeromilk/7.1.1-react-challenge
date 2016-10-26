var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var ImageList = React.createClass({
  handleDelete: function(e){
    e.preventDefault();

    this.props.handleDelete(this.props.model);
  },
  handleEdit: function(e){
    e.preventDefault();

    this.props.handleEdit(this.props.model);
  },
  render: function(){
    var imageSrc = this.props.model.get('url');
    var imageTitle = this.props.model.get('title');

    return (
      <div className="card well col-md-8 col-md-offset-2">
        <img className="card-img-top" src={imageSrc} alt="Image Holder" />
        <div className="card-block">
          <p className="card-text">{imageTitle}</p>
          <div>
            <button onClick={this.handleEdit} type="button" className="btn btn-info">Edit</button>
            <button onClick={this.handleDelete} type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  ImageList: ImageList
};
