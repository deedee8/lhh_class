function cardClicked(card, column, lastCard, lastColumn) {
  if (card.reversed == true) {
  }

  if (lastCard == null) {

    card.selected = true;
    this.remember(card, column);
  }
  else {

    if(lastCard == card) {
      this.forget();
      card.selected = false;
      return;
    }

    if (lastCard.color == card.color) {
      return;
    }
  
    if (lastCard.value != card.value - 1) {
      return;
    }

    let cardsToMove = lastColumn.popFrom(lastCard);

    column.append(cardsToMove)

    lastCard.selected = false;
    this.forget();
  }
}
/*
  //card.reversed = ! card.reversed;
  alert(lastCard);

  card.selected = !card.selected;

this.remember (card,column);
//this.forget();
alert(lastCard.name() + 'moving');
//check lastCard == null
}*/