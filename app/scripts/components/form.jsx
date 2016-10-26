var $ = require('jquery');
var React = require('react');

var FormComponent = React.createClass({
  getInitialState: function(){
    return {
      url: '',
      title: ''
    };
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.model){
      this.setState({
        url: nextProps.model.get('url'),
        title: nextProps.model.get('title')
      });
    }
  },
  handleUrlChange: function(e){
    var urlInput = e.target.value;
    this.setState({url: urlInput});
  },
  HandleTitleChange: function(e){
    var titleInput = e.target.value;
    this.setState({title: titleInput});
  },
  handleAdd: function(e){
    e.preventDefault();
    var newImage = {url: this.state.url, title: this.state.title};

    if(this.props.model){
    this.props.editImage(this.props.model, newImage);
    }else{
      this.props.addImage(newImage);
    }
    // Tell the state to reset the fields
    this.setState({url: '', title: ''});
  },
  render: function(){
    return (
      <form id="add-image" className="form-inline well" onSubmit={this.handleAdd}>
        <div className="form-group">
          <label htmlFor="image-url">Image Url</label>
          <input onChange={this.handleUrlChange} type="url" name="form-url" id="image-url" value={this.state.url} placeholder="Place image url here"/>
        </div>
        <div className="form-group">
          <label htmlFor="image-description">Image Descrpition</label>
          <input onChange={this.HandleTitleChange} type="text" name="form-title" id="image-description" value={this.state.title} placeholder="Describe the image"/>
        </div>
        <button type="submit" className="btn btn-success" >{this.props.model ? 'Edit' : 'Add'} Image</button>
      </form>
    );
  }
});

module.exports = {
  FormComponent: FormComponent
};
