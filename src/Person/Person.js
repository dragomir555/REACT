import React from 'react';
import './Person.css'


const person = (props) => {
    //   return <p>I'm a Person and I am  {Math.floor(Math.random()*30)} years old! </p>
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}></input>
        </div>
    )
};

export default person;