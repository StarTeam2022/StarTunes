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
      },
      submitted: false,
      deleted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.updateSong(this.state.form);
    this.setState({ submitted: true });
  };

  handleDelete = () => {
    this.props.deleteSong(this.props.song.id)
    this.setState({ deleted: true })
  }

  render() {
    return (
      <div className="newpage">
        <Form className="form">
          <h2>Update or Delete Song Information</h2>
          <FormGroup>
            <Label for="title">Song title</Label>
            <Input
              name="title"
              placeholder="Whats your title"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="artist">artist</Label>
            <Input
              name="artist"
              placeholder="artist"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.artist}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} name="submit">
            Update
          </Button>
          {this.state.submitted && <Redirect to="/songindex" />}
          <Button color="danger" onClick={this.handleDelete}>
            Delete
          </Button>
        </Form>
      </div>
    )
  }
}

export default SongNew
