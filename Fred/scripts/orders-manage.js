if (sessionStorage.productCounter == undefined) {
    window.sessionStorage.setItem("productCounter", 0);
}

window.onload = function() {

    // Creates a row and assigns all its functionalities.
    function rowCreator() {
        let productTable = document.getElementById("products"),
            newProductRow = productTable.insertRow(1),
            productRowTemplate = document.getElementById("product-template").content.cloneNode(true).children[0],
            num = sessionStorage.productCounter;

        newProductRow.insertCell(0).innerHTML = sessionStorage.productCounter++; // Product ID.
        sessionStorage.setItem("row" + Number(num) + "cell1", newProductRow.cells[0].innerHTML);
        newProductRow.insertCell(1).innerHTML = "productName"; // Name of product.
        sessionStorage.setItem("row" + Number(num) + "cell2", newProductRow.cells[1].innerHTML);
        newProductRow.appendChild(productRowTemplate.children[2]); // Product quantity and increments.
        sessionStorage.setItem("row" + Number(num) + "cell3", newProductRow.cells[2].children[1].value);
        newProductRow.insertCell(3).innerHTML = "currentUser"; // User name
        sessionStorage.setItem("row" + Number(num) + "cell4", newProductRow.cells[3].innerHTML);
        newProductRow.appendChild(productRowTemplate.children[3]); // Edit and delete buttons

        newProductRow.className = "row";

        sessionStorage.setItem("row" + num, newProductRow);

        // Removes this row when delete button is clicked.
        let removeButton = newProductRow.cells[4].children[0];
        removeButton.addEventListener("click", function() {
            newProductRow.remove();
            sessionStorage.setItem("row" + Number(num) + "cell1", -1);
        })

        // Makes "-" and "+" visible to edit product quantity.
        let editButton = newProductRow.cells[4].children[1],
            decrementButton = newProductRow.cells[2].children[0],
            incrementButton = newProductRow.cells[2].children[2];
        editButton.addEventListener("click", function() {
            decrementButton.style.visibility = "visible";
            incrementButton.style.visibility = "visible";
        })

        // Decreases product quantity by 1.
        let productQuantity = newProductRow.cells[2].children[1];
        decrementButton.addEventListener("click", function() {
            if (productQuantity.value > 0) {
                productQuantity.value--;
                sessionStorage.setItem("row" + Number(num) + "cell3", Number(sessionStorage.getItem("row" + Number(num) + "cell3"))-1);
            }
        })

        // Increases product quantity by 1.
        incrementButton.addEventListener("click", function() {
            productQuantity.value++;
            sessionStorage.setItem("row" + Number(num) + "cell3", Number(sessionStorage.getItem("row" + Number(num) + "cell3"))+1);
        })
    }

    function rowReAdder() {
        for (let i = 0; i < sessionStorage.productCounter; i++) {

            if (sessionStorage.getItem("row" + i + "cell1") != -1) {
              
                let productTable = document.getElementById("products"),
                    newProductRow = productTable.insertRow(1),
                    productRowTemplate = document.getElementById("product-template").content.cloneNode(true).children[0];

                newProductRow.insertCell(0).innerHTML = sessionStorage.getItem("row" + i + "cell1"); // Product ID.
                newProductRow.insertCell(1).innerHTML = sessionStorage.getItem("row" + i + "cell2"); // Name of product.
                newProductRow.appendChild(productRowTemplate.children[2]); // Product quantity and increments.
                newProductRow.cells[2].children[1].value = sessionStorage.getItem("row" + i + "cell3")
                newProductRow.insertCell(3).innerHTML = sessionStorage.getItem("row" + i + "cell4"); // User name
                newProductRow.appendChild(productRowTemplate.children[3]); // Edit and delete buttons

                newProductRow.className = "row";

                sessionStorage.setItem("row" + i, newProductRow);

                // Removes this row when delete button is clicked.
                let removeButton = newProductRow.cells[4].children[0];
                removeButton.addEventListener("click", function() {
                    newProductRow.remove();
                    sessionStorage.setItem("row" + i + "cell1", -1);
                })

                // Makes "-" and "+" visible to edit product quantity.
                let editButton = newProductRow.cells[4].children[1],
                    decrementButton = newProductRow.cells[2].children[0],
                    incrementButton = newProductRow.cells[2].children[2];
                editButton.addEventListener("click", function() {
                    decrementButton.style.visibility = "visible";
                    incrementButton.style.visibility = "visible";
                })

                // Decreases product quantity by 1.
                let productQuantity = newProductRow.cells[2].children[1];
                decrementButton.addEventListener("click", function() {
                    if (productQuantity.value > 0) {
                        productQuantity.value--;
                        sessionStorage.setItem("row" + i + "cell3", Number(sessionStorage.getItem("row" + i + "cell3"))-1)
                    }
                })

                // Increases product quantity by 1.
                incrementButton.addEventListener("click", function() {
                    productQuantity.value++;
                    sessionStorage.setItem("row" + i + "cell3", Number(sessionStorage.getItem("row" + i + "cell3"))+1);
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

    // Removes the ability to change product quantity.
    let saveButton = document.getElementById("save"),
        productTable = document.getElementById("products");
    saveButton.addEventListener("click", function() {
        for(let i = 1; i < productTable.rows.length; i++) {
            let currentRow = productTable.rows[i],
                decrementButton = currentRow.cells[2].children[0],
                incrementButton = currentRow.cells[2].children[2];
            decrementButton.style.visibility = "hidden";
            incrementButton.style.visibility = 'hidden';
        }
    })

}