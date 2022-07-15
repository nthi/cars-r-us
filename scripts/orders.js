import { getColors, getInteriors, getTechPack, getWheels, getOrders} from "./database.js";

const buildOrderListItem = (order) => {
    const colorList = getColors()
    const interiorList = getInteriors()
    const techList = getTechPack()
    const wheelList = getWheels()

    const foundColor = colorList.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundInterior = interiorList.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTech = techList.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    const foundWheels = wheelList.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const totalCost = foundColor.price + foundInterior.price + foundTech.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
        }
    )
    return `<li>${foundColor.color} car with ${foundWheels.wheels} wheels, ${foundInterior.interior} interior, and the ${foundTech.tech} cost ${costString}.</li>`
    //foundcolor.color etc.
    //this is wrong b/c I need the color/wheel etc. and not the id
}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"
    return html
}