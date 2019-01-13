$(document).ready(function () {
   var firstCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
   var secondCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
   var thirdCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
   var fourthCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
   var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
   var currentScore = 0;
   var wins = 0;
   var losses = 0;
   var isCalculated= true;
   $("#randomNumberCounter").text(randomNumber);
   restart();
   $(".crystal1").on("click", function () {
       if (currentScore < randomNumber) {
           currentScore += firstCrystal;
           $('#currentScoreCounter').text(currentScore);
       }
       if (currentScore > randomNumber && isCalculated) {
           losses++;
           $('#lossesCounter').text(losses);
           isCalculated=false;
           restart();
       }
       else if (currentScore === randomNumber && isCalculated) {
           wins++;
           $('#winsCounter').text(wins); 
           isCalculated=false;
           restart();
       }
   })
   $(".crystal2").on("click", function () {
       if (currentScore < randomNumber) {
           currentScore += secondCrystal;
           $('#currentScoreCounter').text(currentScore);
       }
       if (currentScore > randomNumber && isCalculated) {
           losses++;
           $('#lossesCounter').text(losses);
           isCalculated=false;
           restart();
       }
       else if (currentScore === randomNumber && isCalculated) {
           wins++;
           $('#winsCounter').text(wins); 
           isCalculated=false;
           restart();
       }
   })
   $(".crystal3").on("click", function () {
       if (currentScore < randomNumber) {
           currentScore += thirdCrystal;
           $('#currentScoreCounter').text(currentScore);
       }
       if (currentScore > randomNumber && isCalculated) {
           losses++;
           $('#lossesCounter').text(losses);
           isCalculated=false;
           restart();
       }
       else if (currentScore === randomNumber && isCalculated) {
           wins++;
           $('#winsCounter').text(wins); 
           isCalculated=false;
           restart();
       }
   })
   $(".crystal4").on("click", function () {
       if (currentScore < randomNumber) {
           currentScore += fourthCrystal;
           $('#currentScoreCounter').text(currentScore);
       }
       if (currentScore > randomNumber && isCalculated) {
           losses++;
           $('#lossesCounter').text(losses);
           isCalculated=false;
           restart();
       }
       else if (currentScore === randomNumber && isCalculated) {
           wins++;
           $('#winsCounter').text(wins); 
           isCalculated=false;
           restart();
       }
   })

   function restart() {
       $('.crystal1, .crystal2, .crystal3,  .crystal4, #currentScoreCounter').empty();
       currentScore = 0;
       firstCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
       secondCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
       thirdCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
       fourthCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
       randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
       isCalculated=true;
       $("#randomNumberCounter").text(randomNumber);
       console.log(wins);
       console.log(losses);
   }
})
//     $(document).ready(function() {
// // $('.number').on('click', function() {
// //   console.log($(this).val());
// // });
// var firstNumber = '';
// var operator = '';
// var secondNumber = '';
// var result = '';
// var isCalculated = false;

// $('.number').on('click', function() {
//   if (isCalculated) return;
//   if (operator !== '') {
//     secondNumber += $(this).val();
//     $('#second-number').text(secondNumber);
//   } else {
//     firstNumber += $(this).val();
//     $('#first-number').text(firstNumber);
//   }
// });

//     $('.operator').on('click', function() {
//       operator = $(this).val();
//       $('#operator').text(operator);
//     });

//     $('.equal').on('click', function() {
//       // we know firstNumber
//       // we know secondNumber
//       // we also know the operator
//       isCalculated = true;

//       //converting numbers from String to Numbers
//       firstNumber = parseInt(firstNumber);
//       secondNumber = parseInt(secondNumber);

//       if (operator === 'plus') {
//         // modify the global var
//         result = firstNumber + secondNumber;
//       } else if (operator === 'minus') {
//         // modify the global var
//         result = firstNumber - secondNumber;
//       }
//       // displaying
//       $('#result').text(result);
//     });

//     $('.clear').on('click', function() {
//       firstNumber = '';
//       secondNumber = '';
//       operator = '';
//       result = '';
//       $('#Crystal1 #sCrystal1 #operator, #result').empty();
//     });
//   });