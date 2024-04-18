const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.dir(htmlElementNode);
// console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]

// child relationship
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode);
console.log(textNode1);
console.log(bodyElementNode);

// parent relationship
console.log(headElementNode.parentNode);

// sibling relationship
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);



const h1 = document.querySelector("h1");
const div = h1.parentNode;

div.style.color = "red";
div.style.backgroundColor = "brown";

// console.log(h1.parentNode);
// console.log(div);

const body = h1.parentNode.parentNode;
body.style.color = "green";

console.log(body);


// directly selecting body
const AllBody = document.body;
console.log(AllBody);

// selecting head 
const head = document.querySelector("head");
console.log(head);
const title = head.querySelector("title");
console.log(title);


// children property
const container = document.querySelector(".container");
console.log(container.childNodes);
console.log(container.children);

