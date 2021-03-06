const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
    input.addEventListener("focus", function inpFocus() {
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    });
    input.addEventListener("blur", function inpBlur() {
        let parent = this.parentNode.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    });
});