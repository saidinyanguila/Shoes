const navImages = document.querySelectorAll(".img-nav-btn");

function serveItem() {
    let itemId = localStorage.getItem("item_id");
    let shoe;
    
    shoes.forEach(s => { if (s.id == itemId) {shoe = s} })

    $("#_name").html(shoe.name);
    $("#_price").html("R" + shoe.price);

    $('title').html("Shoes | " + shoe.name)

    $("#img-preview").prop('src', `Media/Images/Shoes/${itemId}_side.png`);
    
    navImages[0].src = `Media/Images/Shoes/${itemId}_side.png`;
    navImages[1].src = `Media/Images/Shoes/${itemId}_top.png`;
    navImages[2].src = `Media/Images/Shoes/${itemId}_back.png`;
}

serveItem();