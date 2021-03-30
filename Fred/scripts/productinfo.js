const dairy = [
    {
        image: "images/milk1.jpg",
        company: "Natrel",
        name: "1% Fine Filtered Milk",
        price: "$5.19",
        description: "1% finely filtered milk for a pure taste.",
        info: ""
    },
    {
        image: "images/milk2.jpg",
        company: "Natrel",
        name: "2% Fine Filtered Milk",
        price: "$5.19",
        description: "2% finely filtered milk for a pure taste.",
        info: ""
    },
    {
        image: "images/milk3.jpg",
        company: "Natrel",
        name: "3.25% Fine Filtered Milk",
        price: "$5.19",
        description: "3.25% finely filtered milk for a pure taste.",
        info: ""
    },
    {
        image: "images/yogurt.jpg",
        company: "Activia",
        name: "Stirred Vanilla Yogurt",
        price: "$4.29",
        description: "Vanilla yogurt, stirred for a creamier texture.",
        info: ""
    },
    {
        image: "images/yogurt-pack.jpg",
        company: "Yoplait",
        name: "Creamy Duo Assorted Yogurt",
        price: "$5.99",
        description: "",
        info: ""
    },
    {
        image: "images/kraft-singles.jpg",
        company: "Kraft",
        name: "Singles Regular 22 Pack",
        price: "$5.79",
        description: "",
        info: ""
    },
    {
        image: "images/cream-cheese.jpg",
        company: "Philadelphia",
        name: "Soft Original Cream Cheese",
        price: "$5.99",
        description: "",
        info: ""
    },
    {
        image: "images/grated-cheese.jpg",
        company: "Saputo",
        name: "Grated Quattro Fromaggi",
        price: "$18.99",
        description: "",
        info: ""
    },
    {
        image: "images/whipped-cream.jpg",
        company: "Québon",
        name: "20% Aerosol Whipped Cream",
        price: "$4.79",
        description: "",
        info: ""
    }
];

const frozen = [
    {
        image: "images/raspberry.jpg",
        company: "Compliments",
        name: "Whole Raspberries Frozen Fruit",
        price: "4.79",
        description: "",
        info: ""
    },
    {
        image: "images/pizza.jpg",
        company: "Mikes",
        name: "All-Dressed Frozen Pizza",
        price: "$7.99",
        description: "",
        info: ""
    },
    {
        image: "images/juice.jpg",
        company: "Minute Maid",
        name: "Fruit Punch Frozen Beverages",
        price: "$1.09",
        description: "",
        info: ""
    },
    {
        image: "images/pasta.jpg",
        company: "Michelina's",
        name: "Penne Pollo Frozen Entree",
        price: "$2.69",
        description: "",
        info: ""
    },
    {
        image: "images/turkey.jpg",
        company: "Swanson",
        name: "Turkey Frozen Dinner",
        price: "$4.19",
        description: "",
        info: ""
    },
    {
        image: "images/steak.jpg",
        company: "Hungry Man",
        name: "Salisbury Steak Frozen Entree",
        price: "$5.29",
        description: "",
        info: ""
    },
    {
        image: "images/minipizza.jpg",
        company: "Plats Du Chef",
        name: "Pepperoni Frozen Pizzettas",
        price: "$3.79",
        description: "",
        info: ""
    },
    {
        image: "images/broccoli.jpg",
        company: "Green Organic",
        name: "Broccoli Frozen Vegetables",
        price: "$4.99",
        description: "",
        info: ""
    },
    {
        image: "images/icecream.jpg",
        company: "Nestle",
        name: "Parlour Vanilla Frozen Dessert",
        price: "$3.99",
        description: "",
        info: ""
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

    let row = table.insertRow(0);
    for (i in products) {
        if (i % 3 == 0 && i != 0) {
            row = table.insertRow(0);
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
        company.textContent = companyModal.textcontent = products[i].company;
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
    let items = document.querySelectorAll(".product-cell");
    let modalItems = document.querySelectorAll(".modal-box");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {

        });
    }
}

function infoBox(e) {
    document.getElementById("title").innerHTML = e;
    /*
    let table = document.getElementById("product-table"),
        targ = window.event.target,
        c = 0;
    document.getElementById("title").innerHTML = targ.price;
    for (let i in table.rows) {
        let row = table.rows[i];
        for (let j in rows.cells) {
            let col = row.cells[j];
            if (col.name === targ.name) {
                document.getElementById("title").innerHTML = col.price.textContent;
            }
        }
    }*/
}