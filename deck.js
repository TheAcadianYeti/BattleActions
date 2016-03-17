//global variables for the size of the deck and hands respectively.
var deckSize = 50;
var handSize = 5;
//new array for the deck. Each player has their own deck.
var deck = [];
//new array for the hand. Each player has their own hand.
var hand = [handSize];
//the default card id within the deck
var card = {id:"0"}
//push as many cards as equal to the decksize variable, this builds the deck
for(var i = 0; i < deckSize; i++)
	{
		deck.push({id: i});
	}
   
//shuffle that deck up good
function shuffleDeck()
{
	//value 1000 is an arbitrary amount of times to swap cards, to make sure the deck is shuffled well
	//we could consider any value really, but I stuck with 1000 just because it seems like it's enough
	//for a decksize of 50
	for(x = 0; x < 1000; x++)
	{
		//pick two random cards from the deck and swap them
		card1 = Math.floor((Math.random() * deckSize) + 1);
		card2 = Math.floor((Math.random() * deckSize) + 1);
		//if the same card is picked, and 
		if(card1 == card2 && (card1 + 1) <= deckSize)
		{   //swap those cards!
			temp = deck[card1];
			deck[card1] = deck[card2];
  			deck[card2] = temp;
		}
	}
}

//pop a number of cards = to the hand size variable
function dealHand()
{
	for(j = 0; j < handSize; j++)
	{
		//hand array gets the return from the deck pop
		drawCard();	
	}
}

	//draw a single card
function drawCard()
{	
	//hand gets the last card from the deck
	hand.push(deck.pop());
}

	//mill a number of cards off of the deck
function burnCards(x)
{
	for(l = 0; l < x; l++)
	{
		deck.pop();
	}
}