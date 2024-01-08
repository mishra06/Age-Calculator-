const div = document.getElementById("cont");

div.style.backgroundColor="white"

div.style.marginLeft="450px";
div.style.height="auto";
div.style.width="40vw";
div.style.textAlign="center";
div.style.marginTop="80px";

const h1 = document.getElementById("mnln");
h1.style.fontSize="40px";
h1.style.paddingTop="10px";
h1.style.marginBottom="20px";

const p = document.getElementById("para");

p.style.fontweight="800"
p.style.fontSize="18px";

// input section//

const input = document.getElementById("inptdt");

input.style.marginBottom="20px";
input.style.width="40%";
input.style.height="25px"
input.style.borderRadius="3px";
input.style.border="0.25px solid lightgray";



const pp = document.getElementById("res");
pp.style.paddingBottom="10px";
pp.style.fontSize="24px";

// butn section

const butn = document.getElementById("btn");


butn.addEventListener("click",(e)=>{

    

    const curntdate = new Date() 
    console.log(curntdate);

    const bdydate = new Date(input.value)
    console.log(bdydate);
    let diff =  curntdate.getTime() - bdydate.getTime();

    if(bdydate=="Invalid Date"){
        pp.innerText= "Enter valid DOB :(";
        return;
        }

    let year = diff/(1000*60*60*24*365);
    console.log(Math.floor(year));



    // month------

    const curntmnth = curntdate.getMonth()+1;
    console.log(curntmnth);

    const bdymnth = bdydate.getMonth() +1;
    console.log(bdymnth);

    let newmnth = curntmnth - bdymnth;
    console.log(newmnth);

    if(bdydate<curntdate){
        pp.innerText=`your age is ${Math.floor(year)} Years old`
    }
    else pp.innerText=`your age is -1 Years old`

    //pp.innerText=`your age is ${Math.floor(year)} Years old`



})








// let curntdate = new Date()
// console.log(curntdate);
// let inputdate = new Date(2022,11,6)
