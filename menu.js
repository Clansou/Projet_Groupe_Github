'use strict';

let btn = document.querySelector('.burger_menu')
let menu = document.querySelector('.menu')

if (btn != null ) {
    function toggleMenu () {
        if (menu.classList.contains('hidden_menu')){
            menu.classList.remove('hidden_menu')
            menu.classList.add('shown_menu')
        } else if (menu.classList.contains('shown_menu')) {
            menu.classList.remove('shown_menu')
            menu.classList.add('hidden_menu')
        }
    }

    btn.addEventListener("click", toggleMenu)

    console.log(btn)

    
}
