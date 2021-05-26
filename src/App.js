import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {

    constructor(){
      super();
      this.state = {
        monsters: [],
        searchField: ''
      }

    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users}))
    }

    render(){
      // this.setState() re-renders the page everytime it is called on causing to get a new list of filtered Monsters.
      const { monsters, searchField } = this.state; // destructuring

      // The above is equivalent to:
      // const monsters = this.state.monsters;
      // const searchField = this.state.searchField;

      // This filters the monsters array based off the value of searchField.
      const filteredMonsters = monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

      return (
        <div className="App">

          <input 
            type="search" 
            placeholder="search monsters" 
            onChange={e => {                      
                this.setState(                    // Asynchronous Action. Second parameter executes synchronously
                  {searchField: e.target.value},  // Set up the valyue of searchField
                  () => console.log(this.state)   // (OPTIONAL) Called synchronously right after searchField is set up in the first parameter
                ); 
              }
            }
          />

          {/* We are passing monsters as a props to the CardList component */}
          <CardList monsters={filteredMonsters} /> 
         </div>
      );
  
    }    

}

export default App;
