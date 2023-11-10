let rounds;
document.querySelector(".start_submit").addEventListener("click", function(){
	rounds = document.querySelector(".textInput").value;
	document.querySelector(".textInput").disabled = true;
	document.querySelector(".start_submit").disabled = true;
	rollDie()
	firstPlayer()
	/* do later: error if rounds is not an odd number*/
})

let rollDie = () => {
	console.log(Math.floor(Math.random() * 6)+1)
}

document.querySelector(".start_submit").addEventListener("click", function() {
    if (document.getElementById('round_num').value % 2 == 1) {
        document.querySelector(".start_page").classList.add("hidden");
        document.querySelector(".not_odd").classList.add("hidden");
    } else {
        document.querySelector(".not_odd").classList.remove("hidden");
        document.getElementById("round_num").disabled = false;
        document.querySelector(".textInput").value = "";
    }
        
});

let firstPlayer = () => {
	let first;
	let second;
    document.querySelector(".firstPlayer").classList.remove("hidden");
    document.querySelector(".rollDie").addEventListener("click", function(){
    	first = rollDie()
    	second = rollDie()
})
    document.querySelector(".firstPlayer").appendChild+="????"
console.log(first)
console.log(second)
}
