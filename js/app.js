$(document).ready(function() {
  fizzBuzz(50);
});

function fizzBuzz(limit) {
  for (var i = 1; i <= limit; i += 1) {
      if (( i % 3=== 0) && (i % 5 === 0)) { // number is divisible by 3 and 5
          console.log("fizzbuzz")
          addToList('fizzbuzz');
      } else if ( i % 3=== 0) { // number is divisible by 3 
           console.log("fizz")
           addToList('fizz');
      } else if (i % 5 === 0) { // number is divisible by 5
            console.log("buzz")
            addToList('buzz');
      } else {
          console.log(i)
          addToList(i);
      }
  }  
}
function addToList(value) {
  $('body').append('<div>' + value + '</div>' );
}
