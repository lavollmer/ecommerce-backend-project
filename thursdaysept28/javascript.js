var students = ["Mary", "Ben", "Alice", "Harold", "Agnes", "Derek"]
var favoriteCharacter;

/*
  1. Console.log the students in alphabetical order. Hint: there is a built-in array method 
  that can do this work for you.
*/

var clone = [...students]
console.log(clone.sort())
console.log(students)


/*
  2. For each student, console.log this message, where the student name is in all lower case letters, 
  and where x is the correct value:
     "Welcome to the class, <student name>. There are x other students in the class with you."
*/

for (var i = 0; i < students.length; i++) {
  var currentStudent = students[i];
  console.log(`Welcome to the class, ${currentStudent.toLowerCase()}. There are ${students.length - 1} other students in the class with you. `)
}

students.forEach(function (student) {
  console.log(`Welcome, ${student.toLowerCase()}. There are ${students.length - 1} other students in the class with you.`)
})



/*
  3. Write a function that will accept as an argument an array (you can use the students array). 
  The function should examine each student name and console.log ONLY those students whose name is 5 
  characters or longer. Break this one down into smaller steps. Hint: you can get the number of characters in a string the same way you get the number of elements in an array. FYI: Later we will show you a way 
  to do this work in one line of code!

*/

function displayStudents(arr) {
  for (var i = 0; i < arr.length; i++) {
    var student = arr[i];
    var numOfChars = student.length
    if (numOfChars >= 5) {
      console.log(student)
    }
  }
}

displayStudents(students)


/*
  4. PART I: Create a variable named favoriteCharacter in the global space. It should have no value at first.
  Write a function that prompts the user to provide the name of their favorite character. The function 
  will then update the global variable with the name provided.  PART II: Once that's done, this function will 
  call ANOTHER function. That second function will read the name of the favorite character, and will 
  count the number of characters, and console.log out that value.

  Again: one step at a time.

  ex:  var response = prompt("")

*/

function giveMeACharacter() {
  favoriteCharacter = prompt("What is your favorite character?");
  console.log(favoriteCharacter)
  moreStuffToDo();
}

function moreStuffToDo() {
  console.log(favoriteCharacter.length)
}

giveMeACharacter();




















