import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, Button, CardTitle, Row, Col } from "reactstrap";

class SongIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false
    }
  }

  handleDelete = () => {
    this.props.deleteSong(this.props.song.id)
    this.setState({ deleted: true })
  }

  render() {
    return (
      <div>
        <h1 className="index-name">My Songs</h1>
        <div className="index-name">
          {this.props.songs &&
            this.props.songs.map((song) => {
              return (
                <Row key={song.id}>
                  <Col sm="6">
                    <Card body>
                      <img src={song.imageUrl} alt="cover art for song" />
                      <CardTitle tag="h5">
                        <div>{song.title}</div>
                        <div>{song.artist}</div>
                      </CardTitle>
                      <div className="action">
                        <NavLink to={`/songedit/${song.id}`}>
                          <Button color="primary">
                            Edit/Delete
                          </Button>
                        </NavLink>
                      </div>
                    </Card>
                  </Col>
                </Row>
              );
            })}
        </div>
      </div>
    );
  }
}

export default SongIndex;
