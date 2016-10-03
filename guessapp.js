// Create a simple guessing game. Your app should:

// generate a random number (that is hidden from the player) that the player will try to guess
// allow a player to type a number guess into an input box
// allow up to 5 guesses
// inform the player if they guess correctly
// inform the player if they have run out of guesses
// allow the player to click a button to reset the game and start over


// var guess = $('input').val()
var rand = Math.round(Math.random()*5)
console.log(rand)
var chances = 5
$('#button').on('click',function(){
var guess = $('#inputone').val()
	if(guess == rand){
		chances = 5
		alert('THATS IT BITCH! GREAT JOB!')
	}
	else if(guess !== rand){
		chances = chances-1
			if(chances == 0){
				alert('BBBBOOOOOOMMMMMM,ITS OVER....NO MORE CHANCES')
				chances = 5
				var randy = Math.round(Math.random()*5)
			}
			else{
				alert('WRONG ANSWER MOTHAFUCKA...KEEP TRYING! YOU ONLY HAVE ' + chances+' LEFT THOUGH!')
			}
		
	}
	// }else
	// 	alert('WRONG ANSWER MOTHAFUCKA...KEEP TRYING! YOU ONLY HAVE ' + chances+' LEFT THOUGH!')
})
$('input').hover(function(){
	$(this).css({'background-color':'lightpink'})
	$(this).mouseleave(function(){
		$(this).css({'background-color':'white'})
	})
})

$('#restart').on('click',function(){
	chances = 5;
	var ran = Math.round(Math.random()*5)
	alert('5 MORE CHANCES')
})


// $('#restart').on('click',function(){
// 	chances = 0
// })