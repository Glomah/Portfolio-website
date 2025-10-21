const menuBtn = document.getElementById('showMenu');

menuBtn.addEventListener('click', () =>{
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.remove('hidden');
})
