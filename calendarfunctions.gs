function getguestsemail(CalendarEvent) {
  var guests = CalendarEvent.getGuestList(true);
  //var result = [];
  for (j=0; j<guests.length; j++){
    if (guests[i] != undefined){
      Logger.log(guests[j].getEmail());
    }
  }
}
