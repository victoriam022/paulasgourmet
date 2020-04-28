function sendContact() {
  var valid;
  valid = validateContact();
  if(!valid){
    $("#mail-status").html("<p class='alert alert-warning'><i class='fas fa-exclamation-triangle fa-fw'></i><strong>&nbsp;Atención</strong>&nbsp;Por favor, revisa que la información sea correcta</p>");

  }else{
    jQuery.ajax({
        url: "assets/includes/phplog.php",
        data:'userName='+$("#nombre").val()+'&userEmail='+
        $("#correo").val()+'&userPhone='+
        $("#telefono").val()+'&eventType='+
        $("#tipo_evento").val()+'&eventDate='+
        $("#fecha").val()+'&eventTime='+
        $("#hora").val()+'&serviceType='+
        $("#tipo_servicio").val()+'&buffetType='+
        $("#tipo_buffet").val()+'&courses='+
        $("#tiempos_buffet").val()+'&otherDescription='+
        $("#otro_evento").val()+'&adults='+
        $("#adultos").val()+'&children='+
        $("#niños").val()+'&comments='+
        $("#comentarios").val(),
        type: "POST",
        success:function(data){
            $("#mail-status").html(data);
            $("#form_button").prop("disabled", true);
            $("#form_button").addClass("disabled");
        },
        error:function (){
          $("#mail-status").html("<small class='form-text alert alert-danger'><i class='fas fa-times'>&nbsp;Se ha presentado un problema, por favor intenta más tarde.</small>");
        }
    });
  }
}
function validateContact() {
	var valid = true;
	$(".has-warning").addClass("d-none");
	if (!$("#nombre").val()) {
		$("#alert_name").removeClass("d-none");
		valid = false;
	}
	if (!$("#correo").val()) {
		$("#alert_email").removeClass("d-none");
		valid = false;
	}
	if (!$("#correo").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		$("#alert_email").removeClass("d-none");
		$("#alert_email").html("<small class='form-text alert alert-danger'>Correo invalido</small>");
		valid = false;
	}
	if (!$("#telefono").val()) {
		$("#alert_phone").removeClass("d-none");
		valid = false;
	}
	if (!$("#fecha").val()) {
		$("#alert_datetime").removeClass("d-none");
		valid = false;
	}
	if (!$("#adultos").val()) {
		$("#alert_guests").removeClass("d-none");
		valid = false;
	}
	return valid;
}
