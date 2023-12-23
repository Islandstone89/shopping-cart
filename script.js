
// ADD ITEMS

// Select the form
let form = document.querySelector(".shopping-cart-form");

// Add an event listener, listening for the "submit" event
form.addEventListener("submit", (e) => {
    // Prevent the default behaviour of page frefresh on "submit"
    e.preventDefault();
    // Select the text from the input
    let text = document.querySelector("#add-item").value;
    // Clear the input text after clicking "Add Item"
    document.querySelector("#add-item").value = null;

    // Select the unordered list
    let ul = document.querySelector(".shopping-cart-list");
    // Create list element
    let li = document.createElement("li");

    // Add the list element to the DOM, as a child of the unordered list
    ul.appendChild(li);
    // Give the list element the text entered in the input
    li.textContent = text;

    li.classList.add("list-element");
});


/* HIDE LIST */

// Select the checkbox
let checkbox = document.querySelector("#hide-list");

// Add an event listener that listens for the "change" event
checkbox.addEventListener("change", (e) => {
    // Grab the unordered list
    let ul = document.querySelector(".shopping-cart-list");
    if(checkbox.checked) {
        ul.classList.toggle("hidden");
    } 
    else {
        ul.classList.toggle("hidden");
    }
});