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
        image: "https://images-na.ssl-images-amazon.com/images/I/41ilplpdAdL._AC_.jpg",
        name: "Kleenex",
        price: "$3.89",
        description: "Everyday 9 x Pocket Tissues Packs - 8 Packs Included"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81GH4avveFL._AC_SL1500_.jpg",
        name: "Dixie Everyday Paper Plates",
        price: "$19.99",
        description: " 10 1/16\" Plate,, Dinner Size Printed Disposable"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61EGQtMTUTL._AC_SL1500_.jpg",
        name: "Conair Defuzzer/Shaver",
        price: "$12.99",
        description: "Battery Operated Fabric Defuzzer/Shaver, White, Regular"
    },
    {
        image : "https://images-na.ssl-images-amazon.com/images/I/81UxrpZXUsL._AC_SL1500_.jpg",
        name: "Swiffer Sweeper",
        price: "$14.99",
        description: "Dry + Wet All Purpose Floor Mopping and Cleaning Starter Kit with Heavy Duty Cloths, Includes: 1 Mop, 19 Refills"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/91pdA1mUr3L._SL1500_.jpg",
        name: "Ziploc Sandwich Bags",
        price: "$8.97",
        description: "New Grip 'n Seal Technology, XL, 30 Count, Pack of 3 (90 Total Bags)"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71pTvh7Lp0L._AC_SL1500_.jpg",
        name: "Downy Infusions",
        price: "$13.88",
        description: "Liquid Fabric Conditioner (Fabric Softener), Calm, Lavender & Vanilla Bean, 56 Oz Bottles, 166 Loads Total (Pack of 2)"
    },
    {
        image : "https://images-na.ssl-images-amazon.com/images/I/81ZaumEwXlL._AC_SL1500_.jpg",
        name: "Mrs. Meyer's Clean Day Liquid Hand Soap",
        price: "$10.35",
        description: "Cruelty Free and Biodegradable Formula, Honeysuckle Scent, 12.5 oz- Pack of 3"
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/51PFG%2BCxS7L._AC_SL1000_.jpg",
        name: "RONXS Lighters",
        price: "$15.99",
        description: "Candle Lighter Electric Lighter Grill Lighter USB Lighter Plasma Lighter Rechargeable lighters for Candle Cooking BBQs Fireworks Camping, Multi-Color"
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
}

document.getElementById("product-table").innerHTML = makeTable;
document.getElementById("title").innerHTML = "hi";