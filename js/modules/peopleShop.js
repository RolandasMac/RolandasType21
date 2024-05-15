import {toggleDnone, checkPeoplePrice} from "./funcModule.js";
import {people, mainGamePage, peopleShopPage, ownedPeopleTbl, lootingPeopleTbl, money} from "./constantsModule.js";
import {startInterval} from "./lootingPlace.js";



// create list
createPeopleShop(people);
// add btn click listener
document.querySelectorAll('.buyPeopleBtn').forEach((x)=>{
    x.addEventListener('click', buyPeople);
})

//  Functions  //
function createPeopleShop(arr){
    const peopleShopPlace = document.querySelector('#peopleShopPlace');
    arr.map((item)=>{

        peopleShopPlace.innerHTML +=`
               <div class="oneMan border p-2 ">
                     <div class="icon">
<!--                        <label for="icon">Name:</label>-->
                        <span id="icon">${item.icon}</span>
                    </div>
                     <div class="name">
                        <label for="name">Name:</label>
                        <span class="manName" id="name">${item.name}</span>
                    </div>
                    <div class="searchTime">
                        <label for="time">Search time:</label>
                        <span id="time">${item.searchTime}</span>
                    </div>
                    <div class="leftTime d-none">
                        <label for="leftTime">Left time:</label>
                        <span id="leftTime">${item.searchTime}</span>
                    </div>
                    <div class="inventory">
                        <label for="inventory">Inventory:</label>
                        <span id="inventory">${item.inventoryCapacity}</span>
                    </div>
                    <div class="inventoryFound d-none">
                        <label for="inventoryFound">Inventory found:</label>
                        <span id="inventoryFound">${item.inventoryCapacity}</span>
                    </div>
                    <div class="price">
                        <label for="price">Price</label>
                        <span id="price">${item.price}</span>
                    </div>
                    <button class="buyPeopleBtn">Buy</button>
                </div> 
            `
    })
}

function buyPeople(event){

    // update money field
    money.textContent = Number(money.textContent) - Number(event.target.parentElement.children[6].children[1].textContent);

    // console.log(oneMan);
    let node = event.target.parentElement;
    let nodeClone = node.cloneNode(true);

    //  upgrade btn
    nodeClone.children[7].textContent="Send to loot";
    // upgrade people node, remove price
    nodeClone.children[6].classList.add("d-none");

    // add event listener
    nodeClone.children[7].addEventListener('click', (event)=>sendToLoot(event));
    // append to owned people table
    ownedPeopleTbl.appendChild(nodeClone);
    // make btn disabled
    checkPeoplePrice()
}

function sendToLoot(event){
    // alert('Send to loot veikia');
    event.target.parentElement.children[7].classList.add("d-none");
    event.target.parentElement.children[2].classList.add("d-none");
    event.target.parentElement.children[3].classList.remove("d-none");
    let leftTime = Number(event.target.parentElement.children[2].children[1].textContent)
    event.target.parentElement.children[3].children[1].textContent = leftTime;
    // console.log(event.target.parentElement.children[3].children[1].textContent);
    event.target.parentElement.children[4].classList.add("d-none");
    event.target.parentElement.children[5].classList.remove("d-none");
    let maxLooted =  event.target.parentElement.children[4].children[1].textContent;
    event.target.parentElement.children[5].children[1].textContent = Math.round(Math.random() * maxLooted);
    lootingPeopleTbl.appendChild(event.target.parentElement)
    startInterval();
    // Reikia paleisti setTimeout ......

}