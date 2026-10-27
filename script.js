let numbers = [];

function generateArray() {
    numbers = [];

    for (let h = 0; h < 5; h++) {
        numbers.push(Math.floor(Math.random() * 100));
    }

    document.getElementById("arrayInput").value = numbers;
}

function pickElements() {
    let first = numbers[0];
    let last = numbers[numbers.length - 1];

    document.getElementById("resultInput").value =
        first + ", " + last;
}