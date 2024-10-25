function changePicture(){
    const picture = document.getElementById("slideShow");
    if(picture.src === "/img/slideShow-1.jpg"){
        picture.src = "/img/slideShow-2.jpg";
    }else{
        picture.src = "/img/slideShow-1.jpg";
    }
}

//setInterval(changePicture, 1000);