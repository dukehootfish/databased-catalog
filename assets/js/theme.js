$('.datepicker').each(function(){
	var picker = new Pikaday({
		field: this
	});
});
<script>
$(window).scroll(function() {
    if ($(this).scrollTop()>250)
     {
        $('.scrollicon-div').hide(1000);
     }
    else
     {
      $('.scrollicon-div').show(1000);
     }
 });
</script>

