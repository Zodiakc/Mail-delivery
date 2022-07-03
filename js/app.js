let menuNExt = document.querySelector(".menu__next");
menuNExt.addEventListener("click", ()=>{
    menuNExt.classList.toggle("__transform");
})
const menuBurger = document.querySelector('.hamburger-lines');
const showedMenuBurger = document.querySelector(".menu-burger");
const menuBurgerList = document.querySelector(".menu-burger__list");
const menuBurgerCross = document.querySelector(".menu-burger__cross");
menuBurger.addEventListener('click', ()=>{
    showedMenuBurger.classList.add("show-opacity")
})
menuBurgerCross.addEventListener("click", ()=>{
    showedMenuBurger.classList.remove("show-opacity")
   
})
const mediaMore630 = matchMedia("(max-width: 630px)")
const mediaLower630 = matchMedia("(min-width: 630px)")
function mediaChangeMore(e){
    if (e.matches){
    const menuIconSearch = document.createElement("li");
    const menuIconPeople = document.createElement("li");
    const menuLinkSearch = document.createElement("a");
    const menuLinkPeople = document.createElement("a");
    menuLinkSearch.textContent = "Поиск";
    menuLinkPeople.textContent = "Люди";
    menuBurgerList.appendChild(menuIconSearch);
    menuBurgerList.appendChild(menuIconPeople);
    menuIconSearch.append(menuLinkSearch);
    menuIconPeople.append(menuLinkPeople);
    addClass(menuIconSearch, "menu-burger__item")
    addClass(menuIconPeople, "menu-burger__item")
    addClass(menuLinkSearch, "menu-burger__link")
    addClass(menuLinkPeople, "menu-burger__link")
    }
   
}
function mediaChangeLow (e){
    if (e.matches){
        menuBurgerList.removeChild(menuIconSearch);
      menuBurgerList.removeChild(menuIconPeople)
    }
}

mediaMore630.addListener(mediaChangeMore)
mediaChangeMore(mediaMore630)
function addClass(who, what){
    who.classList.add(what)
}
///////////////////////////////////////////////////////
let ukraine = document.querySelector(".ukraine");
let ukraineTitle = document.querySelector(".ukraine__title")
let world = document.querySelector(".world")
let worldTitle = document.querySelector(".world__title")

ukraine.addEventListener("click", ()=>{
    addClass(ukraine, "active-head")
    ukraineTitle.style.fontWeight = "700"
    worldTitle.style.fontWeight = "400"
    world.style.backgroundColor = "#FFEECC"
})
world.addEventListener("click", ()=>{
    ukraineTitle.style.fontWeight = "400"
    worldTitle.style.fontWeight = "700"
    world.style.backgroundColor = "#FFFFFF"
    ukraine.classList.remove("active-head")
})

