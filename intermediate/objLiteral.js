const myObject = {
  property: 'Value!',
  otherProperty: 77,
  'obnoxious property': function () {
    // do stuff!
  },
};

//dot notation
const myDotNotation = myObject.property;

// bracket notation
const myBraNotation = myObject['otherProperty'];

console.log(myDotNotation); // prints value
console.log(myBraNotation); // prints 77
