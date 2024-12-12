let checkboxCounter = 0; // To create unique IDs for checkboxes
        
        function insertText(){
            var container = document.getElementById("container");
            var textField = document.createElement("input");
            textField.className = "input_style";
            textField.placeholder = "Type message"
            container.appendChild(textField);
            changeBackgroundColor(); // Change background color when an element is added
        }

        function insertButton(){
            var container = document.getElementById("container");

            // Prompt the user to enter a label for the button
            var buttonText = window.prompt("Enter label for the button:");

            // If user entered a label, create the button
            if (buttonText) {
                var button = document.createElement("button");
                button.innerHTML = buttonText; // Set the button text from the prompt
                button.title = "Click to Submit"; // Optional title for the button (appears on hover)
                container.appendChild(button);
                changeBackgroundColor(); // Change background color when an element is added
            } else {
                alert("Button label is required.");
            }
        }
        
        function insertCheckbox(){
            var container = document.getElementById("container");

            // Prompt the user to enter a label for the checkbox
            var labelText = window.prompt("Enter label for the checkbox:");

            // Create the checkbox
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "checkbox" + checkboxCounter++;  // Unique ID for each checkbox

            // Create the label and set its text
            let label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.appendChild(document.createTextNode(labelText)); // Use the entered label text

            // Append the checkbox and label to the container
            container.appendChild(checkbox);
            container.appendChild(label);
            changeBackgroundColor(); // Change background color when an element is added
        }

        function changeBackgroundColor() {
            var container = document.getElementById("container");
            if (container.children.length > 0) {
                // If there are any elements inside, change background color
                container.style.backgroundColor = "rgb(247, 156, 123)";
                container.style.border = "1px solid black";
            } else {
                // If there are no elements inside, set the background color to white
                container.style.backgroundColor = "white";
                container.style.border = "none";
            }
        }