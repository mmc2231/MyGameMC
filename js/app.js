console.log('working yo')

// USE THIS TO SHUFFLE YOUR NUMBERS
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
	//debugger;
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};
var a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]


var start = function(){
	shuffle(a)
	makeAndDisplayTiles()
}

var makeAndDisplayTiles = function(){
	$("#game").empty();
	$("#footer").text(" ");
	for(var i=0; i < a.length; i++){
		var tile = $('<div>').addClass("column").attr('data', a[i])
		$("#game").append(tile)
	}
}

var addEventsToTiles = function(){
	$(".column").click(function(){ 
	var letter= $(this).attr('data')
	$(this).text(letter).addClass('found').addClass('clicked');

	if($(".clicked").length == 2){
		checkforMatch()

	}
})
}

var checkforMatch = function(){
console.log("looking for match")
	var clicked = $(".clicked") //array of what has the class 'clicked'
	var one = $(clicked[0]).attr('data')
	var two = $(clicked[1]).attr('data')

	if(one == two){
		$(clicked[0]).removeClass('clicked') // removing clicked or column?
		$(clicked[1]).removeClass('clicked')
		$(clicked[0]).off('clicked')
		$(clicked[1]).off('clicked')

	}

	if(one !== two){
		$(clicked[0]).
		$(clicked[1]).
		$(clicked[0]).
		$(clicked[1]).
	}


}


$(document).ready(function(){
	$('button').click(function(){
		start();
		makeAndDisplayTiles();
		addEventsToTiles();
	})
})
