let rounds;

let rollDie = () => {
	return Math.floor(Math.random() * 6)+1;
}

document.querySelector(".start_submit").addEventListener("click", function() {
    if (document.getElementById('round_num').value % 2 == 1) {
        rounds = document.getElementById('round_num').value;
        document.querySelector(".start_page").classList.add("hidden");
        document.querySelector(".not_odd").classList.add("hidden");
        document.querySelector(".roll_for_first").classList.remove("hidden");
    } else {
        document.querySelector(".not_odd").classList.remove("hidden");
        document.getElementById("round_num").disabled = false;
        document.querySelector(".textInput").value = "";
    }   
});

document.querySelector(".first_dice").addEventListener("click", function() {
    player_one = rollDie();
    document.querySelector(".one_dice").textContent = `Player 1: ${player_one}`;
    player_two = rollDie();
    document.querySelector(".two_dice").textContent = `Player 2: ${player_two}`;
    if (player_one > player_two) {
        document.querySelector(".first_player").textContent = "Player 1 goes first!"
        document.querySelector(".first_dice").classList.add("hidden");
    } else if (player_one == player_two) {
        document.querySelector(".first_player").textContent = "Tie! Roll again."
    } else {
        document.querySelector(".first_player").textContent = "Player 2 goes first!"
        document.querySelector(".first_dice").classList.add("hidden");
    }

})