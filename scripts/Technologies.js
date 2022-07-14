import { getTechPack } from "./database.js";

const techs = getTechPack()

//function that will build html string displaying a dropdown menu with all color choices
export const TechChoice = () => {
    let html = "<select id="tech">"
    //start html for dropdown

    const listTechPacks = techs.map(tech => {
        return `<option value="${tech.id}">${tech.tech}</option>` //build the html for the drop-down box
    })

    html += listTechPacks.join("")
    html += "</select>" //closing tag

    return html

}