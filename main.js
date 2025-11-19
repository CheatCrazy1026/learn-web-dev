/*

   1. get user inputs a number
   2. Loop from 1 to the entered number
   3. If the current number is divisible by 3 then print "Fizz"
   4. If the current number is divisible by 5 then print "Buzz"
   5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
   6. Otherwise print the current number

*/

const submitButton = document.querySelector("#login-form");
const input = document.querySelector("#Input"); // 1.

submitButton?.addEventListener("submit", event => {

    event.preventDefault();
    const count = input.value;

    for (let i = 0; i < count; i++) { // 2.

        if(i % 3 === 0 && i % 5 === 0) { // 5.

            console.log("FizzBuzz");

        } else if(i % 3 === 0) { // 3.

            console.log("Fizz");

        } else if(i % 5 === 0) {

            console.log("Buzz"); // 4.

        } else {

            console.log(i); // 6.
        }
    }

});

/*

   1. get user input, “rock”, “paper” or “scissors”
   2. get ai input, using a number gen
   3. compear the user to ai
   4. add the score print out the winner

*/

const submitButtonRps = document.querySelector("#login-form-rps");

let playerTitle     = document.querySelector(".player-title");
let botTitle        = document.querySelector(".bot-title");

let playerScore     = document.querySelector(".player-score");
let botScore        = document.querySelector(".bot-score");

let pScore  = 0;
let bScore  = 0;

let aiTurn = "";

const scoreUpdate = WinTieLose => { // 4.

    if(WinTieLose === "Winner") {

        playerTitle.innerHTML = "Winner";
        botTitle.innerHTML    = "Loser";

        playerTitle.style.color = "green";
        botTitle.style.color    = "red";

        playerScore.innerHTML = `Your Score: ${pScore}`;

    } else if(WinTieLose === "loser") {

        playerTitle.innerHTML = "Loser";
        botTitle.innerHTML    = "Winner";

        playerTitle.style.color = "red";
        botTitle.style.color    = "green";

        botScore.innerHTML = `Your Score: ${bScore}`;

    } else {

        playerTitle.innerHTML = "Tie";
        botTitle.innerHTML    = "Tie";

        playerTitle.style.color = "blue";
        botTitle.style.color    = "blue";
    }
};

const getTurn = () => {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {

        case 1:
            aiTurn = "rock";
        break;

        case 2:
            aiTurn = "paper";
        break;

        case 3:
            aiTurn = "scissors";
        break;
    }
}

submitButtonRps?.addEventListener("submit", event => {

    event.preventDefault();
    const inputRps = document.querySelector('input[name="fav"]:checked').value; // 1.
    getTurn();

    if(inputRps === "rock" && aiTurn === "rock") {

        scoreUpdate("Tie");

    } else if(inputRps === "paper" && aiTurn === "rock") {

        pScore++
        scoreUpdate("Winner"); 

    } else if(inputRps === "scissors" && aiTurn === "rock") {

        bScore++
        scoreUpdate("loser");

    } else if(inputRps === "rock" && aiTurn === "paper") {

        bScore++
        scoreUpdate("loser");

    } else if(inputRps === "paper" && aiTurn === "paper") {

        scoreUpdate("Tie");
        
    } else if(inputRps === "scissors" && aiTurn === "paper") {

        pScore++
        scoreUpdate("Winner");

    } else if(inputRps === "rock" && aiTurn === "scissors") {

        pScore++
        scoreUpdate("Winner");

    } else if(inputRps === "paper" && aiTurn === "scissors") {

        bScore++
        scoreUpdate("loser");
        
    } else if(inputRps === "scissors" && aiTurn === "scissors") {

        scoreUpdate("Tie");
    }
});

/*

   1. get the item from the user
   2. get the list
   3. add the item to the bottom of the list

*/

const shopBtn = document.querySelector("#login-form-shop");
const item    = document.querySelector("#shop-Input");
const list    = document.querySelector(".list");

shopBtn.addEventListener("submit", event => {

    event.preventDefault();

    const myItem = item.value;
    item.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listBtn.style.cssText = 'color:red; background:none; border: none; font-weight: bold;';

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "X";
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {

        list.removeChild(listItem);
    });

    item.focus();
});


