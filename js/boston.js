let current_player, total_rounds, playing, original_player;
let current_round = one_score = one_rounds = two_score = two_rounds = 0;

let rollDie = () => {
	return Math.floor(Math.random() * 6)+1;
}

// decide how many rounds to play
document.querySelector(".start_submit").addEventListener("click", function() {
    if (document.getElementById('round_num').value % 2 == 1) {
        console.log("start")
        total_rounds = parseInt(document.getElementById('round_num').value);
        document.querySelector(".start_page").classList.add("hidden");
        document.querySelector(".not_odd").classList.add("hidden");
        document.querySelector(".roll_for_first").classList.remove("hidden");
        document.querySelector(".restart").classList.remove("hidden");
    } else {
        document.querySelector(".not_odd").classList.remove("hidden");
        document.getElementById("round_num").disabled = false;
        document.querySelector(".textInput").value = "";
    }   
});

// restarting the game 
document.querySelector(".restart").addEventListener("click",function(){
    document.querySelector(".roll_for_first").classList.add("hidden");
    document.querySelector(".game_play").classList.add("hidden");
    document.querySelector(".winner").classList.add("hidden");``
    document.querySelector(".restart").classList.add("hidden");
    document.querySelector(".start_page").classList.remove("hidden");
    document.querySelector(".first_dice").classList.remove("hidden");
    document.querySelector(".play").classList.add("hidden");
    current_player = total_rounds = playing = original_player = null;
    current_round = one_score = one_rounds = two_score = two_rounds = 0;
    document.querySelector(".first_dice").addEventListener("click", first_dice);
    for (child of document.querySelector(".game_play").getElementsByTagName('button')){
        if (!child.classList.contains("first_roll") && !child.classList.contains("hidden")){
            child.classList.add("hidden")
        }
    }
    document.querySelector(".one_dice").textContent = "Player 1: N/A"
    document.querySelector(".two_dice").textContent = "Player 2: N/A"
    document.querySelector(".first_player").textContent = "The player to go first is..."
    document.querySelector(".current_player").textContent = "Current Player: N/A"
    document.querySelector(".dice_nums").textContent = "Roll Results: N/A"
})

document.querySelector(".first_dice").addEventListener("click", first_dice);

// decide who goes first
function first_dice() {
    console.log("...run")
    player_one = rollDie();
    document.querySelector(".one_dice").textContent = `Player 1: ${player_one}`;
    player_two = rollDie();
    document.querySelector(".two_dice").textContent = `Player 2: ${player_two}`;
    if (player_one > player_two) {
        document.querySelector(".first_player").textContent = "Player 1 goes first!"
        document.querySelector(".first_dice").classList.add("hidden");
        document.querySelector(".play").classList.remove("hidden");
        current_player = original_player = 1;
        console.log("current player is 1")
    } else if (player_one == player_two) {
        document.querySelector(".first_player").textContent = "Tie! Roll again."
    } else {
        document.querySelector(".first_player").textContent = "Player 2 goes first!"
        document.querySelector(".first_dice").classList.add("hidden");
        document.querySelector(".play").classList.remove("hidden");
        current_player = original_player = 2;
        console.log("current player is two")
    }
}

// shows who goes first + play button to transition into player turn
document.querySelector(".play").addEventListener("click", function() {
    document.querySelector(".roll_for_first").classList.add("hidden");
    document.querySelector(".game_play").classList.remove("hidden");
    document.querySelector(".round").textContent = `Player One Score: ${current_round}`
    document.querySelector(".one_score").textContent = `Player One Score: ${one_score}`
    document.querySelector(".one_rounds").textContent = `Player One Rounds Won: ${one_rounds}`
    document.querySelector(".two_score").textContent = `Player Two Score: ${two_score}`
    document.querySelector(".two_rounds").textContent = `Player Two Rounds Won: ${two_rounds}`
    document.querySelector(".current_player").textContent = `Current Player: ${current_player}`
    console.log(document.querySelector(".game_play").classList)
    player_turn();
    current_round = 1;
    //end_turn();
    document.querySelector(".total_rounds").textContent = `Total Rounds: ${total_rounds}`;
})

function first_roll(){
    console.log("first")
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
}

function second_roll(){
    console.log("second")
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
}

function third_roll() {
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
    }

function player_turn() {
    console.log("player turn");
    // first roll
    playing = true;
    //while(playing == true){
    document.querySelector(".first_roll").classList.remove("hidden");
    document.querySelector(".first_roll").addEventListener("click", first_roll)

    // second roll
    document.querySelector(".second_roll").addEventListener("click", second_roll)

    // last roll
    document.querySelector(".last_roll").addEventListener("click", third_roll)
}
//}

function end_turn() {
    console.log("end turn");
    /*let end_turn = document.createElement("button")
    end_turn.textContent="End Turn"
    document.querySelector(".game_play").insertBefore(end_turn,document.querySelector(".dice_nums").nextSibling)*/
    document.querySelector(".end_turn").classList.remove("hidden");
    document.querySelector(".end_turn").addEventListener("click", end_turn_helper)
    //end_turn.addEventListener("click",end_turn_helper)
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
    document.querySelector(".first_roll").classList.add("hidden");
    document.querySelector(".end_round").addEventListener("click", function() {
        console.log(one_score)
        if (one_score > two_score) {
            one_rounds++;
            document.querySelector(".one_rounds").textContent = `Player One Rounds Won: ${one_rounds}`
        } else if (one_score < two_score) {
            two_rounds++;
            document.querySelector(".two_rounds").textContent = `Player Two Rounds Won: ${two_rounds}`
        }
        document.querySelector(".end_round").classList.add("hidden");
        if(current_round == total_rounds){
            end()
        }else{
            one_score = two_score = 0;
            current_round++;
            document.querySelector(".round").textContent = `Round ${current_round}`;
            document.querySelector(".one_score").textContent = `Player One Score: ${one_score}`;
            document.querySelector(".two_score").textContent = `Player Two Score: ${two_score}`;
            player_turn()
}
        }, {once : true}
    )
}

function end(){
// winner page
//if (current_round > total_rounds) {
    console.log("end")
    if (one_rounds > two_rounds) {
        winner = 1;
    } else {
        winner = 2;
    }
    document.querySelector(".end_game").classList.remove("hidden");
    document.querySelector(".end_game").addEventListener("click", function(){
        document.querySelector(".game_play").classList.add("hidden");
        document.querySelector(".winner").classList.remove("hidden");
        document.querySelector(".winner").textContent = `The winner is... Player ${winner}!!!`
    })
}