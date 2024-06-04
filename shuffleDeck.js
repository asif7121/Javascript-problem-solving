function shuffleDeck () {
    const deck = [];
    const suits = [ 'Hearts', 'Diamonds', 'Clubs', 'Spades' ];
    const ranks = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];
    for ( let suit of suits ) { 
        for ( let rank of ranks ) {
          deck.push(`${rank} of ${suit}`)
        }
    }
    console.log(`deck:-\n ${deck}`)
    //Shuffle the deck
     const newDeck = deck.sort( () => Math.random()-0.5)
    console.log(`shuffled deck:-\n ${newDeck}`)
    return newDeck;
    
}

shuffleDeck()