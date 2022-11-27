let slider = document.getElementById("Range");
let output = document.getElementById("ValueRange");
output.innerHTML = slider.value + '%';
slider.oninput = function () {
    output.innerHTML = this.value + '%';
}
