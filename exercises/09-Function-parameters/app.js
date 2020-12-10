// Your code goes here:
function renderPerson(name, date, color, age, gender, word){
    var newString = (name + word + age + " years old " + gender + " born on " + date + " with " + color + " eyes");
    return newString;
}

 
  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male', ' is a '));