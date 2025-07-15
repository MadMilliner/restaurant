import { pageContent } from "./pages.js";
import "./styles.css";


const contentDiv = document.getElementById('content');
contentDiv.innerHTML = pageContent;
    
document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');
    const homeContent = document.getElementById('homeContent');
    const menuContent = document.getElementById('menuContent');
    const aboutContent = document.getElementById('aboutContent');


    const clickHome = function() {
        homeContent.style.display = 'grid';
        menuContent.style.display = 'none';
        aboutContent.style.display = 'none';   
    };

    const clickMenu = function() {
        homeContent.style.display = 'none';
        menuContent.style.display = 'grid';
        aboutContent.style.display = 'none';   
    };

    const clickAbout = function() {
        homeContent.style.display = 'none';
        menuContent.style.display = 'none';
        aboutContent.style.display = 'grid';
    };

    homeButton.addEventListener('click', clickHome);
    menuButton.addEventListener('click', clickMenu);
    aboutButton.addEventListener('click', clickAbout);    
});



