// Game container
let game = document.querySelector(".game");

// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];
// Array containing image URLs
let url = "https://cdn.glitch.global/2373c14e-6bf6-4ce3-908d-c31d3f7b62bb/cards";
let cards = [
    ".jpg?v=1710864961042",
    "%20.jpg?v=1710863807011",
    "%204.jpg?v=1710863810980",
    "%205.jpg?v=1710863815750",
    "%20copy%206.jpg?v=1710863821577",
    "%20copy%207.jpg?v=1710863828819",
    "%20copy%208.jpg?v=1710863833047",
    "%20copy.jpg?v=1710863836998",
];

// Button to Show Deck
buttonShow.onclick = function() {
    // play a sound
    let audio = document.querySelector(".audio");
    audio.play();
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    // play a sound
    let audio = document.querySelector(".audio");
    audio.play();
    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style= 'background-image: url(" + url + card + ")' class= 'card'>");
        }
    }
    buttonDouble.style.color = "silver";
    console.log("Now the deck has " + cards.length + " cards.");
};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    // play a sound
    let audio = document.querySelector(".audio");
    audio.play();
    shuffle(cards);
    game.innerHTML = "";
    console.log("I'm shuffling the cards!");
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' id=" + i + " class='card'>");
        i = i + 1;
    }
    console.log("Shuffled the deck.");
    buttonShuffle.style.color = "silver";
};
/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}







// Button to Flip All Cards
buttonFlip.onclick = function() {
    // play a sound
    let audio = document.querySelector(".audio2");
    audio.play();
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }

};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    //If a card was clicked, show it, and add it to an array.
    if (clickedId !== "") {
        //Make the background image appear!
        document.getElementById(clickedId).style.backgroundImage =
          "url(" + url + cards[clickedId] + ")";
        //Aslo add the id to an array (and log it)
        clickedIds.push(clickedId);
        console.log(clickedIds);
        //If 1 card was clicked...
        if (clickedIds.length === 2) {
            //Get both image URLs (and log them)
            let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            //If they are the same, just empty the array!
            if (card1picture === card2picture) {
                console.log("match");
                console.log(document.getElementById(clickedIds[0]));
                console.log(document.getElementById(clickedIds[1]));


                clickedIds = [];
                console.log(clickedIds);
            }
            // If they are NOT the same...
            //reset both background images and empty the array
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);


        }
    }
});