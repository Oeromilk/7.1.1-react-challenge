var $ = require('jquery');
var React = require('react');

var ImageList = require('../components/listing.jsx').ImageList;

$.fn.serializeObject = function() {
   return this.serializeArray().reduce(function(acum, i) {
     acum[i.name] = i.value;
     return acum;
   }, {});
 };

var NavBar = React.createClass({
  componentWillMount: function(){
    this.showForm = false;
  },
  toggleForm: function(e){
    e.preventDefault();

    this.showForm = !this.Showform;
    this.forceUpdate();
  },
  addForm: function(e){
    e.preventDefault();

    var testObject = $('#add-image').serializeObject();

    this.props.collection.create(testObject);
    $('#image-url').val('');
    $('#image-description').val('');
  },
  render: function(){
    //console.log(this.props.collection);

    var displayForm;

    if(this.showForm){
      displayForm = (
        <form id="add-image" className="form-inline well" onSubmit={this.addForm}>
          <div className="form-group">
            <label htmlFor="image-url">Image Url</label>
            <input type="url" name="form-url" id="image-url" placeholder="Place image url here"/>
          </div>
          <div className="form-group">
            <label htmlFor="image-description">Image Descrpition</label>
            <input type="text" name="form-title" id="image-description" placeholder="Describe the image"/>
          </div>
          <button className="btn btn-success" >Add Image</button>
        </form>
      );
    }

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
        {displayForm}
        <div className="container">
          <div className="row well">
            <ImageList image={this.props.collection} />
          </div>
        </div>
      </div>

    );
  }
});

module.exports = {
  NavBar: NavBar
};
