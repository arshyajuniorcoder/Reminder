const switchBtn = document.querySelector(".switch-btn");
const task = document.getElementsByClassName("taskContainer");

switchBtn.addEventListener("click", () => {
    if (switchBtn.checked == true) {
        document.body.style.backgroundColor = "#333";
        document.querySelector("h4").style.color = "rgb(255, 255, 255)";
        for (let i = 0; i < task.length; i++) {
            task[i].style.color = "rgb(255, 255, 255)";
        }
    } else {
        document.body.style.backgroundColor = "rgb(230, 230, 230)";
        document.querySelector("h4").style.color = "black";
        for (let i = 0; i < task.length; i++) {
            task[i].style.color = "black";
        }
    }
});
