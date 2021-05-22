import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor(){
      super();

      this.state = {
        monsters: [
          {
            name: 'Frankenstein',
            id: 'asc1'
          },
          {
            name: 'Dracula',
            id: 'erdf'
          },
          {
            name: 'Zombie',
            id: 'sdkl'
          }
        ]
      };
    }

  render(){

    return (
      <div className="App">
        {this.state.monsters.map(
          monster => (
            <h1>{monster.name}</h1>
          )
        )}
      </div>
    );

  }

  // constructor(){
  //   super();
  //   this.state = {
  //     string: 'Hello Mario'
  //   };
  // }    

  // render(){

  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>{this.state.string}</p>
  //         <button onClick={() => this.setState({ string: 'Hello There!'})}>Click me for a surprise!</button>
  //       </header>
  //     </div>
  //   );

  // }


}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React and Something Else.
//           This is awesome how the page gets refreshed automatically upon saving the changes.
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
