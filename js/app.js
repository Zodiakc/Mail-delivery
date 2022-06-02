function showList() {
    let showedList = document.querySelector(".about-sublist");
    showedList.classList.add("show")
}
window.onclick = function (event) {
    if (!event.target.matches('.__menu-icon')) {

        let dropdowns = document.getElementsByClassName("about-sublist");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}