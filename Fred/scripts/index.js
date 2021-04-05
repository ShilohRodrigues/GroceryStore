
window.onload = function() {

    let aisleList = document.getElementById("aisles"),
        aisleButton = document.getElementById("headerAisles");
    aisleButton.addEventListener("click", function() {
        if (aisleList.style.visibility == "hidden") {
            aisleList.style.visibility = "visible";
        } else {
            aisleList.style.visibility = "hidden";
        }
    })
}