let rounds;
let preference;
const br = document.createElement("br");
document.querySelector(".start_submit").addEventListener("click", function(){
	rounds = document.querySelector(".textInput").value;
	document.querySelector(".textInput").disabled = true;
	document.querySelector(".start_submit").disabled = true;
	rollDie()
	firstPlayer()
	/* do later: error if rounds is not an odd number*/
})

let rollDie = () => {
	//return Math.floor(Math.random() * 6)+1
	return Math.floor(Math.random() * 2)+1
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
    document.querySelector(".firstPlayer").classList.remove("hidden");
    document.querySelector(".rollDie").addEventListener("click", function(){
    	let results = rollFirstDie()
    	let first = results[0]
    	let second = results[1]
    	document.querySelector(".results").classList.remove("hidden");
    	document.querySelector(".order").classList.remove("hidden")
    	if(first == second){
    		document.querySelector(".order").textContent = "The results were the same! Roll again!"
    	}else{
    		if (first > second){
    			document.querySelector(".order").textContent = "Player one got a higher value! Player one will go first!"
    			preference="first"
    		}else{
    			document.querySelector(".order").textContent = "Player two got a higher value! Player two will go first!"
    			preference="second"
    		}
    		document.querySelector(".rollDie").disabled = true;
    		/*setTimeout(function() {
  			document.querySelector(".firstPlayer").classList.add("hidden");
			}, 2000);*/
			let continueButton = document.querySelector(".continue")
			continueButton.classList.remove("hidden")
			continueButton.addEventListener("click", function(){
				document.querySelector(".firstPlayer").classList.add("hidden");
			})
			}
    	})

    	}

let rollFirstDie = () =>{
	let first;
	let second;
	first = rollDie()
    second = rollDie()
    document.querySelector(".firstResult").textContent=first;
    document.querySelector(".secondResult").textContent=second;
    return [first, second]
}
