let nadpis = document.querySelectorAll("h1")[0];

document.addEventListener("keyup", (e)=> {
    console.log(e.code);
    if (e.code === "KeyB"){
        nadpis.style.color = "blue";
    } else if (e.code === "KeyR") {
        nadpis.style.color = "red";
    } else if (e.code === "KeyG") {
        nadpis.style.color = "green";
    } else if (e.code === "KeyP") {
        nadpis.style.color = "pink";
    } else if (e.code === "KeyW") {
        nadpis.style.color = "white";
    } else if (e.code === "KeyV") {
        nadpis.style.color = "violet";
    } else if (e.code === "KeyO") {
        nadpis.style.color = "orange";
    };
});