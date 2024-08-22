const sideBarToggler = document.getElementById('sideBarToggler');
const sidebar = document.getElementById('sideBarContainer');

sidebar.style.width = '0px';
sidebar.style.transition = '0.5s'


const userToggler = document.getElementById('userIconDropDownMenu');
const userMenuCon = document.getElementById("mainMenuContainer");
const screenShelter = document.getElementById("screenShelter");
userMenuCon.style.display = 'none';
screenShelter.style.display = 'none'

function sideBarWidthFinder(){
    let sideBarWidth ;

    if (window.innerWidth < 768){
        sideBarWidth = (String(window.innerWidth) + 'px')
    }else if (window.innerWidth < 1024){
        sideBarWidth = (String((window.innerWidth) * 0.8) + 'px')
    }else if (window.innerWidth >= 1024){
        sideBarWidth = (String((300) + 'px'));
    }else{
        console.log("side Bar Error!")
    }
    return sideBarWidth;
}


function navb(){
    
    if(sideBarToggler.checked){
        sidebar.style.width = sideBarWidthFinder();
        screenShelter.style.display = 'block';
    }else{
        sidebar.style.width = '0px' ;
        screenShelter.style.display = 'none';
    }
}

function userMenu(){
    if (userToggler.checked){
        userMenuCon.style.display = 'block';
        screenShelter.style.display = 'block';
    }else{
        userMenuCon.style.display = 'none';
        screenShelter.style.display = 'none';
    }
}


function userMenu(){
    if (userToggler.checked){
        userMenuCon.style.display = 'block';
        screenShelter.style.display = 'block';
    }else{
        userMenuCon.style.display = 'none';
        screenShelter.style.display = 'none';
    }
}


function clearAll(){
    userToggler.checked = false;
    sideBarToggler.checked = false;
    userMenu()
    navb()
    screenShelter.style.display = 'none';
}