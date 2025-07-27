const navImages = document.querySelectorAll(".img-nav-btn");

function serveItem() {
    const url = new URL(window.location.href);
    const itemId = url.searchParams.get("id");
    let shoe;
    
    shoes.forEach(s => { if (s.id == itemId) {shoe = s} })
    if (shoe == undefined) alert("No Shoe found!");

    $("#_name").html(shoe.name);
    $("#_price").html("R" + shoe.price);

    $('title').html("Shoes | " + shoe.name)

    $("#img-preview").prop('src', `Media/Images/Shoes/${itemId}_side.png`);
    
    navImages[0].src = `Media/Images/Shoes/${itemId}_side.png`;
    navImages[1].src = `Media/Images/Shoes/${itemId}_top.png`;
    navImages[2].src = `Media/Images/Shoes/${itemId}_back.png`;

    $(".desc-content").html(`<p>${shoe.desc}</p>`);
}

function ViewImage(i) {
    $("#img-preview").prop('src', navImages[i].getAttribute("src"));
}

for (let i = 0; i < navImages.length; i++) {
    navImages[i].addEventListener('click', function() {
        ViewImage(i);
    });
}

serveItem();