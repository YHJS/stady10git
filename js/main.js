 var getHost = document.getElementById("getHostButton"),
     getScreen = document.getElementById("getScreenButton"),
     textOutput = document.getElementById("textOutput");
     getHost.addEventListener("click", getHostFunction, false);
     getScreen.addEventListener("click", getScreenFunction, false);

 function getHostFunction() {
     textOutput.innerHTML = " Host = " + location.host + "\n"+ " Protocol = " +location.protocol;
 }

 function getScreenFunction() {
     textOutput.innerHTML = "Height screen =" + screen.height + "\n" + "Width screen =" + screen.width;
 }
// -------------------------- jQuery UI
 $( function() {
     $( ".widget input[type=submit], .widget a, .widget button" ).button();
     $( "button, input, a" ).click( function( event ) {
         event.preventDefault();
     } );
 } );

 $( function() {
     $( "#datepicker" ).datepicker();
 } );
 $( function() {
     $( "#tabs" ).tabs();
 } );
// --------------------------- underscore begin
 document.getElementById("Button").addEventListener('click',test_filter,false );

 function test_filter () {
     debugger;
      var testArr = document.getElementById("input-area").value.split(","),
          result0 = _.isArray(testArr),
          result1 = _.filter(testArr, function(num){ return num % 2 == 0; }),
          result2 = _.shuffle(testArr),
          result3 = _.size(testArr),
          result4 = _.random(1, 10);
          document.getElementById('textOutput2').innerHTML = "_isArray :" + result0 + "\n" + "_.filter :"+ result1 + "\n"
              + "_.shuffle :" + result2 +"\n"+ "_.size :" + result3 +"\n"+ "_.random :" + result4;
 }
 // --------------------------- underscore end
