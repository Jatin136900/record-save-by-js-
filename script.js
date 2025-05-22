let btn = document.getElementById("btn1");

btn.addEventListener("click", () => {
    let original = document.getElementById("main");
    let clone = original.cloneNode(true);
    let hulk = clone.querySelectorAll("input, select");
    hulk.forEach(child => {
        if (child.tagName === "SELECT") {
            child.selectedIndex = 0;
        } else {
            child.value = "";
        }
    });
    document.getElementById("clone-container").appendChild(clone);
});





