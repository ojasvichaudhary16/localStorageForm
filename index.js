
function store(){
    var inputName= document.getElementById("name");
   // localStorage.setItem("Name", inputName.value);
    var inputEmail= document.getElementById("Email");
  // localStorage.setItem("Email", inputEmail.value);
    var inputPno= document.getElementById("Pno");
  //  localStorage.setItem("Pno", inputPno.value);
    var inputTime= document.getElementById("time");
  //  localStorage.setItem("Time",inputTime.value);
    var inputDate= document.getElementById("date");
  //  localStorage.setItem("date",inputDate.value)
    var userdetail={
        name:inputName.value,
        email:inputEmail.value,
        pno:inputPno.value,
        date:inputDate.value,
        time:inputTime.value
    }
   localStorage.setItem(inputPno.value,JSON.stringify(userdetail));
   var node = document.createElement("LI");                 // Create a <li> node
   var textnode = document.createTextNode(localStorage.getItem(inputPno.value));         // Create a text node
   node.appendChild(textnode);                              // Append the text to <li>
   document.getElementById("ud1").appendChild(node);
//    for(int i=1;i<=count;i++){
//        document.getElementById()
//    }
    //console.log();
    // console.log(userdetail);
    // let arr=[userdetail];
    // var getName=localStorage.getItem("Name");
    // var getEmail=localStorage.getItem("Email");
    // var getPno=localStorage.getItem("Pno");
    // var getTime=localStorage.getItem("Time");
    // var getDate=localStorage.getItem("date");


    // document.getElementById("ud2").innerHTML=getEmail;
    // document.getElementById("ud3").innerHTML=getPno;
    // document.getElementById("ud4").innerHTML=getTime;
    // document.getElementById("ud5").innerHTML=getDate;

    // localStorage.setItem("time",);

}
var count=0;
function userdata(){
    // for(var key in localStorage){
    //     count=count+1;
    //     var node = document.createElement("LI");                            // Create a <li> node
    //     var textnode = document.createTextNode(localStorage.getItem(key)); // Create a text node
    //     node.appendChild(textnode);                                       // Append the text to <li>
    //     document.getElementById("ud1").appendChild(node);
    //     if(count==localStorage.length){
    //         break;
    //     }
    // }
    for (let [key, value] of Object.entries(localStorage)) {
        console.log(`${key}: ${value}`);
    }
}

