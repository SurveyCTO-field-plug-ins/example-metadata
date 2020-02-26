// References to certain field elements
var input = document.getElementById('text-field'); // the text input field
var metaInput = document.getElementById('metadata-field'); // the metadata input field
var saveMetaBtn = document.getElementById('meta-btn-save'); // the 'save metadata' button
var clearMetaBtn = document.getElementById('meta-btn-clear'); // the 'clear metadata' button
var recordTimeBtn = document.getElementById('meta-btn-record-time'); // the 'record time' button

// Define the 'save metadata' function
function saveMetadata() {
    fieldProperties.METADATA = metaInput.value;
}
// Call the saveMetadata function when the button is clicked
saveMetaBtn.onclick = saveMetadata;

// Define the 'clear metadata' function
function clearMetadata() {
    metaInput.value = null; // clear the input box
    fieldProperties.METADATA = null; // clear the actual field metadata
}
// Call the clearMetadata function when the button is clicked
clearMetaBtn.onclick = clearMetadata;

// Define the 'record time' function
function recordTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    metaInput.value = time; // insert the time into the input box
}
// Call the recordTime function when the button is clicked
recordTimeBtn.onclick = recordTime;


// the rest of this document just deals with the normal functionality of a text field


// Define what happens when the user attempts to clear the response
function clearAnswer() {
    input.innerHTML = '';
} 

// If the field is not marked readonly, then focus on the field and show the on-screen keyboard (for mobile devices)
function setFocus() {
    if(!fieldProperties.READONLY){
        input.focus();
        if (window.showSoftKeyboard) {
            window.showSoftKeyboard();
        }
    }
}

// Save the user's response (update the current answer)
input.oninput = function() {
    setAnswer(input.value);
}



