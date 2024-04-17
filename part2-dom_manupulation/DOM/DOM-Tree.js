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
// console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextSibling.textContent);