<script>
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scrollicon-div").style.bottom = "0";
  } else {
    document.getElementById("scrollicon-div").style.bottom = "10px";
  }
  prevScrollpos = currentScrollPos;
}
alert('test');
</script>
