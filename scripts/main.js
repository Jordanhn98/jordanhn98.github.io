let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/Jordan.jpg") {
        myImage.setAttribute("src", "images/Jordan2.jpg")
    } else {
        myImage.setAttribute("src", "images/Jordan.jpg")
    }

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
    }

}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
/*THIS WAS PRACTICE
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let myV;
myV = "jordan"
alert("Hello!")

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

document.querySelector('html').addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
});

document.querySelector('html').addEventListener('click', () => {
    alert('Ouch! Stop poking me!');
});
*/