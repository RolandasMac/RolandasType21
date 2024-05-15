import {lootingPeopleTbl, oneManHtmlColection, ownedPeopleTbl, inventoryTbl, items, itemsTbl, money} from "./constantsModule.js";

let looting = null;



// const getListBtn = document.querySelector('#getList');
// getListBtn.addEventListener('click', ()=>getList());
export function getList(){
    Array.from(oneManHtmlColection).forEach((item)=>{
        console.log(item.children[2].children[1].textContent);
    })

    // console.log(oneManHtmlColection);
}

export function startInterval(){
    if(!looting){
        looting = setInterval(()=>{
            lootingAction()
        },1000)
    }
}

function lootingAction(){
    Array.from(oneManHtmlColection).forEach((item)=>{
        // console.log(item.children[2].children[1].textContent);

        if(item.children[3].children[1].textContent > 0){
            item.children[3].children[1].textContent -=1;
        }else{
            item.children[2].classList.remove("d-none");
            item.children[3].classList.add("d-none");
            item.children[4].classList.remove("d-none");
            item.children[5].classList.add("d-none");
            item.children[7].classList.remove("d-none");
            let foundItems = Number(item.children[5].children[1].textContent);
            inventoryTbl.children[0].textContent =Number(inventoryTbl.children[0].textContent) + foundItems;
            addItems(foundItems, items);
            item.children[5].children[1].textContent = 0;
            ownedPeopleTbl.appendChild(item);
        }
    })
}

function addItems(num, arr){
    for(let i=0;i<num;i++){
        let randomint = Math.floor(Math.random()*arr.length);
        // console.log(randomint);
        // console.log(arr[randomint]);
        inventoryTbl.children[1].textContent =Number(inventoryTbl.children[1].textContent) + Number(arr[randomint].price);
        // console.log(Number(arr[randomint].price));
        // let item = `
        //     <div class="item border">
        //          <span>${arr[randomint].icon}</span>
        //          <div>
        //               <label for="price">Price:</label>
        //               <span id="price">${arr[randomint].price}</span>
        //          </div>
        //     </div>
        // `
        // itemsTbl.innerHTML += item;

        const item = document.createElement('div');
        item.classList.add('item');
        item.classList.add('border');
        const span = document.createElement('span');
        span.textContent= arr[randomint].icon;
        item.appendChild(span);
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.setAttribute('for','price');
        label.textContent = 'Price'
        div.appendChild(label);
        const span1 = document.createElement('span');
        span1.setAttribute('id', 'price');
        span1.textContent = arr[randomint].price;
        div.appendChild(span1);
        item.appendChild(div);
        item.addEventListener('click', (event)=>{
            money.textContent =Number(money.textContent) + Number(event.currentTarget.children[1].children[1].textContent);
            inventoryTbl.children[1].textContent =Number(inventoryTbl.children[1].textContent)-Number(event.currentTarget.children[1].children[1].textContent);
            inventoryTbl.children[0].textContent =Number(inventoryTbl.children[0].textContent) - 1;
            event.currentTarget.remove();
        })
        itemsTbl.appendChild(item);
    }
}