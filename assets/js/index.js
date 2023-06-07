
function shoes(e){
    const photo = document.getElementById("main-img")
    const background = document.querySelector(".img-container")
    if(e=="blue"){
        photo.src="./assets/medias/nike-b.png"
        background.style.backgroundColor = "#2451f4";
    }
    else if(e=="green"){
        photo.src="./assets/medias/nike-g.png"
        background.style.backgroundColor = "#2ffa14";
    }
    else if(e=="red"){
        photo.src="./assets/medias/nike.png"
        background.style.backgroundColor = "red";
    }
    else if(e=="l-blue"){
        photo.src="./assets/medias/nike-s.png"
        background.style.backgroundColor = "#08f0dd"
    }
}