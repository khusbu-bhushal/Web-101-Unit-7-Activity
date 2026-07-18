// Use the DOM method `.getElementById()` to find your form

// 
const validateForm = (event) => {
    // Get the form elements
    let elements = document.getElementById("myForm").elements;
    // Create your for loop

    for(let i = 0; i < elements.length; i++) {
        console.log("The value of i is: " + i);


        if (elements[i].value === "") {
            console.log("This input is empty!");
        }
        else {
            console.log("This input has some data");
            console.log(elements[i].value);
        }

    }
    event.preventDefault();
}
  
// Add the an event listener to validate your form