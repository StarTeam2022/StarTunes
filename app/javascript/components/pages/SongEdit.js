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
      deleted: false,
    };
  }

  componentDidMount() {
    const { id, ...rest } = this.props.song
    this.setState({ form: rest})
    }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.updateSong(this.state.form, this.props.song.id);
    this.setState({ submitted: true });
  };

  handleDelete = () => {
    this.props.deleteSong(this.props.song.id)
    this.setState({ deleted: true })
  }

  render() {
    return (
      <div className="form-page">
        <Form className="form">
          <h2 className="form-title">Update or Delete Song Information</h2>
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
          <FormGroup>
            <Label for="image">image</Label>
            <Input
              name="image"
              placeholder="image"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.image}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} name="submit">
            Update
          </Button>
          {this.state.submitted && <Redirect to="/songindex" />}
          <Button color="warning" onClick={this.handleDelete}>
            Delete
          </Button>
          {this.state.deleted && <Redirect to="/songindex" />}
        </Form>
      </div>
    )
  }
}

export default SongNew
