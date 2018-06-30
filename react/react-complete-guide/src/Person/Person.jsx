import React from 'react';

// we will use ES6 function syntax, because it holds some advances (like using this keyword and new ES6 features)
const getRandomAge = () => {
  return Math.floor(Math.random()*100);
}
const person = (props) => {
    return (
      <div>
      <p>Im {props.name}! and I am {props.age || getRandomAge()} years old</p>
      <p className="propsChildren">{props.children}</p>
      </div>
    );
};

export default person;
