import { CarsRus } from "./carsRus.js";

//import the html function from carsRus
//create "render the html" function and call it

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRus()
}

renderAllHTML()