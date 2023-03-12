let random = Math.floor(Math.random() * 11);
let hak = 0;
function formKontrol() {
    let veri = document.getElementById("txtSayi").value;
    if (veri >= 0 && veri <= 10 && hak <= 3) {
        hak++;

        if (random == veri){
        document.getElementById("win").innerHTML = "Kazandınız!";}
        else{
                document.getElementById("win").innerHTML = "Devam edin..";
        }
    } else {
        document.getElementById("win").innerHTML = "Hakkınız bitti..";
        document.getElementById("fail").innerHTML = "Kaybettiniz.";
    }
}