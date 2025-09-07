let link = document.getElementById("Link");

link.addEventListener("pointerover", function(e) {
    let target = e.target;

    let attributes = target.attributes;
    for (let attr of attributes) {
        console.log(attr.name + " = " + attr.value);
    }

    console.log("Target Element:", target);
});
