const hour = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");
const date = document.querySelector(".date");

fixNumbers = function (convert) {
    var persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
    ];
    var englishNumbers = [
        /0/g,
        /1/g,
        /2/g,
        /3/g,
        /4/g,
        /5/g,
        /6/g,
        /7/g,
        /8/g,
        /9/g,
    ];
    if (typeof convert === "string") {
        for (var i = 0; i < 10; i++) {
            convert = convert
                .replace(persianNumbers[i], i)
                .replace(englishNumbers[i], i);
        }
    }
    return convert;
};

function updateClock() {
    var now = new Date();
    var s = now.getSeconds() * 6;
    var m = now.getMinutes() * 6 + s / 60;
    var h = ((now.getHours() % 12) / 12) * 360 + m / 12;

    var options = { day: "numeric" };
    var localDate = new Date().toLocaleDateString("fa-IR", options);
    let englishDate = fixNumbers(localDate);
    date.innerHTML = englishDate;
    hour.style.transform = `rotate(${h}deg)`;
    min.style.transform = `rotate(${m}deg)`;
    sec.style.transform = `rotate(${s}deg)`;
}

setInterval(updateClock, 500);
