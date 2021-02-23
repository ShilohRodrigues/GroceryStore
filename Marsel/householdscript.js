
const products = [
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71IdKRlm8%2BL._AC_SL1417_.jpg",
        name: "48 Pack AA High-Performance Alkaline Batteries",
        price: "$15.49",
        description: "AA 1.5-volt performance alkaline batteries for reliable performance across a wide range of devices"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71bgaMKkxUL._AC_SL1026_.jpg",
        name: "Presto!",
        price: "$22.25",
        description: "308-Sheet Mega Roll Toilet Paper, Ultra-Soft, 24 Count"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81L%2BoCXRrLL._AC_SL1500_.jpg",
        name: "Cascade Complete Dishwasher Pods",
        price: "$16.97",
        description: "ActionPacs Detergent, Fresh Scent, 78 Count"
        
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
const product = document.querySelectorAll('.item');
const modalbg = document.querySelector('.modalBackground');
const closebtn = document.querySelector('.modalCloseButton');
const modal = document.querySelectorAll('.modal');


for (let i = 0; i<product.length; i++){
product[i].addEventListener('click', function () {
    modalbg.classList.add('modalActive');
});
}
closebtn.addEventListener('click', function () {
    modalbg.classList.remove('modalActive');
});


for (let i=0; i<product.length; i++){
    product[i].getElementsByClassName("productImg")[0].src = products[i].image;
    product[i].getElementsByTagName("p")[0].innerHTML = products[i].name;
    product[i].getElementsByClassName("itemPrice")[0].innerHTML = products[i].price;   
}




for (let i = 0; i<product.length; i++){
    product[i].addEventListener('click', function(){
        modal[0].getElementsByClassName("modalImg")[0].src = products[i].image;
        modal[0].getElementsByClassName("modalItemName")[0].innerHTML = products[i].name;
        modal[0].getElementsByClassName("modalItemPrice")[0].innerHTML = products[i].price;
        modal[0].getElementsByClassName("modalItemDesc")[0].innerHTML = products[i].description; 
});
}


