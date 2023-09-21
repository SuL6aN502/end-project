let main_click = document.getElementById('main-click');
let main_menu = document.getElementById('main-menu');
let main = document.querySelector('main');
let ul = document.getElementById('main-menu-ul')
main.onclick = ()=>{
    main_menu.classList.remove('show-menu');
    ul.style.display = 'none';
};
main_click.onclick = ()=>{
    main_menu.classList.add('show-menu');
    ul.style.display = 'flex';
};