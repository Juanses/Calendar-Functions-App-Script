function getguestsemail(CalendarEvent) {
  var guests = CalendarEvent.getGuestList(true);
  var result = [];
  for (i=0; i<guests.length; i++){
    result.push(guests[i].getEmail());
  }
  return result
}
