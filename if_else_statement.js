const number = prompt("Enter a number: ");
if (number >= 0) {
    if (number == 0) {
        alert("You entered number 0");
    } else {
        alert("You entered a positive number");
    }
} else {
    alert("You entered a negative number");
}