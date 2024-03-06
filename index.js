let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let answerDisplay = document.getElementById('answer');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            let answer = eval(string);
            answerDisplay.innerText = answer;
            input.value = "";
            string = "";
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
            answerDisplay.innerText = "";
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }

        // Check if the length of the input string exceeds 15
        if (string.length > 15) {
            input.style.fontSize = "30px"; // Reduce font size
        } else {
            input.style.fontSize = "40px"; // Reset font size
        }

        // Scroll input box to the right to show more digits
        input.scrollLeft = input.scrollWidth;
    })
})
