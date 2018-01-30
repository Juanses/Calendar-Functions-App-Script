var CalendarClass = function(){
  
  this.getdefault = function () {
    this.calendar = CalendarApp.getDefaultCalendar();
  }
  
  this.getevents = function (start,end) {
    return this.calendar.getEvents(start,end);
  }
  
  this.getpeoplefromevent = function(CalendarEvent){
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
    //this needs Tools-App-Script.gs
    return result.filter(onlyUnique);
  }
  
}