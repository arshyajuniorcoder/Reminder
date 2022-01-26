const add = document.querySelector(".add-elements");
const remind = document.querySelector(".remind-input");
const list = document.querySelector(".list");
const modeBtn = document.querySelector(".switch-btn");

add.addEventListener("click", () => {
    if (remind.value.length === 0) {
        return;
    } else {
        const taskContainer = list.appendChild(document.createElement("li"));
        const task = taskContainer.appendChild(document.createElement("span"));
        const done = taskContainer.appendChild(document.createElement("i"));
        const del = taskContainer.appendChild(document.createElement("i"));
        const labelDate = taskContainer.appendChild(
            document.createElement("label")
        );
        const dateInput = labelDate.appendChild(
            document.createElement("input")
        );
        const slider = labelDate.appendChild(document.createElement("span"));
        taskContainer.className = "taskContainer";
        if (modeBtn.checked == true) {
            taskContainer.style.color = "rgb(255, 255, 255)";
        } else {
            taskContainer.style.color = "black";
        }
        task.className = "task";
        del.className = "fa fa-trash";
        done.className = "fa fa-check";
        task.innerHTML = remind.value;
        remind.value = "";
        del.addEventListener("click", (e) => {
            e.target.parentElement.remove();
            document.querySelector(".datepicker").style.display = "none";
        });
        done.addEventListener("click", (e) => {
            e.target.previousSibling.style.textDecoration = "line-through";
        });
        labelDate.className = "date-box mt-4 mb-4";
        dateInput.type = "checkbox";
        dateInput.className = "date-input";
        slider.className = "toggle-date round";
        const dateBtn = document.getElementsByClassName("date-input");
        const date = task.appendChild(document.createElement("p"));
        date.className = "dateText";
        for (let i = 0; i < dateBtn.length; i++) {
            dateBtn[i].addEventListener("click", () => {
                if (dateBtn[i].checked == true) {
                    document.querySelector(".datepicker").style.display =
                        "block";
                } else {
                    document.querySelector(".datepicker").style.display =
                        "none";
                }
            });
        }
    }
});
