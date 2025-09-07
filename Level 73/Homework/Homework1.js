// 2. Create a <p> and add to body
const p = document.createElement("p");
p.textContent = "This is a new paragraph.";
document.body.appendChild(p);

// 3. Create <h1>, append to a <div>
const h1 = document.createElement("h1");
h1.textContent = "Hello, World!";
const div = document.createElement("div");
div.appendChild(h1);
document.body.appendChild(div);

// 4. Create <img>, set src, add to page
const img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
document.body.appendChild(img);

// 5. Create <button> with text and add to body
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// 6. Create <ul> and add 3 <li> items
const ul = document.createElement("ul");
["Item 1", "Item 2", "Item 3"].forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// 9. Replace a <p> inside <div id="textContainer">
const textContainer = document.getElementById("textContainer");
if (textContainer) {
  const oldP = textContainer.querySelector("p");
  const newP = document.createElement("p");
  newP.textContent = "This paragraph replaced the old one.";
  if (oldP) {
    textContainer.replaceChild(newP, oldP);
  }
}

// 10. Replace <button> with <span> in a <div>
const buttonContainer = document.createElement("div");
const btn = document.createElement("button");
btn.textContent = "Old Button";
buttonContainer.appendChild(btn);
document.body.appendChild(buttonContainer);

// Replace button with span
const span = document.createElement("span");
span.textContent = "New Span";
buttonContainer.replaceChild(span, btn);

// 11. Replace <li> in a <ul> with a new one
const singleLiUl = document.createElement("ul");
const singleLi = document.createElement("li");
singleLi.textContent = "Old Item";
singleLiUl.appendChild(singleLi);
document.body.appendChild(singleLiUl);

// Replace with new <li>
const newLi = document.createElement("li");
newLi.textContent = "New Item";
singleLiUl.replaceChild(newLi, singleLi);

// 12. Replace <h2> with <h1>
const h2 = document.createElement("h2");
h2.textContent = "Old Heading";
document.body.appendChild(h2);

const newH1 = document.createElement("h1");
newH1.textContent = "New Heading";

document.body.replaceChild(newH1, h2);

