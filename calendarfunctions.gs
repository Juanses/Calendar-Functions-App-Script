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
  
  this.createICSfile = function (arrayofdates){
    //arrayofdates = [start,end,title,description]
    var text = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Flexibits Inc./Fantastical for Mac 2.5.5//EN\nCALSCALE:GREGORIAN\nX-WR-TIMEZONE:Europe/Paris\nBEGIN:VTIMEZONE\nTZID:Europe/Paris\nBEGIN:DAYLIGHT\nTZNAME:GMT+2\nRRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=3\nDTSTART:20000326T020000\nTZOFFSETFROM:+0100\nTZOFFSETTO:+0200\nEND:DAYLIGHT\nBEGIN:STANDARD\nTZNAME:GMT+1\nRRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=10\nDTSTART:20001029T030000\nTZOFFSETFROM:+0200\nTZOFFSETTO:+0100\nEND:STANDARD\nEND:VTIMEZONE\n";
    for (var i = 0; i < 2; i++) {
      text += "BEGIN:VEVENT\nDTSTAMP:"+calendar.DTcreate(new Date())+"\n"+"UID:"+uuidv4().toUpperCase()+"\nCREATED:"+calendar.DTcreate(new Date())+"\n";
      text += "DTSTART;TZID=Europe/Paris:"+calendar.DTcreate(finaldates[i][0])+"\n";
      text += "DTEND;TZID=Europe/Paris:"+calendar.DTcreate(finaldates[i][1])+"\n";
      text += "DESCRIPTION:"+finaldates[i][2]+"\n";
      text += "SUMMARY:"+finaldates[i][3]+"\n";
      text += "SEQUENCE:0\nSTATUS:CONFIRMED\nX-APPLE-TRAVEL-ADVISORY-BEHAVIOR:AUTOMATIC\nEND:VEVENT\n";
    }
    text += "END:VCALENDAR";
    return text;
  }
  
  this.DTcreate = function(aDate){
    var pre = aDate.getFullYear().toString() + ((aDate.getMonth() + 1)<10? "0" + (aDate.getMonth() + 1).toString():(aDate.getMonth() + 1).toString()) + ((aDate.getDate() + 1)<10? "0" + aDate.getDate().toString():aDate.getDate().toString());
    var post = ((aDate.getHours())<10? "0" + (aDate.getHours()).toString():(aDate.getHours()).toString()) + ((aDate.getMinutes())<10? "0" + (aDate.getMinutes()).toString():(aDate.getMinutes()).toString()) + "00";
    return pre + "T" + post;
  }  
  
  //Return UID
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    
  }
}