var header = document.getElementById("header");
var menu1 = document.getElementById("menu");
var entete = document.getElementById("entete");
var lien = document.getElementsByClassName("lien");

window.addEventListener("scroll",scroll);

function scroll(){
    if (document.documentElement.scrollTop > 100) {
        header.style.marginTop = "-10.3vw";
        header.style.position = "fixed";
        header.style.opacity = "0";
        header.addEventListener("mouseover",menu);
        header.addEventListener("mouseout",menu2);


        //<!> Modif importante de menu
        header.style.height = "6vw"; 

        menu1.style.marginTop = "1.2vw";
        menu1.style.marginLeft = "15vw";


        lien[0].style.fontSize = "1.4vw";
        lien[1].style.fontSize = "1.4vw";
        lien[2].style.fontSize = "1.4vw";
        lien[3].style.fontSize = "1.4vw";
        lien[4].style.fontSize = "1.4vw";

        smbre.style.fontSize = "0.8vw";
        smbre.style.width = "6vw";
        smbre.style.height = "3vw";
        smbre.style.paddingLeft = "-2vw";
        smbre.style.marginTop = "0.7vw";
        // <!>
    }
    else{
        header.style.marginTop = "-10.3vw";
        header.style.position = "absolute";
        header.style.opacity = "1";
        header.removeEventListener("mouseover",menu);
        header.removeEventListener("mouseout",menu2);


        //<!>
        header.style.height = "7.5vw"; 

        menu1.style.marginTop = "2vw";
        menu1.style.marginRight = "8vw";
        menu1.style.marginLeft = "0vw";

        lien[0].style.fontSize = "1.5vw";
        lien[1].style.fontSize = "1.5vw";
        lien[2].style.fontSize = "1.5vw";
        lien[3].style.fontSize = "1.5vw";
        lien[4].style.fontSize = "1.5vw";

        smbre.style.width = "9vw";
        smbre.style.height = "3.5vw";
        smbre.style.paddingLeft = "-2vw";
        smbre.style.fontSize = "1.1vw";
        smbre.style.marginTop = "1.2vw";
        // <!>
    }
}
function menu(){
  if (header.style.opacity == "0"){
  header.style.opacity = "1";}
}
function menu2(){
  header.style.opacity = "0";
}

var bleu = document.getElementById("bleu");
var bordure = document.getElementById("bordure");


var haut = document.getElementById("haut");
var met = document.getElementById("met");
var numun = document.getElementById("numun");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var numdeux = document.getElementById("numdeux");

var entre = document.getElementById("entre");
var numtrois = document.getElementById("numtrois");

var plai = document.getElementById("plai");
var numquatre = document.getElementById("numquatre");

// var numcinq = document.getElementById("numcinq");

var button = document.getElementById("button");
var trait = document.getElementById("trait");
var traithor = document.getElementById("traithor");
var pres1 = document.getElementById("pres1");
var pres2 = document.getElementById("pres2");
var pres3 = document.getElementById("pres3");

var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n4 = document.getElementById("n4");

var contactx = document.getElementById("contactx");
var rsx = document.getElementById("rsx");
var bre = document.getElementById("bre");

var retour = document.getElementById("retour");
var paf = document.getElementById("paf");

button.addEventListener("click",pouf)
window.addEventListener("scroll",scroll2);
y = 0;
function pouf(){
  y++;
  if (y==1){
    pres1.style.marginLeft = "7.5vw";
    traithor.style.width = "6vw";
  }
  else if (y==2){
    pres2.style.marginLeft = "52.5vw";
    trait.style.height = "32.2vw";
  }
  else if (y==3){
    document.documentElement.scrollTop = 865;
    pres3.style.opacity = "1";
    button.style.cursor = "auto";
    setTimeout(trait1,1000);
  button.removeEventListener("click",pouf);
  }
}
function trait1(){
  button.style.opacity = "0";
  trait.style.opacity = "0";
  traithor.style.opacity = "0";
}

