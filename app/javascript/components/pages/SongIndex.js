import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, Button, CardTitle, Row, Col } from "reactstrap";

class SongIndex extends Component {
  render() {
    return (
      <div>
        <div className="index-name">
          {this.props.songs &&
            this.props.songs.map((song) => {
              return (
                <Row key={song.id}>
                  <Col sm="6">
                    <Card body>
                      <CardTitle tag="h5">
                        <div>{song.title}</div>
                        <div>{song.artist}</div>
                      </CardTitle>
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
