let current_player, total_rounds, playing, original_player, current_round;
let one_score = one_rounds = two_score = two_rounds = 0;

let rollDie = () => {
	return Math.floor(Math.random() * 6)+1;
}

// decide how many rounds to play
document.querySelector(".start_submit").addEventListener("click", function() {
    if (document.getElementById('round_num').value % 2 == 1) {
        total_rounds = parseInt(document.getElementById('round_num').value);
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
        current_player = original_player = 1;
    } else if (player_one == player_two) {
        document.querySelector(".first_player").textContent = "Tie! Roll again."
    } else {
        document.querySelector(".first_player").textContent = "Player 2 goes first!"
        document.querySelector(".first_dice").classList.add("hidden");
        document.querySelector(".play").classList.remove("hidden");
        current_player = original_player = 2;
    }
});

// shows who goes first + play button to transition into player turn
document.querySelector(".play").addEventListener("click", function() {
    document.querySelector(".roll_for_first").classList.add("hidden");
    document.querySelector(".game_play").classList.remove("hidden");
    document.querySelector(".current_player").textContent = `Current Player: ${current_player}`
    console.log(document.querySelector(".game_play").classList)
    player_turn();
    current_round = 1;
    //end_turn();
    if(!(document.querySelector(".game_play").classList.contains("hidden"))){
    //round()
    }
})

function player_turn() {
    console.log("player turn");
    // first roll
    playing = true;
    //while(playing == true){
    document.querySelector(".first_roll").addEventListener("click", function() {
        roll1 = rollDie();
        roll2 = rollDie();
        roll3 = rollDie();
        rolls = [roll1, roll2, roll3];
        if (current_player == 1) {
            one_score += Math.max(roll1, roll2, roll3);
            document.querySelector(".one_score").textContent = `Player One Score: ${one_score}`;
        } else {
            two_score += Math.max(roll1, roll2, roll3);
            document.querySelector(".two_score").textContent = `Player Two Score: ${two_score}`;
        }
        document.querySelector(".first_roll").classList.add("hidden");
        document.querySelector(".second_roll").classList.remove("hidden");
        document.querySelector(".dice_nums").textContent = `Roll Results: ${rolls}`;
    })

    // second roll
    document.querySelector(".second_roll").addEventListener("click", function() {
        roll1 = rollDie();
        roll2 = rollDie();
        rolls = [roll1, roll2];
        if (current_player == 1) {
            one_score += Math.max(roll1, roll2);
            document.querySelector(".one_score").textContent = `Player One Score: ${one_score}`;
        } else {
            two_score += Math.max(roll1, roll2);
            document.querySelector(".two_score").textContent = `Player Two Score: ${two_score}`;
        }
        document.querySelector(".second_roll").classList.add("hidden");
        document.querySelector(".last_roll").classList.remove("hidden");
        document.querySelector(".dice_nums").textContent = `Roll Results: ${rolls}`;
    })

    // last roll
    document.querySelector(".last_roll").addEventListener("click", function() {
        score = rollDie();
        if (current_player == 1) {
            one_score += score;
            document.querySelector(".one_score").textContent = `Player One Score: ${one_score}`;
        } else {
            two_score += score;
            document.querySelector(".two_score").textContent = `Player Two Score: ${two_score}`;
        }
        document.querySelector(".last_roll").classList.add("hidden");
        document.querySelector(".dice_nums").textContent = `Roll Results: ${score}`;
        end_turn()
    })
}
//}

function end_turn() {
    console.log("end turn");
    document.querySelector(".end_turn").classList.remove("hidden");
    playing=false;
    if(playing == false){
    document.querySelector(".end_turn").addEventListener("click", end_turn_helper())
}
}

function end_turn_helper(){
if (current_player == 1) {
            current_player = 2;
        } else {
            current_player = 1;
        }
        console.log("...what")
        document.querySelector(".current_player").textContent = `Current Player: ${current_player}`
        document.querySelector(".dice_nums").textContent = `Roll Results: N/A`;
        document.querySelector(".end_turn").classList.add("hidden");
        document.querySelector(".first_roll").classList.remove("hidden");
        if(current_player==original_player){
            end_round()
        }
        //document.querySelector(".end_turn").removeEventListener("click", end_turn_helper())
}

function round(){
// round loop
for (current_round = 1; current_round <= total_rounds; current_round++) {
    console.log("while loop");
    console.log(document.querySelector(".game_play").classList)
    player_turn();
    /*end_turn();
    player_turn();*/
}
}

function end_round(){
    console.log("help!!")
    document.querySelector(".end_round").classList.remove("hidden");
    document.querySelector(".end_round").addEventListener("click", function() {
        console.log(one_score)
        if (one_score > two_score) {
            one_rounds++;
            document.querySelector(".one_rounds").textContent = `Player One Rounds Won: ${one_rounds}`
        } else if (one_score < two_score) {
            two_rounds++;
            document.querySelector(".two_rounds").textContent = `Player Two Rounds Won: ${two_rounds}`
        }
        current_round++;
        one_score = two_score = 0;
    document.querySelector(".round").textContent = `Round ${current_round}`;
    document.querySelector(".end_round").classList.add("hidden");
    document.querySelector(".one_score").textContent = `Player One Score: ${one_score}`;
    document.querySelector(".two_score").textContent = `Player Two Score: ${two_score}`;
    end()
    }, {once : true}
    )
}

function end(){
// winner page
if (current_round > total_rounds) {
    if (one_rounds > two_rounds) {
        winner = 1;
    } else {
        winner = 2;
    }
    document.querySelector(".game_play").classList.add("hidden");
    document.querySelector(".winner").classList.remove("hidden");
    document.querySelector(".winner").textContent = `The winner is... Player ${winner}!!!`
}
}