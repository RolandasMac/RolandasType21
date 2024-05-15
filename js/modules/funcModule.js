import {buyPeopleHtmlColection, money, oneManHtmlColection, ownedOneManNameHtmlColection, looteddOneManNameHtmlColection, ownedPeopleTbl, lootingPeopleTbl} from './constantsModule.js'

export function toggleDnone(el1, el2, btn){
    el1.classList.toggle("d-none");
    el2.classList.toggle("d-none");
    if(btn.getAttribute("disabled") === "true"){
    btn.removeAttribute("disabled", "true");
    }else{
        btn.setAttribute("disabled", "true");
    }
}

export function checkPeoplePrice() {
    // console.log(buyPeopleHtmlColection);
    const ownedManNameColection = ownedPeopleTbl.querySelectorAll(".manName");
    const looteddManNameColection = ownedPeopleTbl.querySelectorAll(".manName");
    Array.from(buyPeopleHtmlColection).map((people) => {
        // console.log(money.textContent < people.children[6].children[1].textContent);
        // console.log(Array.from(ownedOneManNameHtmlColection).some((x)=>{return x.textContent===people.children[1].children[1].textContent}));

        if (Number(money.textContent) < people.children[6].children[1].textContent||(Array.from(ownedOneManNameHtmlColection).some((x)=>{return x.textContent===people.children[1].children[1].textContent})||Array.from(looteddOneManNameHtmlColection).some((x)=>{return x.textContent===people.children[1].children[1].textContent}))) {
            people.children[7].setAttribute('disabled', 'true')
        }else{people.children[7].removeAttribute('disabled')}
    })
}