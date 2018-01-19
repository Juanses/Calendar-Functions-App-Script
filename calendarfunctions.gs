function getpeople(CalendarEvent) {
  var guests = CalendarEvent.getGuestList(true);
  var creators = CalendarEvent.getCreators();
  var result = [];
  for (j=0; j<creators.length; j++){
    if (creators[j] != undefined){
      result.push(creators[j]);
    }
  }
  for (j=0; j<guests.length; j++){
    if (guests[i] != undefined){
      result.push(guests[j].getEmail());
    }
  }
  return result.filter( onlyUnique );
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}