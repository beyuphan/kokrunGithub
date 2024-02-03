console.log("geldim");
function pageOnloaded(){
    var card = document.getElementsByClassName("card");
    var cardIndex = 0;
    card[0].style.display = "flex"; 
    card[1].style.display = "flex"; 
    card[2].style.display = "flex"; 
}

function sagagit(){
    var card = document.getElementsByClassName("card");
    var cardFlex = [];
    for (var i = 0; i < card.length; i++) { 
        if (card[i].style.display=="flex"){
            cardFlex.push(i);
        }
    } // hangi elementler flex olduğunu dizide tuttuk.

    var eklenecekCardFlex = cardFlex[2]+1;
    if(eklenecekCardFlex < card.length){
        for (var i = 0; i < card.length; i++) {
            var silinecek = cardFlex[0];
            card[silinecek].style.display = "none";
            
        }
        cardFlex.shift();
        cardFlex.push(eklenecekCardFlex);
   
     // elemanlar 1 kaydırıldı.
        for (var i = 0; i < card.length; i++){
            var eklenecek = cardFlex[2];
                card[eklenecek].style.display = "flex";
            } 
    } else if(eklenecekCardFlex >= card.length){ }
}

function solagit(){
    var card = document.getElementsByClassName("card");
    var cardFlex = [];
    for (var i = 0; i < card.length; i++) { 
        if (card[i].style.display=="flex"){
            cardFlex.push(i);
        }
    } // hangi elementler flex olduğunu dizide tuttuk.

    var eklenecekCardFlex = cardFlex[0]-1;
    if(eklenecekCardFlex >= 0){
        for (var i = 0; i < card.length; i++) {
            var silinecek = cardFlex[2];
            card[silinecek].style.display = "none";
            
        }
        cardFlex.pop();
        cardFlex.unshift(eklenecekCardFlex);
   
     // elemanlar 1 kaydırıldı.
        for (var i = 0; i < card.length; i++){
            var eklenecek = cardFlex[0];
                card[eklenecek].style.display = "flex";
            } 
    } else if(eklenecekCardFlex = 0){ }
}
window.addEventListener('scroll', function() {
    var fixedMenu = document.getElementById("fixedMenu");
    if (window.scrollY > 50) { // veya başka bir eşik değer
        fixedMenu.style.top = "0"; // Top değerini sıfırla
    } else {
        fixedMenu.style.top = ""; // Eğer scroll değeri eşik değerin altındaysa, top değerini sıfırla ve varsayılan değere dön
    }
});

