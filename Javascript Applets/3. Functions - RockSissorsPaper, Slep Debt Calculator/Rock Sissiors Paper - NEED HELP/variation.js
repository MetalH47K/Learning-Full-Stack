var choices = ["rock", "paper", "scissors"];

function compare(choice1, choice2) {
    choice1 = choices.indexOf(choice1);
    choice2 = choices.indexOf(choice2);
    if (choice1 == choice2) {
        return "Tie";
    }
    if (choice1 == choices.length - 1 && choice2 == 0) {
        return "Right wins";
    }
    if (choice2 == choices.length - 1 && choice1 == 0) {
        return "Left wins";
    }
    if (choice1 > choice2) {
        return "Left wins";
    } else {
        return "Right wins";
    }
}

var result = ""

for (i in choices) {
    for (j in choices) {
        left = choices[i];
        right = choices[j];
        result += left + " " + right + " " + compare(left, right) + "\n";
    }
}

alert(result);