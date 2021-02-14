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
<Scene shadow="type: basic" physics = "debug=true" > 

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 4, y: 2, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 4, y: 1, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 4, y: 0, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 4, y: 0, z: -4}}/>



<Entity rigid-body={{x:2, y:3, z:3}}camera look-controls geometry={{primitive: 'sphere'}} material={{color: '#7cb275'}} position={{x: -5, y: 0, z: -4}} scale={{x: 2, y: 2, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'cylinder'}} material={{color: '#7cb2a5'}} position={{x: 3, y: 7, z: 0}}/>

<Entity primitive='a-sky' material={{color: '#68797f'}} />

<Entity particle-system={{preset: 'snow'}}/>

<a-entity cursor="rayOrigin: mouse"></a-entity>

<a-entity light="type: point; angle: 25; shadowCameraVisible: true; castShadow: true; color: #FFF; intensity: 1.6"  position="-1s.5 3 10"></a-entity>

<a-gltf-model src="tree.gltf" shadow="cast: true"></a-gltf-model>
<a-circle id="ground" radius="10" rotation="-90 0 0" shadow="receive: true"></a-circle>

<Entity particle-system={{preset: 'snow'}}/>
<Entity geometry={{primitive: 'plane'}} material={{color: '#a8a8a8', roughness: 0.05}} rotation="-90 0 0" scale={{x: 105, y: 105, z:105}} position={{x: 5, y: -1, z: -5}}/>
<Entity rotation={{x:0, y:-90, z:0 }} scale={{x: 20, y:20, z:20}} position={{x:1, y:5, z:1 }} text={{value: 'Developed by: \n Luci', color: '#000000'}}/>


<Entity
    camera look-controls
    geometry={{primitive: 'box', width: 2, height: 0.3}} position={{x:4,y:4,z:4}}
    material={{color: '#b2fa4f', roughness: 0.05}}
    scale={{x: 2, y: 2, z: 2}}
    position={{x: 0, y:0, z: -5}}/>
</Scene>

);

}
}

export default App ;