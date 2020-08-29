$(document).ready(function () {
  var id = getUrlParameter("id");
  if (id == null){
    window.location.replace("https://jairoblog.github.io");
  }
  $.ajax({
    url: "https://jairoblog.github.io/json/devo.json",
    dataType: "json",
    type: "GET",
    error: function (xhr, statusText, err) {
      errorCase(0);
    },
    success: function (data) {
      var publicacion;
      for (i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          publicacion = data[i];
          break;
        }
      }
      if (publicacion == null) {
        errorCase(1);
      } else {
        $("title").html(publicacion.titulo + " | Jairo Blog")
        $("#post-img").css("background-image",`url(img/devo/${publicacion.imagen})`);
        $("#post-titulo").html(publicacion.titulo);
        $("#post-fecha").html(dateToString(publicacion.fecha));
        $("#post-contenido").html(publicacion.contenido);
      }
    },
  });
});

function errorCase(code){
  $("title").html("Jairo Blog")
  $("#post-img").css("background-image",'url(img/error-bg.jpg)');
  switch (code) {
    case 0:
      $("#post-contenido").html("<p><strong>Error</strong></p><p>La publicación no se logro cargar, <a href='https://jairoblog.github.io'>ver todas las publicaciones</a> o <a href=''>refrescar la página</a>.</p>");
      break;
    case 1:
      $("#post-contenido").html("<p><strong>Error</strong></p><p>La publicación no se ha encontrado, <a href='https://jairoblog.github.io'>ver todas las publicaciones.</a>.</p>");
      break;
    default:
      $("#post-contenido").html("<p><strong>Error</strong></p><p>La publicacion no se ha encontrado o sucedio un error al cargar, <a href='https://jairoblog.github.io'>ver todas las publicaciones</a>.</p>");
      break;
  }
}

