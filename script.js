let myButton = document.querySelector('button');
//get h1 tag by querySelector
let myHeading = document.querySelector('h1');

//check userName is stored or not
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

//function of setUserName
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

// event Handler on button
myButton.onclick = function() {
    setUserName();
}
