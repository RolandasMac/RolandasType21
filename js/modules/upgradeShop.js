import {mainGamePage, upgradeShopPage, upgradeShopPlace, upgradeItems, ownedOneManNameHtmlColection, looteddOneManNameHtmlColection, money, priceBtnHtmlColection} from "./constantsModule.js";


export function addPeopleToUpgradePlace(){
    // alert('Veikia')
    upgradeShopPlace.innerHTML = "";
    Array.from(ownedOneManNameHtmlColection).forEach((item)=>{
        let itemClone = item.parentElement.parentElement.cloneNode(true);
        itemClone.children[7].classList.add("d-none");

        let selBtnPlace = document.createElement("div");
        let firstBtn = document.createElement("button");
        firstBtn.classList.add("priceBtn");
        firstBtn.textContent = upgradeItems[0].name;
        firstBtn.value= upgradeItems[1].value;
        firstBtn.addEventListener("click", function(event){firstBtnF(event)})
        if(upgradeItems[0].price>Number(money.textContent)){
            firstBtn.setAttribute('disabled', 'true')
        }
        selBtnPlace.appendChild(firstBtn);
        let label = document.createElement("span");
        label.textContent = "Price";
        selBtnPlace.appendChild(label);
        let price = document.createElement("span");
        price.innerHTML = upgradeItems[0].price;
        selBtnPlace.appendChild(price);
        itemClone.appendChild(selBtnPlace);

        let selBtnPlace1 = document.createElement("div");
        let secondBtn = document.createElement("button");
        secondBtn.classList.add("priceBtn");
        secondBtn.textContent = upgradeItems[1].name;
        secondBtn.value= upgradeItems[1].value;
        secondBtn.addEventListener("click", function(event){secondBtnF(event)})
        if(upgradeItems[1].price>Number(money.textContent)){
            secondBtn.setAttribute('disabled', 'true')
        }
        selBtnPlace1.appendChild(secondBtn);
        let label1 = document.createElement("span");
        label1.textContent = "Price";
        selBtnPlace1.appendChild(label1);
        let price1 = document.createElement("span");
        price1.innerHTML = upgradeItems[1].price;
        selBtnPlace1.appendChild(price1);
        itemClone.appendChild(selBtnPlace1);

        upgradeShopPlace.appendChild(itemClone);
        // console.log(itemClone);
    })
    Array.from(looteddOneManNameHtmlColection).forEach((item)=>{
        let itemClone = item.parentElement.parentElement.cloneNode(true);

        let selBtnPlace = document.createElement("div");
        let firstBtn = document.createElement("button");
        firstBtn.classList.add("priceBtn");
        firstBtn.textContent = upgradeItems[0].name;
        firstBtn.value= upgradeItems[1].value;
        firstBtn.addEventListener("click", function(event){firstBtnF(event)})
        if(upgradeItems[0].price>Number(money.textContent)){
            firstBtn.setAttribute('disabled', 'true')
        }
        selBtnPlace.appendChild(firstBtn);
        let label = document.createElement("span");
        label.textContent = "Price";
        selBtnPlace.appendChild(label);
        let price = document.createElement("span");
        price.innerHTML = upgradeItems[0].price;
        selBtnPlace.appendChild(price);
        itemClone.appendChild(selBtnPlace);

        let selBtnPlace1 = document.createElement("div");
        let secondBtn = document.createElement("button");
        secondBtn.classList.add("priceBtn");
        secondBtn.textContent = upgradeItems[1].name;
        secondBtn.value= upgradeItems[1].value;
        secondBtn.addEventListener("click", function(event){secondBtnF(event)})
        if(upgradeItems[1].price>Number(money.textContent)){
            secondBtn.setAttribute('disabled', 'true')
        }
        selBtnPlace1.appendChild(secondBtn);
        let label1 = document.createElement("span");
        label1.textContent = "Price";
        selBtnPlace1.appendChild(label1);
        let price1 = document.createElement("span");
        price1.innerHTML = upgradeItems[1].price;
        selBtnPlace1.appendChild(price1);
        itemClone.appendChild(selBtnPlace1);

        upgradeShopPlace.appendChild(itemClone);
        // console.log(itemClone);
    })
}

function firstBtnF(e){
    let upgradeName = e.target.parentElement.parentElement.children[1].children[1].textContent;
    let upgradePrice = Number(e.target.parentElement.parentElement.children[8].children[2].textContent);
    Array.from(ownedOneManNameHtmlColection).forEach((x)=>{
        if(x.textContent===upgradeName){
            x.parentElement.parentElement.children[4].children[1].textContent = Number(x.parentElement.parentElement.children[4].children[1].textContent)+1;
            money.textContent = Number(money.textContent)-upgradePrice;
        }
    })
    Array.from(looteddOneManNameHtmlColection).forEach((x)=>{
        if(x.textContent===upgradeName){
            x.parentElement.parentElement.children[4].children[1].textContent = Number(x.parentElement.parentElement.children[4].children[1].textContent)+1;
            money.textContent = Number(money.textContent)-upgradePrice;
        }
    })
    // if(upgradePrice>Number(money.textContent)){
    //     e.target.setAttribute('disabled', 'true');
    // }
    checkBtnPrice();
}
function secondBtnF(e){
    let upgradeName = e.target.parentElement.parentElement.children[1].children[1].textContent;
    let upgradePrice = Number(e.target.parentElement.parentElement.children[9].children[2].textContent);
    Array.from(ownedOneManNameHtmlColection).forEach((x)=>{
        if(x.textContent===upgradeName){
            if(Number(x.parentElement.parentElement.children[2].children[1].textContent)>1){
                x.parentElement.parentElement.children[2].children[1].textContent = Number(x.parentElement.parentElement.children[2].children[1].textContent)-1;
                money.textContent = Number(money.textContent)-upgradePrice;
            }
        }
    })
    Array.from(looteddOneManNameHtmlColection).forEach((x)=>{
        if(x.textContent===upgradeName){
            if(Number(x.parentElement.parentElement.children[2].children[1].textContent)>1){
                x.parentElement.parentElement.children[2].children[1].textContent = Number(x.parentElement.parentElement.children[2].children[1].textContent)-1;
                money.textContent = Number(money.textContent)-upgradePrice;
            }
        }
    })
    // if(upgradePrice>Number(money.textContent)){
    //     e.target.setAttribute('disabled', 'true');
    // }
    checkBtnPrice();
}

function checkBtnPrice(){
    Array.from(priceBtnHtmlColection).forEach((btn)=>{
        if(Number(btn.parentElement.children[2].textContent)>Number(money.textContent)){
            btn.setAttribute('disabled', 'true');
        }else{btn.removeAttribute('disabled')}
    })
    // console.log(Array.from(priceBtnHtmlColection)[0].parentElement.children[2].textContent);
}



