// constants //
export const peopleShopBtn = document.querySelector('#peopleShopBtn');
export const upgradeShopBtn = document.querySelector('#upgradeShopBtn');
export const mainGamePage = document.querySelector('#mainGame');
export const peopleShopPage = document.querySelector('#peopleShop');
export const upgradeShopPage = document.querySelector('#upgradeShop');
export const upgradeShopPlace = document.querySelector('#upgradeShopPlace');
export const ownedPeopleTbl = document.querySelector('#ownedPeopleTbl');
export const lootingPeopleTbl = document.querySelector('#lootingPeopleTbl');
export const oneManHtmlColection = lootingPeopleTbl.getElementsByClassName('oneMan');
export const ownedOneManNameHtmlColection = ownedPeopleTbl.getElementsByClassName('manName');
export const looteddOneManNameHtmlColection = lootingPeopleTbl.getElementsByClassName('manName');
export const inventoryTbl = document.querySelector('#inventoryTbl');
export const itemsTbl = document.querySelector('#itemsTbl');
// export const inventoryHtmlColection = itemsTbl.getElementsByClassName('item');
export const money = document.querySelector('#money');
export const peopleShopPlace = document.querySelector('#peopleShopPlace');
export const buyPeopleHtmlColection = peopleShopPlace.getElementsByClassName('oneMan');
export const priceBtnHtmlColection = document.getElementsByClassName('priceBtn');





export const people = [
    {
        "icon": "👷",
        "name": "John",
        "searchTime": 6,
        "inventoryCapacity": 3,
        "price": 300
    },
    {
        "icon": "👮",
        "name": "Emma",
        "searchTime": 7,
        "inventoryCapacity": 5,
        "price": 500
    },
    {
        "icon": "👩‍🌾",
        "name": "Michael",
        "searchTime": 4,
        "inventoryCapacity": 2,
        "price": 200
    },
    {
        "icon": "👨‍🍳",
        "name": "Sophia",
        "searchTime": 8,
        "inventoryCapacity": 6,
        "price": 600
    },
    {
        "icon": "👩‍⚕️",
        "name": "David",
        "searchTime": 5,
        "inventoryCapacity": 4,
        "price": 400
    },
    {
        "icon": "👩‍🔧",
        "name": "Olivia",
        "searchTime": 9,
        "inventoryCapacity": 7,
        "price": 700
    },
    {
        "icon": "👨‍💼",
        "name": "Isabella",
        "searchTime": 5,
        "inventoryCapacity": 1,
        "price": 100
    },
    {
        "icon": "👩‍🚒",
        "name": "James",
        "searchTime": 10,
        "inventoryCapacity": 8,
        "price": 800
    }
]

export const items = [
    {
        "icon": "🍔",
        "price": 7
    },
    {
        "icon": "🎮",
        "price": 4
    },
    {
        "icon": "🕶️",
        "price": 9
    },
    {
        "icon": "📱",
        "price": 6
    },
    {
        "icon": "🎸",
        "price": 8
    },
    {
        "icon": "👟",
        "price": 5
    },
    {
        "icon": "💼",
        "price": 2
    },
    {
        "icon": "🛋️",
        "price": 10
    },
    {
        "icon": "⌚",
        "price": 3
    },
    {
        "icon": "🧸",
        "price": 1
    },
    {
        "icon": "👒",
        "price": 6
    },
    {
        "icon": "🎩",
        "price": 8
    },
    {
        "icon": "👜",
        "price": 3
    },
    {
        "icon": "👓",
        "price": 5
    },
    {
        "icon": "👗",
        "price": 9
    },
    {
        "icon": "👠",
        "price": 2
    },
    {
        "icon": "🧣",
        "price": 7
    },
    {
        "icon": "🧤",
        "price": 4
    },
    {
        "icon": "👕",
        "price": 10
    },
    {
        "icon": "👚",
        "price": 1
    },
    {
        "icon": "👔",
        "price": 9
    },
    {
        "icon": "👖",
        "price": 4
    },
    {
        "icon": "🧥",
        "price": 7
    },
    {
        "icon": "🩳",
        "price": 2
    },
    {
        "icon": "🩱",
        "price": 5
    },
    {
        "icon": "👙",
        "price": 6
    },
    {
        "icon": "🩲",
        "price": 3
    },
    {
        "icon": "🧦",
        "price": 8
    },
    {
        "icon": "🥾",
        "price": 1
    },
    {
        "icon": "🧢",
        "price": 10
    }
]
export const upgradeItems = [
    {
        name:"1 point for inventory capacity",
        value:1,
        price:500
    },
    {
        name:"-1 point for search time",
        value:-1,
        price:1000
    }
]

//////