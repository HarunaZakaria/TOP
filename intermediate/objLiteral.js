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

//console.log(myDotNotation); // prints value
//console.log(myBraNotation); // prints 77

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const layer = new Player('Haruna', 'H');

console.log(layer.name);
