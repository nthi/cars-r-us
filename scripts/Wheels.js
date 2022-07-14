import { getWheels, setWheels } from "./database.js";

//event listener
//this event listener hears the tech choice and sets the tech value in the orderBuilder
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

const wheels = getWheels()
//generate <select> element with child <option> as html rep of each object. I'm using .map, but we could use for/of loop or one string
//add event listener that reacts to the customer choosing an option
//when option is chosen, use window.alert to display message that says which option was chosen
//function that will build html string displaying a dropdown menu with all color choices
export const WheelChoice = () => {
    let html = `<h2>Wheels</h2>`
    html += `<select id="wheels">`
    html += `<option value="0">Select a wheel style</option>`
    //start html for dropdown

    const listWheels = wheels.map(wheel => {
        return `<option name="wheels" value="${wheel.id}">${wheel.wheels}</option>` //build the html for the drop-down box
    })

    html += listWheels.join("")
    html += "</select>" //closing tag

    return html

}



//this event listener waits for click and window.alert the choice
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "wheels") {
//         window.alert(`You chose wheel option ${event.target.value}`)        }
//     }
// )