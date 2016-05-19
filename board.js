//The javascript handling all board elements, draws the board
//etc
//Declare a board group...or should it be declared in the main thing...naw
var X_OFFSET = 100, HIGHLIGHT_OFFSET = 5;
var currentCard = null, playerOne;
function factoryCreate()
{
	playerOneHand = game.add.group();
	playerTwoHand = game.add.group();
	allVisible = game.add.group();
	
	
	highlight = allVisible.create(0, 0, "card_highlight");
	highlight.z = -1;
	highlight.scale.setTo(0.75, 0.75);
	highlight.visible = false;

	createHands();
}


function createHands()
{

	//Creates a hand object
	for(var i = 0; i < 5; i++)
	{
		//This would draw from a deck, for now just create 5 images
		var tempImage = playerOneHand.create(X_OFFSET + (i * 125), 25, 'card_back');
		tempImage.inputEnabled = true;
   	 	tempImage.events.onInputOver.add(hoveringOverCard, this);
		tempImage.scale.setTo(0.75, 0.75);
		
		tempImage = playerTwoHand.create(X_OFFSET + (i * 125), game.height - 150, 'card_back');
		tempImage.inputEnabled = true;
		tempImage.events.onInputOver.add(hoveringOverCard, this);
		tempImage.scale.setTo(0.75, 0.75);
		
	}
	
	playerOneHand.enableBody = true;
	playerTwoHand.enableBody = true;
	
	//add player one and two to the allVisible group
	allVisible.add(playerOneHand);
	allVisible.add(playerTwoHand);
	
	allVisible.sort("z", Phaser.Group.SORT_ASCENDING);
}

//Silly redraw function for now, just moves stuff to the right and redraws it
function redraw()
{
	for(var i = 0; i < playerOneHand.children.length; i++)
	{
		playerOneHand.children[i].x += 5;
		if(playerOneHand.children[i].x >= game.width)
		{
			playerOneHand.children[i].x = -50;
		}
	}
	
	if(currentCard != null)
	{
		highlight.visible = true;
		//Move highlight to the appropriate position and draw
		highlight.x = currentCard.x - HIGHLIGHT_OFFSET;
		highlight.y = currentCard.y - HIGHLIGHT_OFFSET;
		allVisible.sort("z", Phaser.Group.SORT_ASCENDING);
	}
	

	
}

function hoveringOverCard(card)
{
	currentCard = card;
}



