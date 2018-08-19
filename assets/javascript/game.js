var button = {
    donut: {
        value: 0
         }, 
    iceCream: {
        value: 0
         },
    cupcake: {
        value: 0
         }, 
    candy: {
        value: 0
         }, 
};

var randomNumber = 0;
var totalCounter = 0;
var winCounter = 0;
var lossCounter = 0;

var getRandom = function (min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}

var startGame = function() {
    totalCounter = 0;

    randomNumber = getRandom(19, 120);

    button.donut.value      = getRandom(1, 12);
    button.iceCream.value   = getRandom(1, 12);
    button.cupcake.value    = getRandom(1, 12);
    button.candy.value      = getRandom(1, 12);

    $("#random").html(randomNumber);
    $("#total").html(totalCounter);

    console.log("-----------------")
    console.log("Your total:" + randomNumber);
    console.log("Donut:" + button.donut.value + "| Ice Cream:" + button.iceCream.value + "| Cupake:" + button.cupcake.value + "| Candy:" + button.candy.value);
    console.log("-----------------")
}

var addValues = function(button) {
    totalCounter = totalCounter + button.value;

    $("#total").html(totalCounter);

    checkWin();

    console.log("Your Score:" + totalCounter);
}

var checkWin = function() {
    if(totalCounter > randomNumber) {
        alert("You lose!");
        console.log("You lose!");

        lossCounter++;
        $("#lossCounter").html(lossCounter);

    startGame();
    }
    else if(totalCounter == randomNumber) {
        alert("You Win!!");
        console.log("You Win!!");

        winCounter++;
        $("#winCounter").html(winCounter);
    startGame();
    }
}

startGame();

$("#btn1").click(function() {
    addValues(button.donut);
});

$("#btn2").click(function() {
    addValues(button.iceCream);
});

$("#btn3").click(function() {
    addValues(button.cupcake);
});

$("#btn4").click(function() {
    addValues(button.candy);
});


// $(document).ready(function() {
//     var targetNumber = Math.round(Math.random() * 50) + 50;

//     $("#randomNumber").text(targetNumber);
  
//     var counter = 0;
  
//     // Now for the hard part. Creating multiple crystals each with their own unique number value.
  
//     // We begin by expanding our array to include four options.
//     var numberOptions = [10, 5, 3, 7];
  
//     // Next we create a for loop to create crystals for every numberOption.
//     for (var i = 0; i < randomNumer.length; i++) {
  
//       // For each iteration, we will create an imageCrystal
//       var imageCrystal = $("<img>");
  
//       // First each crystal will be given the class ".crystal-image".
//       // This will allow the CSS to take effect.
//       imageCrystal.addClass("crystal-image");
  
//       // Each imageCrystal will be given a src link to the crystal image
//       imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
  
//       // Each imageCrystal will be given a data attribute called data-crystalValue.
//       // This data attribute will be set equal to the array value.
//       imageCrystal.data("crystalvalue", numberOptions[i]);
  
//       // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//       $("#crystals").append(imageCrystal);
//     }
  
//     // This time, our click event applies to every single crystal on the page. Not just one.
//     $(".crystal-image").on("click", function() {
  
//       // Determining the crystal's value requires us to extract the value from the data attribute.
//       // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//       // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//       // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  
//       var crystalValue = ($(this).attr("data-crystalvalue"));
//       crystalValue = parseInt(crystalValue);
//       // We then add the crystalValue to the user's "counter" which is a global variable.
//       // Every click, from every crystal adds to the global counter.
//       counter += crystalValue;
  
//       // All of the same game win-lose logic applies. So the rest remains unchanged.
//       alert("New score: " + counter);
  
//       if (counter === targetNumber) {
//         alert("You win!");
//       }
  
//       else if (counter > targetNumber) {
//         alert("You lose!!");
//       }
  
//     });