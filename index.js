
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
   document.location.reload(true);
   

}
var count=0;
function userdata(){
    for(var key in localStorage){
        count=count+1;
   var node = document.createElement("LI");                 // Create a <li> node
   var textnode = document.createTextNode(JSON.parse(localStorage.getItem(key)).name);         // Create a text node
   node.appendChild(textnode);                              // Append the text to <li>
   document.getElementById("ud1").appendChild(node);
   var node1 = document.createElement("LI");                 // Create a <li> node
   var textnode1 = document.createTextNode(JSON.parse(localStorage.getItem(key)).email);         // Create a text node
   node1.appendChild(textnode1);                              // Append the text to <li>
   document.getElementById("ud1").appendChild(node1);
   var node2 = document.createElement("LI");                 // Create a <li> node
   var textnode2 = document.createTextNode(JSON.parse(localStorage.getItem(key)).pno);         // Create a text node
   node2.appendChild(textnode2);                              // Append the text to <li>
   document.getElementById("ud1").appendChild(node2);
   var node3 = document.createElement("LI");                 // Create a <li> node
   var textnode3 = document.createTextNode(JSON.parse(localStorage.getItem(key)).date);         // Create a text node
   node3.appendChild(textnode3);                              // Append the text to <li>
   document.getElementById("ud1").appendChild(node3);
   var node4 = document.createElement("LI");                 // Create a <li> node
   var textnode4 = document.createTextNode(JSON.parse(localStorage.getItem(key)).time);         // Create a text node
   node4.appendChild(textnode4);                              // Append the text to <li>
   document.getElementById("ud1").appendChild(node4);
   var linebreak = document.createElement('HR');
   document.getElementById("ud1").appendChild(linebreak);
        if(count==localStorage.length){
            break;
        }
    }
  }


