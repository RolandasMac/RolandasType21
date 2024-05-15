
import {} from "./modules/peopleShop.js"
import {toggleDnone, checkPeoplePrice} from "./modules/funcModule.js";
import {mainGamePage, peopleShopPage, upgradeShopPage} from "./modules/constantsModule.js";
import {} from "./modules/upgradeShop.js";
import {} from "./modules/lootingPlace.js";
import {addPeopleToUpgradePlace} from "./modules/upgradeShop.js";



peopleShopBtn.addEventListener('click', ()=>{
    toggleDnone(mainGamePage, peopleShopPage, upgradeShopBtn);
    checkPeoplePrice();
});
upgradeShopBtn.addEventListener('click', ()=> {
    toggleDnone(mainGamePage, upgradeShopPage, peopleShopBtn);
    addPeopleToUpgradePlace();
});


