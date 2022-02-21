let nav = document.querySelector("nav.header-left")
let iconNav = document.querySelector(".header-top .header-icon")


let listenerFunctions = {
    openNav: (event)=>{
      nav.style.display = "block"  
    },
    closeNav: ()=>{
        nav.style.displaye = "none"
    }

}
setupListeners = () =>{
    iconNav.onmouseover = listenerFunctions.openNav;

    nav.onmouseleave = listenerFunctions.closeNav;
  
    
}