function scroll2(){
    if (document.documentElement.scrollTop < 6800){
      retour.style.position = "fixed";
      retour.style.bottom = "0.5vw";
      retour.style.marginTop = "0vw";
    }
    if (document.documentElement.scrollTop > 220) {
      console.log(document.documentElement.scrollTop);
    }

// A propos
    // if (document.documentElement.scrollTop > 300) {
    //   pres1.style.opacity = "1";
    //   pres2.style.opacity = "1";
    // }




// BUT/DUT MMI
    if (document.documentElement.scrollTop > 1500) {
      bleu.style.opacity = "1";
      bordure.style.opacity = "1";

      bleu.style.marginLeft = "5vw";
      bordure.style.marginLeft = "52.5vw";
    }


// Métier Idéal
    if (document.documentElement.scrollTop > 2300) {
      haut.style.opacity = "1";
    }

    if (document.documentElement.scrollTop > 2500) {
      met.style.opacity = "1";
      numun.style.opacity = "1";
    }

    if (document.documentElement.scrollTop > 2800) {
      img1.style.opacity = "1";
      img2.style.opacity = "1";
      img3.style.opacity = "1";
      numdeux.style.opacity = "1";
    }

    if (document.documentElement.scrollTop > 3200) {
      entre.style.opacity = "1";
      numtrois.style.opacity = "1";
    }

    if (document.documentElement.scrollTop > 3600) {
      plai.style.opacity = "1";
      numquatre.style.opacity = "1";
    }

    // if (document.documentElement.scrollTop > 4000) {
    //   numcinq.style.opacity = "1";
    // }

// Prérequis
    if (document.documentElement.scrollTop > 4100) {
      n1.style.marginLeft = "25vw";
    }

    if (document.documentElement.scrollTop > 4600) {
      n2.style.opacity = "1";
    }

    if (document.documentElement.scrollTop > 4800) {
      n4.style.marginLeft = "25vw";
    }

// Contact
    if (document.documentElement.scrollTop > 5300) {
      contactx.style.opacity = "1";
      rsx.style.opacity = "1";
      bre.style.height = "20vw";
    }

// Retour
    // if (document.documentElement.scrollTop > 5800){
    //   retour.style.position = "relative";
    //   retour.style.marginLeft = "93.5vw";
    //   retour.style.marginTop = "-3vw";
    // }
}



var or = document.getElementById("or");
or.addEventListener("click",appar);

// var or = document.getElementById("or");
// or.addEventListener("click",appar);

// var or = document.getElementById("or");
// or.addEventListener("click",appar);

// var or = document.getElementById("or");
// or.addEventListener("click",appar);


function appar(evt){
  if (evt.target.id=="or" || evt.target.id == "cacher"){
    if (or.style.opacity == "0"){
      or.style.opacity = "1";
    }
    else{
      or.style.opacity = "0";
      or.style.cursor="auto";
      cacher.style.cursor="auto";
    }
  }
}


var tel = document.getElementById("tel");
var mailx = document.getElementById("mailx");
var local = document.getElementById("local");
var paratel = document.getElementById("paratel");
var paramail = document.getElementById("paramail");
var paraloc = document.getElementById("paraloc");
var paramail1 = document.getElementById("paramail1");
var paraloc1 = document.getElementById("paraloc1");

tel.addEventListener("click",woaw);
mailx.addEventListener("click",woaw);
local.addEventListener("click",woaw);

function woaw(evt){
  console.log(evt.target.id);
  if (evt.target.id == "tel"){
    paratel.style.opacity = "1";
    tel.removeEventListener("click",woaw);
  }

  if (evt.target.id == "mailx"){
    paramail.style.opacity = "1";
    mailx.removeEventListener("click",woaw);
    paramail1.style.cursor = "pointer";
  }

  if (evt.target.id == "local"){
    paraloc.style.opacity = "1";
    local.removeEventListener("click",woaw);
    paraloc1.style.cursor = "pointer";
  }
}



// Mode sombre
var i = 0;

var smbre = document.getElementById("smbre");
smbre.addEventListener("click",chgtmode);

var blanc = document.getElementById("blanc");
var cyan = document.getElementById("cyan");
var cyan2 = document.getElementById("cyan2");
var smr = document.getElementById("smr");
var body = document.getElementById("body");

var eh1 = document.getElementById("eh1");
var eh2 = document.getElementById("eh2");
var eh3 = document.getElementById("eh3");
var eh4 = document.getElementById("eh4");
var eh5 = document.getElementById("eh5");



// var xe = document.getElementById("xe");
// var hrf = document.getElementById("hrf");

var paramail1 = document.getElementById("paramail1");
var paraloc1 = document.getElementById("paraloc1");

var metieer = document.getElementById("metieer");

var yolo = document.getElementById("yolo");

