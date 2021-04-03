if (sessionStorage.orderCounter == undefined) {
    window.sessionStorage.setItem("orderCounter", 0);
}

window.onload = function() {

    // Creates a row and assigns all its functionalities.
    function rowCreator() {
        let orderTable = document.getElementById("orders"),
            newOrderRow = orderTable.insertRow(1),
            orderRowTemplate = document.getElementById("order-template").content.cloneNode(true).children[0],
            num = sessionStorage.orderCounter,
            dateObj = new Date;

        newOrderRow.insertCell(0).innerHTML = sessionStorage.orderCounter++; // Product ID.
        sessionStorage.setItem("orderRow" + Number(num) + "cell1", newOrderRow.cells[0].innerHTML);
        newOrderRow.insertCell(1).innerHTML = dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear(), // Name of product.
        sessionStorage.setItem("orderRow" + Number(num) + "cell2", newOrderRow.cells[1].innerHTML);
        newOrderRow.insertCell(2).innerHTML = dateObj.getDate() + "/" + dateObj.getMonth() + "/" + dateObj.getFullYear(), // Product quantity and increments.
        sessionStorage.setItem("orderRow" + Number(num) + "cell3", newOrderRow.cells[2].innerHTML);
        newOrderRow.insertCell(3).innerHTML = "currentUser"; // User name
        sessionStorage.setItem("orderRow" + Number(num) + "cell4", newOrderRow.cells[3].innerHTML);
        newOrderRow.appendChild(orderRowTemplate.children[4]); // Edit and delete buttons

        newOrderRow.className = "row";

        sessionStorage.setItem("orderRow" + num, newOrderRow);

        // Removes this row when delete button is clicked.
        let removeButton = newOrderRow.cells[4].children[0];
        removeButton.addEventListener("click", function() {
            newOrderRow.remove();
            sessionStorage.setItem("orderRow" + Number(num) + "cell1", -1);
        })
    }

    function rowReAdder() {
        for (let i = 0; i < sessionStorage.orderCounter; i++) {
            if (sessionStorage.getItem("orderRow" + i + "cell1") != -1) {
                let orderTable = document.getElementById("orders"),
                    newOrderRow = orderTable.insertRow(1),
                    orderRowTemplate = document.getElementById("order-template").content.cloneNode(true).children[0];

                newOrderRow.insertCell(0).innerHTML = sessionStorage.getItem("orderRow" + i + "cell1"); // Product ID.
                newOrderRow.insertCell(1).innerHTML = sessionStorage.getItem("orderRow" + i + "cell2"); // Name of product.
                newOrderRow.insertCell(2).innerHTML = sessionStorage.getItem("orderRow" + i + "cell3"); // Product quantity and increments.
                newOrderRow.insertCell(3).innerHTML = sessionStorage.getItem("orderRow" + i + "cell4"); // User name
                newOrderRow.appendChild(orderRowTemplate.children[4]); // Edit and delete buttons

                newOrderRow.className = "row";

                sessionStorage.setItem("orderRow" + i, newOrderRow);

                // Removes this row when delete button is clicked.
                let removeButton = newOrderRow.cells[4].children[0];
                removeButton.addEventListener("click", function() {
                    newOrderRow.remove();
                    sessionStorage.setItem("orderRow" + i + "cell1", -1);
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