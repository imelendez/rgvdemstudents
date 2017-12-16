var theButton = document.getElementById("actionbttn");
   theButton.onclick = function() {
       document.getElementById("ActionForm").style.visibility='hidden';
       document.querySelector("actionbttn").addEventListener('onclick', exit_alert);

       $( "actionbttn" ).click(function() {
  alert( "Handler for .click() called." );
});
