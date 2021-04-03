if (sessionStorage.userCounter == undefined) {
    window.sessionStorage.setItem("userCounter", 0);
}

window.onload = function() {

    // Creates a row and assigns all its functionalities.
    function rowCreator() {
        let userTable = document.getElementById("orders"),
            newUserRow = userTable.insertRow(1),
            userRowTemplate = document.getElementById("user-template").content.cloneNode(true).children[0],
            num = sessionStorage.userCounter,
            dateObj = new Date;

        newUserRow.insertCell(0).innerHTML = sessionStorage.userCounter++; // Product ID.
        sessionStorage.setItem("userRow" + Number(num) + "cell1", newUserRow.cells[0].innerHTML);
        newUserRow.insertCell(1).innerHTML = "currentUser";
        sessionStorage.setItem("userRow" + Number(num) + "cell2", newUserRow.cells[1].innerHTML);
        newUserRow.insertCell(2).innerHTML = dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear(), // 
        sessionStorage.setItem("userRow" + Number(num) + "cell3", newUserRow.cells[2].innerHTML);
        newUserRow.appendChild(userRowTemplate.children[4]); // Edit and delete buttons

        newUserRow.className = "row";

        sessionStorage.setItem("userRow" + num, newUserRow);

        // Removes this row when delete button is clicked.
        let removeButton = newUserRow.cells[3].children[0];
        removeButton.addEventListener("click", function() {
            newUserRow.remove();
            sessionStorage.setItem("userRow" + Number(num) + "cell1", -1);
        })
    }

    function rowReAdder() {
        for (let i = 0; i < sessionStorage.userCounter; i++) {
            if (sessionStorage.getItem("userRow" + i + "cell1") != -1) {
                let userTable = document.getElementById("orders"),
                    newUserRow = userTable.insertRow(1),
                    userRowTemplate = document.getElementById("user-template").content.cloneNode(true).children[0];

                newUserRow.insertCell(0).innerHTML = sessionStorage.getItem("userRow" + i + "cell1"); // Product ID.
                newUserRow.insertCell(1).innerHTML = sessionStorage.getItem("userRow" + i + "cell2"); // User name.
                newUserRow.insertCell(2).innerHTML = sessionStorage.getItem("userRow" + i + "cell3"); // Creation date.
                newUserRow.appendChild(userRowTemplate.children[4]); // Edit and delete buttons

                newUserRow.className = "row";

                sessionStorage.setItem("userRow" + i, newUserRow);

                // Removes this row when delete button is clicked.
                let removeButton = newUserRow.cells[3].children[0];
                removeButton.addEventListener("click", function() {
                    newUserRow.remove();
                    sessionStorage.setItem("userRow" + i + "cell1", -1);
                })
            }
        }
    }
    
    rowReAdder();

    // Creates a row when the "Add Product" button is pressed.
    let addProductButton = document.getElementById("add");
    addProductButton.addEventListener("click", function() {
        rowCreator();
    })
}