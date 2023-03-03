import ParticlesBg from 'particles-bg'
import './App.css'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank'
import React, { Component } from 'react'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'


const PAT = 'a30cecf1be134f50815736af065c02c0';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'paul23';       
const APP_ID = 'my-first-application';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl:''
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input})
      const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": this.state.input
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result.outputs[0].data.regions[0].region_info.bounding_box))
        .catch(error => console.log('error', error));
  }

  

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} color={["FFFFFF"]}  className="particles"/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    )
  }
}

