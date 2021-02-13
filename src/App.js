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


<Entity particle-system={{preset: 'snow'}}/>
<Entity geometry={{primitive: 'plane'}} material={{color: '#c0f9ec'}} scale={{x: 10, y: 10, z:10}} position={{x: 0, y: 0, z: -5}}/>
<Entity scale={{x: 20, y:20, z:20}} position={{x:6, y:1, z:6 }} text={{value: 'Oie! To experiementando coisa nova galera ;)', color: '#000000'}}/>
</Scene>
);

}
}

export default App ;