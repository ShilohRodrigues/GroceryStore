const products = [
    {
        image: "images/milk1.jpg",
        company: "Natrel",
        name: "1% Fine Filtered Milk",
        price: "$5.19",
        description: "1% finely filtered milk for a pure taste."
    },
    {
        image: "images/milk2.jpg",
        company: "Natrel",
        name: "2% Fine Filtered Milk",
        price: "$5.19",
        description: "2% finely filtered milk for a pure taste."
    },
    {
        image: "images/milk3.jpg",
        company: "Natrel",
        name: "3.25% Fine Filtered Milk",
        price: "$5.19",
        description: "3.25% finely filtered milk for a pure taste."
    },
    {
        image: "images/yogurt.jpg",
        company: "Activia",
        name: "Stirred Vanilla Yogurt",
        price: "$4.29",
        description: "Vanilla yogurt, stirred for a creamier texture."
    },
    {
        image: "",
        company: "",
        name: "",
        price: "",
        description: ""
    },
    {
        image: "",
        company: "",
        name: "",
        price: "",
        description: ""
    },
    {
        image: "",
        company: "",
        name: "",
        price: "",
        description: ""
    },
    {
        image: "",
        company: "",
        name: "",
        price: "",
        description: ""
    },
    {
        image: "",
        company: "",
        name: "",
        price: "",
        description: ""
    },
    {
        image: "",
        company: "",
        name: "",
        price: "",
        description: ""
    },
    {
        image: "",
        company: "",
        name: "",
        price: "",
        description: ""
    }
];

function makeTable() {
    let table = document.getElementById("product-table"),
        template = document.getElementById("celltemplate"),
        rowCounter = 0,
        row = table.insertRow(rowCounter++);

    for (let i = 0; i < products.length; i++) {
        if (i % 3 == 0 && i != 0) {
            row = table.insertRow(rowCounter++);
        }
        
        let clone = template.content.cloneNode(true),
            image = clone.getElementById("product-img"),
            company = clone.getElementById("product-company"),
            name = clone.getElementById("product-name"),
            price = clone.getElementById("product-price");

        image.src = products[i].image;
        company.textContent = products[i].company;
        name.textContent = products[i].name;
        price.textContent = products[i].price;
        
        row.appendChild(clone);
    }
}