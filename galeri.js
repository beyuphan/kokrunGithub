function fotoyubuyut(index){
    var fotoArray = document.getElementsByClassName("case");
    var foto =fotoArray[index].innerHTML;
    var galeri = document.getElementById("fullgaleri");

    galeri.innerHTML += foto;
    galeri.style.position = "fixed";
    galeri.style.display = "flex";
    var kapat = document.createElement("button");
    kapat.setAttribute("id", "kapat");
    kapat.textContent ="X";
    kapat.setAttribute("class", "kapat");
    console.log(kapat);
    kapat.onclick = function(){
        galeri.style.display = "none";
        kapat.style.display = "none";
        galeri.innerHTML -= foto;
    }
    galeri.appendChild(kapat);
}

