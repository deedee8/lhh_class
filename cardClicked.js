function cardClicked(card, column, lastCard, lastColumn) {
if(lastCard == null){

card.selected = true;
this.remember (card,column);
}
else {
   alert (lastCard.name());
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