import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class SongNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: "",
        artist: "",
        image: "",
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createSong(this.state.form);
    this.setState({ submitted: true });
  };
  render() {
    return (
      <div className="form-page">
        <Form className="form">
          <h2 className="form-title">Create</h2>
          <FormGroup>
            <Label for="title">Song Title</Label>
            <Input
              name="title"
              placeholder="Whats your title"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="artist">Artist</Label>
            <Input
              name="artist"
              placeholder="artist"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.artist}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image-url">Image URL</Label>
            <Input
              name="image"
              placeholder="image-url"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.image}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} name="submit">
            Add a Song
          </Button>
          {this.state.submitted && <Redirect to="/songindex" />}
        </Form>
      </div>
    )
  }
}

export default SongNew
