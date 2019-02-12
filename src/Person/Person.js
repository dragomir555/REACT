import React from 'react';
import classes from './Person.module.css'
//import Radium from 'radium' //defaul export and named export

const person = (props) => {
    //   return <p>I'm a Person and I am  {Math.floor(Math.random()*30)} years old! </p>
    
   /* const style={//Da bi radilo potreban StyleRoot na parentu
        '@media(min-width: 500px)':{
            width: '450px'
        }
    }*/
    const style={

    }
    return (
        <div className={classes.Person} style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}></input>
        </div>
    )
};

//export default Radium(person);
export default person;