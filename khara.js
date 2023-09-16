console.log("fuck");
const parent =document.getElementById("parent")
const childList = parent.childNodes
const childNum= parent.childNodes.length
let count=0
for (let i = 0; i < childNum ; i++) {
if (childList[i].nodeName.toLowerCase() === "p") {
    count ++
}
    
}
console.log(count);
console.log(childNum);

let input = document.getElementById("HIND")
console.log(input.attributes.length);

const newElement = document.createElement("p")
const content = document.createTextNode("hello world !!")
newElement.appendChild(content)

parent.insertBefore(newElement,parent.children[1])
// parent.appendChild(newElement)
