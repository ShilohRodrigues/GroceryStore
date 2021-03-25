const dairy = [
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
        image: "images/yogurt-pack.jpg",
        company: "Yoplait",
        name: "Creamy Duo Assorted Yogurt",
        price: "$5.99",
        description: ""
    },
    {
        image: "images/kraft-singles.jpg",
        company: "Kraft",
        name: "Singles Regular 22 Pack",
        price: "$5.79",
        description: ""
    },
    {
        image: "images/cream-cheese.jpg",
        company: "Philadelphia",
        name: "Soft Original Cream Cheese",
        price: "$5.99",
        description: ""
    },
    {
        image: "images/grated-cheese.jpg",
        company: "Saputo",
        name: "Grated Quattro Fromaggi",
        price: "$18.99",
        description: ""
    },
    {
        image: "images/whipped-cream.jpg",
        company: "Québon",
        name: "20% Aerosol Whipped Cream",
        price: "$4.79",
        description: ""
    }
];

const frozen = [
    {
        image: "images/raspberry.jpg",
        company: "Compliments",
        name: "Whole Raspberries Frozen Fruit",
        price: "4.79",
        description: ""
    },
    {
        image: "images/pizza.jpg",
        company: "Mikes",
        name: "All-Dressed Frozen Pizza",
        price: "$7.99",
        description: ""
    },
    {
        image: "images/juice.jpg",
        company: "Minute Maid",
        name: "Fruit Punch Frozen Beverages",
        price: "$1.09",
        description: ""
    },
    {
        image: "images/pasta.jpg",
        company: "Michelina's",
        name: "Penne Pollo Frozen Entree",
        price: "$2.69",
        description: ""
    },
    {
        image: "images/turkey.jpg",
        company: "Swanson",
        name: "Turkey Frozen Dinner",
        price: "$4.19",
        description: ""
    },
    {
        image: "images/steak.jpg",
        company: "Hungry Man",
        name: "Salisbury Steak Frozen Entree",
        price: "$5.29",
        description: ""
    },
    {
        image: "images/minipizza.jpg",
        company: "Plats Du Chef",
        name: "Pepperoni Frozen Pizzettas",
        price: "$3.79",
        description: ""
    },
    {
        image: "images/broccoli.jpg",
        company: "Green Organic",
        name: "Broccoli Frozen Vegetables",
        price: "$4.99",
        description: ""
    },
    {
        image: "images/icecream.jpg",
        company: "Nestle",
        name: "Parlour Vanilla Frozen Dessert",
        price: "$3.99",
        description: ""
    }
];

function makeDairyTable() {
    let table = document.getElementById("product-table"),
        template = document.getElementById("celltemplate"),
        rowCounter = 0,
        row = table.insertRow(rowCounter++);

    for (let i = 0; i < dairy.length; i++) {
        if (i % 3 == 0 && i != 0) {
            row = table.insertRow(rowCounter++);
        }
        
        let clone = template.content.cloneNode(true),
            image = clone.getElementById("product-img"),
            company = clone.getElementById("product-company"),
            name = clone.getElementById("product-name"),
            price = clone.getElementById("product-price");

        image.src = dairy[i].image;
        company.textContent = dairy[i].company;
        name.textContent = dairy[i].name;
        price.textContent = dairy[i].price;
        
        row.appendChild(clone);
    }
}

function makeFrozenTable() {
    let table = document.getElementById("product-table"),
        template = document.getElementById("celltemplate"),
        rowCounter = 0,
        row = table.insertRow(rowCounter++);

    for (let i = 0; i < frozen.length; i++) {
        if (i % 3 == 0 && i != 0) {
            row = table.insertRow(rowCounter++);
        }
        
        let clone = template.content.cloneNode(true),
            image = clone.getElementById("product-img"),
            company = clone.getElementById("product-company"),
            name = clone.getElementById("product-name"),
            price = clone.getElementById("product-price");

        image.src = frozen[i].image;
        company.textContent = frozen[i].company;
        name.textContent = frozen[i].name;
        price.textContent = frozen[i].price;
        
        row.appendChild(clone);
    }
}