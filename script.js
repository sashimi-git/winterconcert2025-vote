let group;
/*
variable: group
* 0: Red Group
* 1: White Group
*/

const GROUP_LIST = ["紅組", "白組"];

window.addEventListener("pageshow", () => {
    group = undefined;

    if (Cookies.get("isntFirstTime")) {
        window.location.href = "./thanks.html";
    }
});

const R_button = document.getElementById("R_BUTTON");
const W_button = document.getElementById("W_BUTTON");

const SUBMIT_button = document.getElementById("SUBMIT_BUTTON");
const SUBMIT_SUB_button = document.getElementById("SUBMIT_SUB_BUTTON");
const GROUP_span = document.getElementById("GROUP_SPAN");

R_button.addEventListener("click", () => {
    group = 0;
    R_button.classList.add("is-focused");
    W_button.classList.remove("is-focused");
    SUBMIT_SUB_button.disabled = false;

    GROUP_span.innerText = GROUP_LIST[group];
});

W_button.addEventListener("click", () => {
    group = 1;
    W_button.classList.add("is-focused");
    R_button.classList.remove("is-focused");
    SUBMIT_SUB_button.disabled = false;

    GROUP_span.innerText = GROUP_LIST[group];
});

SUBMIT_button.addEventListener("click", async () => {
    const formData = new FormData();
    formData.append("entry.277471679", GROUP_LIST[group])

    const response = await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSexXKlsKUbE5fD6xIGduj1u-VcloIDOHdCIGseeTlnCLBZjig/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors"
    });

    Cookies.set("isntFirstTime", true);

    window.location.href = "./thanks.html";

});