function chgtmode(){
  i++;
  if (i==1){
    smbre.style.color = "#333";
    smbre.style.backgroundColor = "#F0FFF0";

    eh1.style.color = "#F0FFF0";
    eh2.style.color = "#F0FFF0";
    eh3.style.color = "#F0FFF0";
    eh4.style.color = "#F0FFF0";
    eh5.style.color = "#F0FFF0";

    header.style.backgroundColor = "#333";
    header.style.color = "#F0FFF0";
    or.style.backgroundColor = "#333";

    blanc.style.backgroundColor = "#F0FFF0";
    blanc.style.borderColor = "#333";
    blanc.style.color = "#333";

    cyan.style.borderColor = "#F0FFF0";
    cyan2.style.borderColor = "#F0FFF0";
    cacher.style.color = "#F0FFF0";

    body.style.backgroundColor = "#333";

    pres1.style.color = "#F0FFF0";
    pres2.style.color = "#F0FFF0";
    pres1.style.borderColor = "#F0FFF0";
    pres2.style.borderColor = "#F0FFF0";

    bleu.style.color = "#333";
    bleu.style.backgroundColor = "#F0FFF0";
    bordure.style.backgroundColor = "#333";
    bordure.style.borderColor = "#F0FFF0";
    bordure.style.color = "#F0FFF0";
    metieer.style.color = "#F0FFF0";

    img3.style.backgroundImage = "url('style/images/img31.png')";

    numun.style.borderColor = "#F0FFF0";
    numdeux.style.borderColor = "#F0FFF0";
    numtrois.style.borderColor = "#F0FFF0";
    numquatre.style.borderColor = "#F0FFF0";

    // xe.style.color = "#F0FFF0";
    // hrf.style.color = "#F0FFF0";
    haut.style.color = "#F0FFF0";
    numun.style.color = "#F0FFF0";
    numdeux.style.color = "#F0FFF0";
    numtrois.style.color = "#F0FFF0";
    numquatre.style.color = "#F0FFF0";

    n1.style.borderColor = "#F0FFF0";
    n4.style.borderColor = "#F0FFF0";

    n1.style.color = "#F0FFF0";
    n2.style.color = "#F0FFF0";
    n4.style.color = "#F0FFF0";

    contactx.style.borderColor = "#F0FFF0";
    contactx.style.color = "#F0FFF0";

    rsx.style.color = "#F0FFF0";
    paramail1.style.color = "#F0FFF0";
    paraloc1.style.color = "#F0FFF0";

    yolo.style.scrollbarColor = "#F0FFF0 #333333";
    paf.style.color = "#F0FFF0";

    smbre.value = "Light Mode";
  }
  else if (i==2){
    i=0;
    smbre.style.color = "#F0FFF0";
    smbre.style.backgroundColor = "#333";

    eh1.style.color = "#333";
    eh2.style.color = "#333";
    eh3.style.color = "#333";
    eh4.style.color = "#333";
    eh5.style.color = "#333";

    header.style.backgroundColor = "#F0FFF0";
    header.style.color = "#333";
    or.style.backgroundColor = "#F0FFF0";

    blanc.style.backgroundColor = "#333";
    blanc.style.borderColor = "#F0FFF0";
    blanc.style.color = "#F0FFF0";

    cyan.style.borderColor = "#333";
    cyan2.style.borderColor = "#333";
    cacher.style.color = "#333";

    body.style.backgroundColor = "#F0FFF0";

    pres1.style.color = "#333";
    pres2.style.color = "#333";
    pres1.style.borderColor = "#333";
    pres2.style.borderColor = "#333";

    bleu.style.color = "#F0FFF0";
    bleu.style.backgroundColor = "#333";
    bordure.style.backgroundColor = "#F0FFF0";
    bordure.style.borderColor = "#333";
    bordure.style.color = "#333";
    metieer.style.color = "#333";

    img3.style.backgroundImage = "url('style/images/img3.png')";

    numun.style.borderColor = "#333";
    numdeux.style.borderColor = "#333";
    numtrois.style.borderColor = "#333";
    numquatre.style.borderColor = "#333";

    // xe.style.color = "#333";
    // hrf.style.color = "#333";
    haut.style.color = "#333";
    numun.style.color = "#333";
    numdeux.style.color = "#333";
    numtrois.style.color = "#333";
    numquatre.style.color = "#333";

    n1.style.borderColor = "#333";
    n4.style.borderColor = "#333";

    n1.style.color = "#333";
    n2.style.color = "#333";
    n4.style.color = "#333";

    contactx.style.borderColor = "#333";
    contactx.style.color = "#333";

    rsx.style.color = "#333";
    paramail1.style.color = "#333";
    paraloc1.style.color = "#333";

    yolo.style.scrollbarColor = "#333333 #F0FFF0";
    paf.style.color = "#333";

    smbre.value = "Dark Mode";
  }
}
