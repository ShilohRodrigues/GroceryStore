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
        description: "Extra creamy yogurt containing two different flavors."
    },
    {
        image: "images/kraft-singles.jpg",
        company: "Kraft",
        name: "Singles Regular 22 Pack",
        price: "$5.79",
        description: "Individually packaged slices of cheddar cheese."
    },
    {
        image: "images/cream-cheese.jpg",
        company: "Philadelphia",
        name: "Soft Original Cream Cheese",
        price: "$5.99",
        description: "Original cream cheese without artificial flavors or colors."
    },
    {
        image: "images/grated-cheese.jpg",
        company: "Saputo",
        name: "Grated Quattro Fromaggi",
        price: "$18.99",
        description: "Contains four types of cheese grated and mixed together."
    },
    {
        image: "images/whipped-cream.jpg",
        company: "Québon",
        name: "20% Aerosol Whipped Cream",
        price: "$4.79",
        description: "Whipped cream dispensed by an aerosol canister."
    }
];

const frozen = [
    {
        image: "images/raspberry.jpg",
        company: "Compliments",
        name: "Whole Raspberries Frozen Fruit",
        price: "4.79",
        description: "Frozen whole raspberries in a bag."
    },
    {
        image: "images/pizza.jpg",
        company: "Mikes",
        name: "All-Dressed Frozen Pizza",
        price: "$7.99",
        description: "Oven baked frozen all-dressed pizza."
    },
    {
        image: "images/juice.jpg",
        company: "Minute Maid",
        name: "Fruit Punch Frozen Beverages",
        price: "$1.09",
        description: "Frozen concentrated fruit punch juice base."
    },
    {
        image: "images/pasta.jpg",
        company: "Michelina's",
        name: "Penne Pollo Frozen Entree",
        price: "$2.69",
        description: "Penne pollo microwaveable frozen dinner"
    },
    {
        image: "images/turkey.jpg",
        company: "Swanson",
        name: "Turkey Frozen Dinner",
        price: "$4.19",
        description: "Turkey microwaveable frozen dinner."
    },
    {
        image: "images/steak.jpg",
        company: "Hungry Man",
        name: "Salisbury Steak Frozen Entree",
        price: "$5.29",
        description: "Steak microwaveable frozen dinner."
    },
    {
        image: "images/minipizza.jpg",
        company: "Plats Du Chef",
        name: "Pepperoni Frozen Pizzettas",
        price: "$3.79",
        description: "Oven baked frozen pepperoni pizzettas."
    },
    {
        image: "images/broccoli.jpg",
        company: "Green Organic",
        name: "Broccoli Frozen Vegetables",
        price: "$4.99",
        description: "Frozen broccoli flowers in a bag."
    },
    {
        image: "images/icecream.jpg",
        company: "Nestle",
        name: "Parlour Vanilla Frozen Dessert",
        price: "$3.99",
        description: "Tub of vanilla ize cream."
    }
];

let products = [];

function makeTable(aisle) {
    let table = document.getElementById("product-table"),
        template = document.getElementById("cell-template");
    
    if (aisle === 'dairy') {
        products = dairy;
    } else if (aisle === 'frozen') {
        products = frozen;
    }

    let rowCounter = 0,
        row = table.insertRow(rowCounter++);
    for (i in products) {
        if (i % 3 == 0 && i != 0) {
            row = table.insertRow(rowCounter++);
        }

        // Get references to tags.
        let newCell = template.content.cloneNode(true).children[0],
            image = newCell.children[0],
            company = newCell.children[1],
            name = newCell.children[2],
            price = newCell.children[3];
        
        let newModal = document.getElementById("modal").content.cloneNode(true).children[0],
            imageModal = newModal.children[0].children[0],
            nameModal = newModal.children[1].children[1],
            companyModal = newModal.children[1].children[2],
            description = newModal.children[1].children[3],
            modalPrice = newModal.children[1].children[4],
            modalInfo = newModal.children[1].children[5];
            
        image.src = imageModal.src = products[i].image;
        company.textContent = companyModal.textContent = products[i].company;
        name.textContent = nameModal.textContent = products[i].name;
        price.textContent = modalPrice.textContent = products[i].price;
        description.textContent = products[i].description;
        modalInfo.href = products[i].info;

        document.body.appendChild(newModal);

        row.appendChild(newCell);
    }
    setListeners();
}

function setListeners() {

    // Makes product info popup appear on click of a product cell.
    let items = document.querySelectorAll(".product-cell");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            document.getElementsByClassName("modal-box")[i].style.visibility = 'visible';
        });
    }

    // Closes product info popup on click of "x".
    let modalItems = document.getElementsByClassName("modal-exit");
    for (let i = 0; i < modalItems.length; i++) {
        modalItems[i].addEventListener("click", function() {
            document.getElementsByClassName("modal-box")[i].style.visibility = 'hidden';
            value[i].value = 0;
        })
    }

    // Sets the modification to quantity and add to cart in popup.
    let decrease = document.getElementsByClassName("decrease"),
        value = document.getElementsByClassName("amount"),
        increase = document.getElementsByClassName("increase"),
        addCart = document.getElementsByClassName("add");
    for (let i = 0; i < value.length; i++) {
        decrease[i].addEventListener("click", function() { // Decrease amount by 1.
            if (value[i].value > 0) {
                value[i].value--;
            }
        })
        increase[i].addEventListener("click", function() { // Increase amount by 1.
            value[i].value++;
        })
        addCart[i].addEventListener("click", function() {
            document.getElementsByClassName("modal-box")[i].style.visibility = 'hidden';
            value[i].value = 0;
        })
    }
}