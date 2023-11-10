let total_rounds, current_player;
let one_score = one_rounds = two_score = two_rounds = 0;
let current_round = 1;

let rollDie = () => {
	return Math.floor(Math.random() * 6)+1;
}

// decide how many rounds to play
document.querySelector(".start_submit").addEventListener("click", function() {
    if (document.getElementById('round_num').value % 2 == 1) {
        total_rounds = document.getElementById('round_num').value;
        document.querySelector(".start_page").classList.add("hidden");
        document.querySelector(".not_odd").classList.add("hidden");
        document.querySelector(".roll_for_first").classList.remove("hidden");
    } else {
        document.querySelector(".not_odd").classList.remove("hidden");
        document.getElementById("round_num").disabled = false;
        document.querySelector(".textInput").value = "";
    }   
});

// decide who goes first
document.querySelector(".first_dice").addEventListener("click", function() {
    player_one = rollDie();
    document.querySelector(".one_dice").textContent = `Player 1: ${player_one}`;
    player_two = rollDie();
    document.querySelector(".two_dice").textContent = `Player 2: ${player_two}`;
    if (player_one > player_two) {
        document.querySelector(".first_player").textContent = "Player 1 goes first!"
        document.querySelector(".first_dice").classList.add("hidden");
        document.querySelector(".play").classList.remove("hidden");
        current_player = 1;
    } else if (player_one == player_two) {
        document.querySelector(".first_player").textContent = "Tie! Roll again."
    } else {
        document.querySelector(".first_player").textContent = "Player 2 goes first!"
        document.querySelector(".first_dice").classList.add("hidden");
        document.querySelector(".play").classList.remove("hidden");
        current_player = 2;
    }
});

document.querySelector(".play").addEventListener("click", function() {
    document.querySelector(".roll_for_first").classList.add("hidden");
    document.querySelector(".game_play").classList.remove("hidden");
    document.querySelector(".current_player").textContent = `Current Player: ${current_player}`
})

// first player's first roll
document.querySelector(".first_roll").addEventListener("click", function() {
    score = first_roll();
    if (current_player == 1) {
        one_score += score;
        document.querySelector(".one_score").textContent = `Player One Score: ${one_score}`;
    } else {
        two_score += score;
        document.querySelector(".two_score").textContent = `Player Two Score: ${two_score}`;
    }
    document.querySelector(".first_roll").classList.add("hidden");
    document.querySelector(".second_roll").classList.remove("hidden");
})

function first_roll() {
    roll1 = rollDie();
    roll2 = rollDie();
    roll3 = rollDie();
    score = Math.max(roll1, roll2, roll3);
    return score;
}

function second_roll() {
    roll1 = rollDie();
    roll2 = rollDie();
    score = Math.max(roll1, roll2);
    return score;
}