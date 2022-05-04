const sidebarbtn = document.querySelector('.sidebar-btn');
const sidebarShow = document.querySelector('.sidebar-show');
const sidebarHideBtn = document.querySelector('.sidebar-hide');



sidebarbtn.addEventListener('click', () => {
    console.log('clicked');
    if (sidebarShow.style.right == '0px') {
        sidebarShow.style.right = '-250px'
    } else {
        sidebarShow.style.right = '0px'
    }
})

sidebarHideBtn.addEventListener('click', () => {
    console.log('clicked');
    if (sidebarShow.style.right == '0px') {
        sidebarShow.style.right = '-250px'
    } else {
        sidebarShow.style.right = '0px'
    }
})