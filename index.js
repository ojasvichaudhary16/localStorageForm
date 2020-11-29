
function store(){
    var inputName= document.getElementById("name");
    var inputEmail= document.getElementById("Email");
    var inputPno= document.getElementById("Pno");
    var inputTime= document.getElementById("time");
    var inputDate= document.getElementById("date");
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

}
var count=0;
function userdata(){
    for(var key in localStorage){
        count=count+1;
        var node = document.createElement("LI");                            // Create a <li> node
        var textnode = document.createTextNode(localStorage.getItem(key)); // Create a text node
        node.appendChild(textnode);                                       // Append the text to <li>
        document.getElementById("ud1").appendChild(node);
        if(count==localStorage.length){
            break;
        }
    }
}

