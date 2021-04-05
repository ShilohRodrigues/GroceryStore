
window.onload = function() {

    // Opens up the aisle header menu.
    let aisleList = document.getElementById("aisles"),
        aisleButton = document.getElementById("headerAisles");
    aisleButton.addEventListener("click", function() {
        if (aisleList.style.visibility == "hidden") {
            aisleList.style.visibility = "visible";
        } else {
            aisleList.style.visibility = "hidden";
        }
    })

    // Allows to use the seachbar using enter.
    let searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keypress", function(e) {
        if (e.key === 'Enter')
            searchBar.value; // Value of searchbar upon pressing enter <--
    })
}