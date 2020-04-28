function seleccion_servicio(that) {
  if (that.value == "banquete") {
    document.getElementById("tiempos_div").style.display = "block";
    document.getElementById("otro_evento_div").style.display = "none";
    document.getElementById("tipo_buffet_div").style.display = "none";

  } else if (that.value == "otro"){
    document.getElementById("tiempos_div").style.display = "none";
    document.getElementById("otro_evento_div").style.display = "block";
    document.getElementById("tipo_buffet_div").style.display = "none";

  } else if (that.value == "buffet"){
    document.getElementById("tiempos_div").style.display = "none";
    document.getElementById("otro_evento_div").style.display = "none";
    document.getElementById("tipo_buffet_div").style.display = "block";
  }
  else {
    document.getElementById("tiempos_div").style.display = "none";
    document.getElementById("otro_evento_div").style.display = "none";
    document.getElementById("tipo_buffet_div").style.display = "none";
  }
}
