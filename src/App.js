import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

//require aframe physics system
//require('aframe-physics-system');

class App extends React.Component {

  render(){
  return (
    
<Scene physics = "debug=true" shadow="basic" >

<Entity rigid-body={{x:2, y:3, z:3}}camera look-controls geometry={{primitive: 'sphere'}} material={{color: '#97c892'}} position={{x: -4, y: -0.7, z: -2}} scale={{x: 0.2, y: 0.2, z: 0.2}}/>
<Entity rigid-body={{x:2, y:3, z:3}}camera look-controls geometry={{primitive: 'sphere'}} material={{color: '#7c5275'}} position={{x: -4.4, y: -0.7, z: -3}} scale={{x: 0.2, y: 0.2, z: 0.2}}/>

<Entity camera look-controls geometry={{primitive: 'cylinder'}} material={{color: '#7cb2a5'}} position={{x: 3, y: 7, z: 0}}/>

<a-sky id="image-360" radius="10" src="https://i.imgur.com/DrDomrj.jpg"></a-sky>

<Entity particle-system={{preset: 'snow'}}/>

<a-entity light="type: point; angle: 25; shadowCameraVisible: true; castShadow: true; color: #FFF; intensity: 1.6"  position="-1s.5 3 10"></a-entity>

<Entity particle-system={{preset: 'snow'}}/>
<Entity geometry={{primitive: 'plane'}} material="shader: flat; src:https://i.imgur.com/mfpst9b.jpg" rotation="-90 0 0" scale={{x: 10, y: 10, z:1}} position={{x: 5, y: -1, z: -5}}/>

<Entity geometry={{primitive: 'plane'}} material="shader: flat; src:https://i.imgur.com/mfpst9b.jpg" rotation="-90 0 0" scale={{x: 10, y: 10, z:1}} position={{x: -5, y: -1, z: -5}}/>


<Entity geometry={{primitive: 'plane'}} material="shader: flat; src:https://i.imgur.com/mfpst9b.jpg" rotation="-90 0 0" scale={{x: 10, y: 10, z:1}} position={{x: 5, y: -1, z: 5}}/>

<Entity geometry={{primitive: 'plane'}} material="shader: flat; src:https://i.imgur.com/mfpst9b.jpg" rotation="-90 0 0" scale={{x: 10, y: 10, z:1}} position={{x: -5, y: -1, z: 5}}/>

<Entity rotation={{x:90, y:-90, z:0 }} scale={{x: 20, y:20, z:20}} position={{x:1, y:8, z:6 }} text={{value: 'Developed by: \n Luci', color: '#fff'}}/>
<Entity rotation={{x:90, y:-90, z:0 }} scale={{x: 15, y:15, z:15}} position={{x:-2, y:8, z:5 }} text={{value: 'Construindo mundos', color: '#fff'}}/>


<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:90, z:0}}
    position={{x: 7, y:0.3, z: 0}}/>

<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:90, z:0}}
    position={{x: 7, y:0.3, z: 4}}/>

<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:90, z:0}}
    position={{x: 7, y:0.3, z: -4}}/>


<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:180, z:0}}
    position={{x: 1, y:0.3, z: 6}}/>

<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:180, z:0}}
    position={{x: 5, y:0.3, z: 6}}/>

<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:180, z:0}}
    position={{x: -3, y:0.3, z: 6}}/>

<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:180, z:0}}
    position={{x: 1, y:0.3, z: -6}}/>

<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:180, z:0}}
    position={{x: 5, y:0.3, z: -6}}/>

<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg"
    scale={{x: 2, y: 1, z: 0.2}}
    rotation={{x:0, y:180, z:0}}
    position={{x: -3, y:0.3, z: -6}}/>

<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 2}} position={{x:4,y:4,z:4}}
    material="shader: flat; src: https://i.imgur.com/dhvrzT5.jpeg repeat: 3"
    scale={{x: 6, y: 1, z: 0.2}}
    rotation={{x:0, y:90, z:0}}
    position={{x: -5, y:0.3, z: 0}}/>
<a-entity class="link"></a-entity>

<a-Entity class="img"
img 
img src={require('./1.jpg')} scale={{x:10, y:10, z:10}} />
</Scene>
);
}
}
export default App ;