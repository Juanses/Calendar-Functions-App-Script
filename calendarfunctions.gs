var CalendarClass = function(){
  
  this.getDefault = function () {
    this.calendar = CalendarApp.getDefaultCalendar();
  }
  
  this.getCalendarsByName = function (name) {
    this.calendar = CalendarApp.getCalendarsByName(name)[0];
  }
  
  this.getEvents = function (start,end,status) {
    //CalendarApp.GuestStatus.INVITED / MAYBE / NO / OWNER	/ YES
    if (status == undefined){return this.calendar.getEvents(start,end);}
    else{
      var result = [];
      var events = this.calendar.getEvents(start,end)
      for (var i = 0; i < events.length; i++) {
        if (status.indexOf(events[i].getMyStatus()) != -1){
          result.push(events[i]);
        }
      }
      return result;
    }
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