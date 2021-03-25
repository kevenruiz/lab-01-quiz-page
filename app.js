
// initialize state


// set event listeners to update state and DOM

// import functions and grab DOM elements
import { countAsAYes } from './utils.js';

const button = document.getElementById('button-1');

const resultsDiv = document.getElementById('results');

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    // - Announce that there is a quiz
    // - How? `alert()`
    alert('welcome to the quiz!');
    // - Check to see if the user wants to take it
    // - How? `confirm()`
    const wantsToTakeTheQuiz = confirm('Do you really want to take the quiz?');

    // read ! as unless or not
    if (!wantsToTakeTheQuiz) {
        alert('no problem! enjoy the site anyhow');
        return;
    }

    // - Get the user's name
    // - How? `prompt()`
    const name = prompt('What would like me to call you?');

    let score = 0;
    // - Ask three questions
    // - How?  `prompt()`
    const firstAnswer = prompt('Have you ever watched online poker before?');
    const secondAnswer = prompt('Did you enjoy it?');
    const thirdAnswer = prompt('Would you recommend it to a friend?');

    if (countAsAYes(firstAnswer)) score++;
    if (countAsAYes(secondAnswer)) score++;
    if (countAsAYes(thirdAnswer)) score++;

    const resultsString = `Okay ${name} you got ${score} right out of three.`;

    // - Display the results
    // - How? `textContent = 'whatever'`
    resultsDiv.textContent = resultsString;
});