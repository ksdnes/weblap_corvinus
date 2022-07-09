var navi =document.getElementById("navi");
function showMenu()
{
   navi.style.right="0";
}
function Hidemenu()
{
   navi.style.right="-200px";
}
function osszeg()
{
 var hoodie_egysegar=12000;
 var polo_egysegar=10000;
 var sal_egysegar=5800;
}
 let hoodie_dbszam=document.getElementById("db_hoodie").value;
 let polo_dbszam=document.getElementById("db_mez").value;
 let sal_dbszam=document.getElementById("db_sal").value;

 let hoodie_felirat=0;
 let hoodie_szam=0;
 if(document.getElementById("hoodie_felirat").checked)
 {
    hoodie_felirat+=500*hoodie_dbszam;
 }
 if(document.getElementById("hoodie_szam").checked)
 {
    hoodie_szam+=500*hoodie_dbszam;
 }

 let polo_felirat=0;
 let polo_szam=0;

 if(document.getElementById("polo_felirat").checked)
 {
    polo_felirat+=500*polo_dbszam;
 }
 if(document.getElementById("polo_szam").checked)
 {
    polo_szam+=500*polo_dbszam;
 }

 let sal_felirat=0;
 if(document.getElementById("sal_felirat").checked)
 {
    sal_felirat+=500*sal_dbszam;
 }

 let vegosszeg=(hoodie_dbszam*hoodie_egysegar+hoodie_felirat+hoodie_szam)+(polo_dbszam*polo_egysegar+polo_felirat+polo_szam)+(sal_dbszam*sal_egysegar+sal_felirat);
document.getElementById("eredmeny").value = vegosszeg;