const gallery__picked = document.querySelector(".gallery__row");

gallery__picked.addEventListener("click", changeGallery);

const img1 = document.querySelector(".img__one");
const img2 = document.querySelector(".img__two");
const img3 = document.querySelector(".img__three");
const img4 = document.querySelector(".img__four");

function changeGallery(e){
    const selected = e.target;
    console.log(selected);
    if(selected.classList.contains("mather")){
        img1.src = "assets/img/mather_1.jpg";
        img2.src = "assets/img/mather_2.jpg";
        img3.src = "assets/img/mather_3.jpg";
        img4.src = "assets/img/mather_4.jpg";
    }
    if(selected.classList.contains("bigten")){
        img1.src = "assets/img/bigten_1.jpg";
        img2.src = "assets/img/bigten_2.jpg";
        img3.src = "assets/img/bigten_3.jpg";
        img4.src = "assets/img/bigten_4.jpg";
    }
    if(selected.classList.contains("palatine")){
        img1.src = "assets/img/palatine_1.jpg";
        img2.src = "assets/img/palatine_2.jpg";
        img3.src = "assets/img/palatine_3.jpg";
        img4.src = "assets/img/palatine_4.jpg";
    }
    if(selected.classList.contains("state")){
        img1.src = "assets/img/state_1.jpg";
        img2.src = "assets/img/state_2.jpg";
        img3.src = "assets/img/state_3.jpg";
        img4.src = "assets/img/state_4.jpg";
    }
}