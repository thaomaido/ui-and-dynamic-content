
// Save the reference to text-field into a variable. | <input type="text">
const listInput = document.getElementById('list-input');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
const listButton = document.getElementById('list-button');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
const listItem = document.getElementById('list-items');
// Save the reference to paragraph for feedback | <p class="feedback"></p>
const Feedback = document.getElementById('feedback');

// Start function addItem.
function addList() {
    // Create list-item and store output in a variable.
    const list=document.createElement('li');
    // Check if user entered the value in input text-field.
    if (listInput.value.trim() !== '') {
    // If so:
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       list.textContent=listInput.value;
       // Append list item to unordered list.
       listItem.appendChild(list);
       // Clear a feedback-message.
       Feedback.textContent='';
       // Clear the text-field.
       listInput.value='';
       // Put the cursor back to text-field  
       listInput.focus();
    // End if. 
    }
    // Otherwise:
    else {
       // Print the message nothing entered in the paragraph "feedback"
       Feedback.textContent='Nothing entered!';
    // End otherwise.
    }
// End function addItem.
}
// Register your function addItem for click event on button.
listButton.addEventListener('click', addList);
