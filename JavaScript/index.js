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

//
function setItem(id) {
    localStorage.clear();
    localStorage.setItem("item_id", id);
    window.location.href = "/product.html";
}

// Preview Images
function browseImg(event) {
    event.stopPropagation(); 
    
    let preview = event.target.parentElement.previousElementSibling;
    preview.src = event.target.src;
}

// Product
function loadPopular() {
    let popular = document.getElementById("popular-sec");

    for (let i = 0; i < 5; i++) {
        let item = document.createElement("div");
        item.addEventListener('click', () => { setItem(shoes[i].id) })

        item.className = 'item';

        item.innerHTML = `
            <img src="Media/Images/Shoes/${shoes[i].id}_side.png" id="${shoes[i].id}_thumb" alt="" class="item_thmb">

            <div class="item-thmb-options">
                <img onmouseenter="browseImg(event)" src="Media/Images/Shoes/${shoes[i].id}_side.png" class="item-thmb-option active" alt="">
                <img onmouseenter="browseImg(event)" src="Media/Images/Shoes/${shoes[i].id}_top.png" class="item-thmb-option" alt="">
                <img onmouseenter="browseImg(event)" src="Media/Images/Shoes/${shoes[i].id}_back.png" class="item-thmb-option" alt="">
            </div>

            <h3 class="item-name">${shoes[i].name}</h3>

            <div class="item-actions">
                <button class="item-buy">Add to cart</button>
                <button class="item-like"><i class="fa-regular fa-heart"></i></button>
            </div>
        `

        popular.append(item);
        
    }
}

loadPopular();