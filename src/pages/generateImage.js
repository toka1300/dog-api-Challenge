import React, { Component } from 'react';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

const imgContainer = document.getElementById('imgContainer');

export default class ImageGenerator extends Component {
  generateImage = async () => {
    //Need to call the backend, which will then fetch the image from API
    console.log(imgContainer);
    console.log('Generate an image');
  };
  render() {
    return (
      <div className='container'>
        <CssBaseline />
        <h2>Click the button to generate a new picture</h2>
        <Button
          variant='contained'
          onClick={this.generateImage}
          className='button'
        >
          Click Me!
        </Button>
        <img
          src=''
          alt='Random dog image'
          className='img-container hidden'
          id='imgContainer'
        />
      </div>
    );
  }
}