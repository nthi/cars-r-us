//setup data structures
const database = {
    //orderBuilder: {},
    colors: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 413}
    ],
    interiors: [
        { id: 1, interior: "Beige Fabric", price: 405 },
        { id: 2, interior: "Charcoal Fabric", price: 782 },
        { id: 3, interior: "White LEather", price: 1470 },
        { id: 4, interior: "Black Leather", price: 1997 }
    ],
    techPack: [
        { id: 1, tech: "Basic Package", price: 100 },
        { id: 2, tech: "Navigation Package", price: 200 },
        { id: 3, tech: "Visibility Package", price: 300 },
        { id: 4, tech: "Ultra Package", price: 400 }
    ],
    wheels: [
        { id: 1, wheels: "17-inch Pair Radial", price: 100 },
        { id: 2, wheels: "17-inch Pair Radial Black", price: 200 },
        { id: 3, wheels: "18-inch Pair Spoke Silver", price: 300 },
        { id: 4, wheels: "18-inch Pair Spoke Black", price: 400 }
    ],
    customOrders: [
        {
            id: 1,
            colorId: 3,
            interiorId: 2,
            techId: 3,
            wheelId: 1,
            timestamp: 1614659931693
            //Should I set up one customOrder obj like in the jewelry project?
        }
    ],
}

//set up get functions
export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechPack = () => {
    return database.techPack.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}