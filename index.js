const body = document.body;
const element = document.createElement('div');
//create an h1 element, set that to value of new header variable, then give the element an id and class name of victory, and change the innerHTML to flatiron

body.remove('main');
const newHeader = document.createElement('h1');
//body.appendChild('h1');
// body.appendChild(newHeader);
//const newHeader = document.getElementsById('newHeader');
newHeader.innerHTML = "<h1>victory</h1>";
newHeader.id = "victory";
newHeader.innerHTML = "is the champion"
