//DIVS AND CLASSES _
$(document).ready(function() {

/*//// populate seats with classes and IDs ////*/
var seats = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4",
"B5","C1","C2","C3","C4","C5","C6","C7","D1","D2","D3","D4",
"D5","D6","D7","D8"];

for(var i =0; i< seats.length; i++){
  var element = seats[i];

  if (element.charAt(0)==="A"){
    $("#row1").append('<div class="row seat" id="'+element+'"">' + seats[i]+ '</div>');
  }
  else if (element.charAt(0)==="B"){
    $("#row2").append('<div class="row seat" id="'+element+'"">' + seats[i]+ '</div>');
  }
  else if (element.charAt(0)==="C"){
    $("#row3").append('<div class="row seat" id="'+element+'"">' + seats[i]+ '</div>');
  }
  else {
    $("#row4").append('<div class="row seat" id="'+element+'"">' + seats[i]+ '</div>');
  }
};
/*//// seat populate END ////*/


/*//// seat selection ////*/
$(".seat").mouseenter(function(){
  $(this).fadeTo("fast", 1);
});

$(".seat").mouseleave(function(){
  $(this).fadeTo("fast", 0.5);
});
/*//// seat selection END ////*/


/*//// form ////*/
$("#reservationForm").hide();

var seatsSelected = [];

//make form appear after clicking on seat
$(".seat").on("click", function(){

    var $highlightedSeats = $(this);
    var $selectedId = $(this).attr("id");

    if ($(this).attr("class")==="row seat taken"){
      alert("This seat is taken! Please choose an open seat.");
    }

    else {
      //add selected seats to seatsSelected array
      seatsSelected.push($selectedId);

      //change seat color
      $(this).removeClass("open").addClass("selected");
      $("#selectedSeat").text(seatsSelected);
      $("#reservationForm").slideDown();
    }

    //pull info form form into object in userInfo array
    var userInfo = [];


    //submit button event
    submitButton.onclick = getInfo;

    function getInfo() {
      var seatNumber = seatsSelected;
      var userName = $("#userName").val();
      var userEmail = $("#userEmail").val();

      if (userName===""||userEmail===""){
        alert("Please enter a valid name and email.");
      }
      else {
        userInfo.push(
          {seat: seatNumber,
           name: userName,
           email: userEmail});

         //changes class of selected seat to taken
         $(".selected").removeClass("selected").addClass("taken")

         //toggles form to hide
         $("#reservationForm").slideToggle();

         //reset form
         $("#reservationForm")[0].reset();

         //empties out array
         seatsSelected.splice(0, seatsSelected.length);

         //prints user name to seats (NOT WORKING!!!)
         // userInfo.forEach(function(person){
         //    $highlightedSeats.text(person.name);
         // });
        alert("Thanks for your reservation. See you soon!");
      }
    }


    //clear button event
    clearButton.onclick = clearSelection;

    function clearSelection(){
      //empties out array
      seatsSelected.splice(0, seatsSelected.length);


      $(".selected").removeClass("selected").addClass("open");

      //toggles form to hide
      $("#reservationForm").slideToggle();
    }
  });
/*//// FORM SCRIPT END ////*/


//splash page image
  $("#image").mouseenter(function () {
     this.src= "images/enterthevoid-top.svg";
  });

  $("#image").mouseleave(function () {
      this.src= "images/enterthevoid.svg";
  });

});
