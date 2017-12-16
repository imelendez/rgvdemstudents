window.onload = function() {
  document.getElementById("ActionForm").style.display = 'none';
};

var theButton = document.getElementById('actionbttn');
theButton.onclick = function() {
document.getElementById("ActionForm").style.display='inline';
document.getElementById("ActionForm").style.text-center;
}
