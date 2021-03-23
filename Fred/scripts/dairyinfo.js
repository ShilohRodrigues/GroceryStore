const products = [
    {
        image: "../images/milk1.jpg",
        company: "Natrel",
        name: "1% Fine Filtered Milk",
        price: "$5.19",
        description: "1% finely filtered milk for a pure taste."
    },
    {
        image: "../images/milk2.jpg",
        name: "2% Fine Filtered Milk",
        price: "$5.19",
        description: "2% finely filtered milk for a pure taste."
    },
    {
        image: "../images/milk3.jpg",
        name: "3.25% Fine Filtered Milk",
        price: "$5.19",
        description: "3.25% finely filtered milk for a pure taste."
    },
    {
        image: "../images/yogurt.jpg",
        company: "Activia",
        name: "Stirred Vanilla Yogurt",
        price: "$4.29",
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
    },
    {
        image: "",
        company: "",
        name: "",
        price: "",
        description: ""
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71VJVjdkMZL._AC_SL1500_.jpg",
        name: "Dishwashing Cleaning Gloves",
        price: "$12.99",
        description: "Reusable Dishwashing Cleaning Gloves with Latex free, Cotton lining ,Kitchen Gloves 2 Pairs (Purple+Blue, Medium)"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81TWEkH5htL._AC_SL1500_.jpg",
        name: "Trash Bags",
        price: "$8.99 ",
        description: "Hefty Recycling Trash Bags, Clear, 13 Gallon, 60 Count"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/51y-NudAJDL._AC_SL1001_.jpg",
        name: "LED Refrigerator Light Bulb",
        price: "$11.99",
        description: "LED Refrigerator Light Bulb 40W Equivalent 120V A15 Fridge Waterproof Bulbs 5 W Daylight White 5000K E26 Medium Base Freezer Ceiling Home Lighting Lamp Non-dimmable(2 Pack)"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81sI0PpnKoL._AC_SL1380_.jpg",
        name: "Makerstep Wooden Toothpicks",
        price: "$5.89",
        description: "1000 Pieces Ornate Handle, Sturdy Cocktail Picks Safe Large Round Storage Box 2 Packs of 500 Party Appetizer Olive Barbecue Fruit Teeth Cleaning Art Crafts"
    } 
];

function makeTable() {
    let table = document.getElementById("product-table");
    document.write(table);
    document.write("hi");

    /*
    let a = '<table>',
        b = '<\table>',
        m = ,
        even = products.length % 3;
    
    for (i = 0; i < (products.length-even);) {
        let document.createElement('tr');
        document.createElement('tr')

        m = '<tr>' + 
                    '<td>' +
                        "<a class='productimg'><img class='product-img' src=" + products[i].image + "></a>" +
                        "<p class='product-company'>" + products[i].company + "</p>" +
                        "<p class='product-name'>" + products[i].name + "</p>" +
                        "<p class='product-price'>" + products.price[i] + "</p>" +
                    '</td>' +
                        "<a class='productimg'><img class='product-img' src=" + products[++i].image + "></a>" +
                        "<p class='product-company'>" + products[++i].company + "</p>" +
                        "<p class='product-name'>" + products[++i].name + "</p>" +
                        "<p class='product-price'>" + products[++i].price + "</p>" +
                    '</td>' +
                        "<a class='productimg'><img class='product-img' src=" + products[++i].image + "></a>" +
                        "<p class='product-company'>" + products[++i].company + "</p>" +
                        "<p class='product-name'>" + products.name[++i] + "</p>" +
                        "<p class='product-price'>" + products.price[++i] + "</p>" +
                    '</td>' +
                '</tr>'
    }

    if (even == 1) {
        '<tr>' + 
            '<td>' +
                "<a class='productimg'><img class='product-img' src=" + products[products.length-1].image + "></a>" +
                "<p class='product-company'>" + products[products.length-1].company + "</p>" +
                "<p class='product-name'>" + products[products.length-1].name + "</p>" +
                "<p class='product-price'>" + products.price[products.length-1] + "</p>" +
            '</td>'
        '</tr>'
    } else if (even == 2) {
        '<tr>'
            '</td>' +
                "<a class='productimg'><img class='product-img' src=" + products[products.length-2].image + "></a>" +
                "<p class='product-company'>" + products[products.length-2].company + "</p>" +
                "<p class='product-name'>" + products[products.length-2].name + "</p>" +
                "<p class='product-price'>" + products[products.length-2].price + "</p>" +
            '</td>' +
                "<a class='productimg'><img class='product-img' src=" + products[products.length-1].image + "></a>" +
                "<p class='product-company'>" + products[products.length-1].company + "</p>" +
                "<p class='product-name'>" + products.name[products.length-1] + "</p>" +
                "<p class='product-price'>" + products.price[products.length-1] + "</p>" +
            '</td>' +
        '</tr>'
    }
    return (a + m + b);
    */
}

makeTable();