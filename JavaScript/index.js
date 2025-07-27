$(".fa-solid.fa-close").click(function() {
    $(".sale-banner").fadeOut();
});

//Slider
var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-nav-button");

for (let i = 0; i < slides.length; i++) {
    buttons[i].addEventListener('click', function() {
        slides.forEach(slide => slide.classList.remove('active'));
        buttons.forEach(button => button.classList.remove('active'));

        slides[i].classList.add('active');
        buttons[i].classList.add('active');
    })
    
}

//content slider
var rightButtons = document.querySelectorAll(".layout-scroll.right");
var leftButtons = document.querySelectorAll(".layout-scroll.left");

rightButtons.forEach(rb => rb.addEventListener('click', function() {
    rb.parentElement.classList.add('scroll');
}))

leftButtons.forEach(lb => lb.addEventListener('click', function() {
    lb.parentElement.classList.remove('scroll');
}))

// New Products
let newSec = document.getElementById("new-sec");
for (let i = 5; i > 0; i--) {
    let item = document.createElement("a");
    item.className = 'item';
    item.setAttribute("href", `/Shoes/product.html?id=${shoes[i].id}`);

    item.innerHTML = `
        <img src="Media/Images/Shoes/${shoes[i].id}_side.png" id="${shoes[i].id}_thumb" alt="" class="item_thmb">

        <h3 class="item-name">${shoes[i].name}</h3>
        <p class="item-price">R ${shoes[i].price}</p>
        <div class="item-actions">
            <button class="item-buy">Add to cart</button>
            <button class="item-like"><i class="fa-regular fa-heart"></i></button>
        </div>
    `
    newSec.append(item);
}

// Popular Products
let popular = document.getElementById("popular-sec");
for (let i = 0; i < 5; i++) {
    let item = document.createElement("a");
    item.className = 'item';
    item.setAttribute("href", `/Shoes/product.html?id=${shoes[i].id}`);

    item.innerHTML = `
        <img src="Media/Images/Shoes/${shoes[i].id}_side.png" id="${shoes[i].id}_thumb" alt="" class="item_thmb">
        <h3 class="item-name">${shoes[i].name}</h3>
        <p class="item-price">R ${shoes[i].price}</p>
        <div class="item-actions">
            <button class="item-buy">Add to cart</button>
            <button class="item-like"><i class="fa-regular fa-heart"></i></button>
        </div>
    `
    popular.append(item);
}

// Mobile
        document.getElementById("btn-expand").addEventListener('click', showMobileNav);
        document.getElementById("btn-collapse").addEventListener('click', hideMobileNav);

        function showMobileNav() {
            var mobileNav = document.getElementById("mobile-nav");
            mobileNav.classList.add("show");
        }
        function hideMobileNav() {
            var mobileNav = document.getElementById("mobile-nav");
            mobileNav.classList.remove("show");
        }
