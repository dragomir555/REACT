import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Branka', age: 18, id: '1' },
      { name: 'Max', age: 28, id: '20' },
      { name: 'Marko', age: 25, id: '3' }
    ],
    otherState: 'someState',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    //Koristiti jedan od ova dva nacina jer tako dobijamo novi niz kopiju
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event,id) => {
 const personIndex=this.state.persons.findIndex(p=>{
   return p.id===id;
 });
 //const person=Object.assign({},this.state.persons[personIndex]);
  const person={...this.state.persons[personIndex]};//Kreiranje novog objekta
  person.name=event.target.value;
  const persons=[...this.state.persons];
  persons[personIndex]=person;
  this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            //Index drugi argument i predstavlja index u nizu
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              //   click={this.deletePersonHandler(index)}
              //Prethodni nacin ne prolazi jer this pokazuje na nesto drugo
              // click={()=>{this.deletePersonHandler(index)}}//Prolazi
              //Inace uzimamo Id iz baze podataka 
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event)=>this.nameChangedHandler(event,person.id)}//setuje se 
               />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>This is really working!</p>
        <button
          style={style}//Dodavanje style
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {
          persons
        }
      </div>
    );
    //Kod ispod ne koristimo jer ce biti komplikovan onaj gore se kod prevodi u donji
    //  return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Ovo je h1'));
  }
}

export default App;
