let header = document.getElementById('header'),
    navLink = document.querySelectorAll('.nav-link');


// Add sticky class to the header when scrolling down

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// ADD ACTIVE STATE TO CLICKED NAV LINK
navLink.forEach(function (nav) {
    // console.log(nav);
    nav.addEventListener('click', function (e) {
        selectedItem = e.target;
        nav.classList.remove('active');
        this.classList.add('active');
    })
})