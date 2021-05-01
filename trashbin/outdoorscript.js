const products = [
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/91RmQzKenOL._AC_SL1500_.jpg",
        name: "HotHands Hand Warmers",
        price: "$23.50",
        description: "Long Lasting Safe Natural Odorless Air Activated Warmers - Up to 10 Hours of Heat - 40 Pair" 
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/713yoywpMVL._AC_SL1500_.jpg",
        name: "LED Camping Lantern",
        price: "$22.25",
        description: "Super Bright Portable Survival Lanterns, Must Have During Hurricane, Emergency, Storms, Outages, Original Collapsible Camping Lights / Lamp (Batteries Included)"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg",
        name: "Fitbit Charge 4",
        price: "$16.97",
        description: "Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71E6NYbf24L._AC_SL1000_.jpg",
        name: "OutdoorMaster OTG Ski Goggles",
        price: "$27.99",
        description: "Over Glasses Ski/Snowboard Goggles for Men, Women & Youth - 100% UV Protection"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/91nMKn2QZxL._AC_SL1500_.jpg",
        name: "Curad Assorted Bandages",
        price: "$9.99",
        description: "Variety Pack 300 Pieces, Including Antibacterial, Heavy Duty, Fabric, and Waterproof Bandages"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81617EXxu9L._AC_SL1500_.jpg",
        name: "Yaktrax Walk",
        price: "$19.99",
        description: "Traction Cleats for Walking on Snow and Ice (1 Pair)"
        
    },
    {
        image : "https://images-na.ssl-images-amazon.com/images/I/81IsUQWDyFL._AC_SL1500_.jpg",
        name: "GCI Outdoor Freestyle Rocker",
        price: "$59.99",
        description: "Portable Folding Rocking Chair"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/91pdA1mUr3L._SL1500_.jpg",
        name: "Ziploc Sandwich Bags",
        price: "$8.97",
        description: "New Grip 'n Seal Technology, XL, 30 Count, Pack of 3 (90 Total Bags)"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71qIVOdsPKL._AC_UX569_.jpg",
        name: "Snowboard Cargo Pants",
        price: "$79.99",
        description: "Arctix Men's Mountain Premium Snowboard Cargo Pants"
        
    },
    {
        image : "https://images-na.ssl-images-amazon.com/images/I/61hZMnfhqVL._AC_UX679_.jpg",
        name: "B BINMEFVN Polar Fleece Neck Warmer",
        price: "$11.99",
        description: "Windproof Winter Neck Gaiter Cold Weather Face Mask for Men Women - 1 Pack"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61iJcBgbUtL._AC_UY695_.jpg",
        name: "FAGUMA Polarized Sports Sunglasses",
        price: "$16.87",
        description: "ffering 100% UV Protection,eliminate reflected light and scattered light,cut glare and protect eyes perfectly."
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/712SlfqoT9L._AC_SL1500_.jpg",
        name: "Premium Padded Ski Bag for Air Travel ",
        price: "$59.87",
        description: "Single Ski Carry Bags for Cross Country, Downhill, Ski Clothes, Snow Gear, Poles and Accessories for Ski Carrier Travel Luggage Case - for Men and Women"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/710biJICRHL._AC_SL1000_.jpg",
        name: "OutdoorMaster Boot Bag",
        price: "$49.99",
        description: "Ski Boots and Snowboard Boots Bag, Excellent for Travel with Waterproof Exterior & Bottom - for Men, Women and Youth"
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81SlLG7ApkL._AC_SL1500_.jpg",
        name: "Retrospec H4 Ski & Snowboard Helmet with 9 Vents",
        price: "$39.04",
        description: "9 vents for ultimate temperature regulation. BreezeBar allows you to customize the airflow in your helmet with a low-profile glove-friendly lever."
        
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/715RkYLFOIL._AC_SL1500_.jpg",
        name: "(3 Pack) White Athletic Sports Tape",
        price: "$13.99",
        description: "VERY Strong EASY Tear NO Sticky Residue BEST TAPE for Athlete & Medical Trainers. PERFECT on bat, Lacrosse / Hockey stick, Lifters, Climbers & Boxing"
        
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
        localStorage.setItem("currentModal",JSON.stringify(products[i])); 
});
}