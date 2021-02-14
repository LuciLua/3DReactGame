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
<Scene physics = "debug=true">

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 2, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 1, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 0, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 0, z: -4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 0, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 1, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 2, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 0, z: -1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 1, z: 0}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 0, z: 0}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 2, z: 0}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 0, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 1, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 2, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 2, z: 3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 0, z: 3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 0, z: 5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 1, z: 5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#b1b4f4'}} position={{x: 1, y: 2, z: 5}}/>


<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: 5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: 4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: 3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: 1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: 0}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: -1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: -3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: -4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 0, y: -1, z: -5}}/>

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: 5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: 4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: 3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: 1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: 0}}/>


<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: 5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: 4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: 3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: 1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: 0}}/>


<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: 5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: 4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: 3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: 1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: 0}}/>

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: 5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: 4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: 3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: 1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: 0}}/>

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: 5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: 4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: 3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: 2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: 1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: 0}}/>




<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: -4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: -3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: -1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 5, y: -1, z: 0}}/>


<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: -4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: -3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: -1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 4, y: -1, z: 0}}/>

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: 0}}/>

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: -4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: -3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: -1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 2, y: -1, z: 0}}/>

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: -4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: -3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: -1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 1, y: -1, z: 0}}/>

<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -5}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -4}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -3}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -2}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: -1}}/>
<Entity camera look-controls geometry={{primitive: 'box'}} material={{color: '#7cb275'}} position={{x: 3, y: -1, z: 0}}/>

<Entity rigid-body={{x:2, y:3, z:3}} camera look-controls geometry={{primitive: 'sphere'}} material={{color: '#7cb275'}} position={{x: -5, y: 0, z: -4}} scale={{x: 2, y: 2, z: 2}}/>
<a-entity obj-model="obj: url('https://trello.com/c/QsdDZtl6/142-3d-models')" position={{x: -7, y: 0, z: -4}} dynamic-body="shape: box; mass: 2"></a-entity>

<Entity particle-system={{preset: 'snow'}}/>
<Entity geometry={{primitive: 'plane'}} material={{color: '#a8a8a8'}} rotation="-90 0 0" scale={{x: 105, y: 105, z:105}} position={{x: 5, y: -1, z: -5}}/>
<Entity rotation={{x:0, y:-90, z:0 }} scale={{x: 20, y:20, z:20}} position={{x:1, y:5, z:1 }} text={{value: 'Developed by', color: '#000000'}}/>

</Scene>
);

}
}

export default App ;