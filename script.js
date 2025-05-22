 let btn = document.getElementById("btn1");

    btn.addEventListener("click", () => {
        let original = document.getElementById("main");
        let clone = original.cloneNode(true);
        document.getElementById("clone-container").appendChild(clone);
    });