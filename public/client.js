
window.onload = function() {

  //since always testing different post addresses, parameterize the host fields for the forms here
//production
  //var POSTHOST = "https://free.waxmenow.com"
  //var POSTHOST = "http://waxmenow.us-east-1.elasticbeanstalk.com"

//gitch.com testing
 var POSTHOST = "https://imminent-walker.glitch.me";
//var POSTHOST = "";
      document.getElementById('contact-form').action = POSTHOST + "/registeruser";
      console.log("STREET NUMER: "+ document.getElementById('street_number').value);
      console.log(POSTHOST + "/registeruser");

      document.getElementById('schedule-form').action = POSTHOST + "/createScheduleRecord";
      document.getElementById('location-form').action = POSTHOST + "/setLocation";
      document.getElementById('accept-form').action = POSTHOST + "/takeAppointment";
    }


$(document).ready( function () {





  $.validate({

  form: '#contact-form',
  modules: 'html5',
  errorElementClass: 'uk-form-danger',
  errorMessageClass: 'uk-text-danger'
  // 複数クラス指定できない！
  });

  $.validate({
  form: '#schedule-form',
  modules: 'html5',
  errorElementClass: 'uk-form-danger',
  errorMessageClass: 'uk-text-danger'
  // 複数クラス指定できない！
  });

  $.validate({
  form: '#address-form',
  modules: 'html5',
  errorElementClass: 'uk-form-danger',
  errorMessageClass: 'uk-text-danger'
  // 複数クラス指定できない！
  });
  $("form").bind("keypress", function(e) {
             if (e.keyCode == 13) {
                 return false;
             }
         });

  


/*document.getElementById('serviceGrid').style.display="none";*/
document.getElementById('sales').style.display="none";
document.getElementById('whoareyou').style.display="none";
document.getElementById('whenwax').style.display="none";
document.getElementById('wherewax').style.display="none";
document.getElementById('confirmwax').style.display="none";
document.getElementById('johnny').style.display="none";
document.getElementById('transact').style.display="none";
/*document.getElementByClassName("round-corners").onclick = function(){gotoSection('serviceGrid');}*/

})


function validateSection(){
  $("#contact-form").validate({
    modules: 'html5',
    errorElementClass: 'uk-form-danger',
    errorMessageClass: 'uk-text-danger',

    invalidHandler: function(event, validator) {
   // 'this' refers to the form
   var errors = validator.numberOfInvalids();
   if (errors) {
     var message = errors == 1
       ? 'You missed 1 field. It has been highlighted'
       : 'You missed ' + errors + ' fields. They have been highlighted';
     $("div.error span").html(message);
     $("div.error").show();
   } else {
     $("div.error").hide();
   }
 }

});

}
//function to reveal sections on click of continue button
function revealSection(a){
  var e=document.getElementById(a);
  if(!e)return true;
  if(e.style.display=="none") {
    e.style.display="block"
  }
  else{
    //e.style.display="none"
  }
  return true;
}






var i = 2;
var html = '';
var total = 0;


var waxes = [
  ["Chin", 10,0],
  ["Nose", 10,0],
  ["Eyebrow", 10,0],
  ["Lips", 10,0],
  ["Sideburns", 10,0],
  ["Full Face", 50,0],
  ["Full Arm", 40,0],
  ["Half Arm", 30,0],
  ["Underarm", 15,0],
  ["Back", 55,0],
  ["Torso", 30,0],
  ["Legs-Full", 65,0],
  ["Legs-Half", 65,0],
  ["Bikini", 65,0],
  ["Stomach Strip", 30,0],
  ["Brazilian", 40,0],
  ["Buttocks", 20,0],
  ["Buttocks Strip", 10,0]
];


// function to determine what grid element was clicked and set the array flag to 1 when on and 0 when off
function reply_click(clicked_id)
{

  var area = "col" + clicked_id;

  if (!waxes[clicked_id][2]) {
    document.getElementById(area).style.backgroundColor="#b3b5b7";
    total += waxes[clicked_id][1];
    waxes[clicked_id][2]=1;
    document.getElementById("tot").innerHTML = "TOTAL= $" + total;
  }

  else
  {	document.getElementById(area).style.backgroundColor="#000000";
  total -= waxes[clicked_id][1];
  waxes[clicked_id][2]=0;
  document.getElementById("tot").innerHTML = "TOTAL= $" + total;}

}

/* function goGo(e) {
  revealSection(e);
  gotoSection(e);
}*/



