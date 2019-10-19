function addItem(){
    let ul = document.getElementById("list");
    let candidate = document.getElementById("input");
    let li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}
