// JavaScript for your portfolio

// Example: Display an alert when the user clicks a project
const projectDivs = document.querySelectorAll('.project');

projectDivs.forEach((project, index) => {
    project.addEventListener('click', () => {
        alert(`You clicked on Project ${index + 1}`);
    });
});



// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
