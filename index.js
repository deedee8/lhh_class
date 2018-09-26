let answer = random(1, 10);

while (true) {
    let guess = prompt("Enter a number between 1 and 10");

    if (guess < answer) {
        alert("Too low!");
    }
    else if (guess > answer) {
        alert("Too high!");
    }
    else {
        alert("You got it!");
        break;
    }
}