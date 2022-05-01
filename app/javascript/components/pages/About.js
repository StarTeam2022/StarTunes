import React, { Component } from 'react'
import ryan from '../assets/ryan.jpg'
import tiffany from '../assets/tiffany.jpg'
import stevie from '../assets/stevie.jpg'
import arnold from '../assets/arnold.jpg'
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap'



export class About extends Component {
  render() {
    return (
      <div className='page-about'>
        <h1 className="about-title">About Us!</h1>
        <CardGroup className="about-us">
          <Card>
            <CardImg
              alt="ryan"
              src={ryan}
              top
              width="100%"
              height='400px'
            />
            <CardBody>
              <CardTitle tag="h5">
                Ryan Jacobell
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Tech Lead
              </CardSubtitle>
              <CardText>
                sddfsdf
              </CardText>
              <div className='socials'>
              <a href='https://github.com/RyanJ2463' target="_blank">
                <img
                  className="logo-pic"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  onClick="location.href = 'www.github.com/';"
                />
              </a>
              <a href='https://www.linkedin.com/in/ryan-jacobell-63b7ba1b9/' target="_blank">
                <img
                  className="logo-pic"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                />
              </a>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="tiffany"
              src={tiffany}
              top
              width="100%"
              height='400px'
            />
            <CardBody>
              <CardTitle tag="h5">
                Tiffany Do
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Project Manager
              </CardSubtitle>
              <CardText>
                sdasdadasd
              </CardText>
              <div className='socials'>
              <a href='http://www.github.com/tiffanydoh' target="_blank">
                <img
                  className="logo-pic"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
              </a>
              <a href='https://www.linkedin.com/in/tiffanydoh/' target="_blank">
                <img
                  className="logo-pic"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                />
              </a>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="stevie"
              src={stevie}
              top
              width="100%"
              height='400px'
            />
            <CardBody>
              <CardTitle tag="h5">
                Stevie Mitchell
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Product Manager
              </CardSubtitle>
              <CardText>
                dfsdfsdffsdf
              </CardText>
              <div className='socials'>
              <a href='https://github.com/developing-stevie' target="_blank">
                <img
                  className="logo-pic"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
              </a>
              <a href='https://www.linkedin.com/in/stevie-mitchell-8a6900235/' target="_blank">
                <img
                  className="logo-pic"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                />
              </a>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="arnold"
              src={arnold}
              top
              width="100%"
              height='400px'
            />
            <CardBody>
              <CardTitle tag="h5">
                Arnold Laoang
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Design Lead
              </CardSubtitle>
              <CardText>
                dfsdfsdffsdf
              </CardText>
              <div className='socials'>
              <a href='https://github.com/arnoldlaoang' target="_blank">
                <img
                  className="logo-pic"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />
              </a>
              <a href='https://www.linkedin.com/in/arnold-l-a4b3a4a8/' target="_blank">
                <img
                  className="logo-pic"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                />
              </a>
              </div>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default About

