var button =document.getElementById("enter");
var input =document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 

//return length of input
function inputLength()
{
	return input.value.length;
}

//creating list and delete button
function createListElement()
{
	

	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete Item"));
 		li.appendChild(btn);
 		btn.onclick = removeParent;

}
function addToList(){
	if(inputLength()>0)
	{
		createListElement();
	}
}

function addAfterKeyPress(){
	if (inputLength()>0 && event.keyCode===13) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}

button.addEventListener("click",addToList); 
	
input.addEventListener("keypress", addAfterKeyPress);

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");


btn.appendChild(document.createTextNode("Delete"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
	}

