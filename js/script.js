{
    let button__backgroundSiteColor = document.querySelector(".main__button--changeBackgroudColor");
    let button__spanColor = document.querySelector(".button__span--color");
    let mainSite = document.querySelector(".mainSite");

    button__backgroundSiteColor.addEventListener("click", () => {
        
        if (button__spanColor.innerText === "ciemny") {
            button__spanColor.innerText = "jasny";
        } else {
            button__spanColor.innerText = "ciemny";
        }

        mainSite.classList.toggle("js-mainSite");
        button__backgroundSiteColor.classList.toggle("js-main__button--changeBackgroudColor");
    });
}