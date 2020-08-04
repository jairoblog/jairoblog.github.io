$(document).ready(function () {
  var id = getUrlParameter("id");
  $.ajax({
    url: "https://jairoblog.github.io/json/posts.json",
    dataType: "json",
    type: "GET",
    error: function (xhr, statusText, err) {
      $("#post-titulo").html("Error");
      $("#post-contenido").html("No se ha podido cargar la publicación");
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
        $("#post-titulo").html("Error");
        $("#post-contenido").html("Publicación no encontrada");
      } else {
        $("title").html(publicacion.titulo + " | Jairo Blog")
        $("#post-img").css("background-image",`url(img/posts/${publicacion.imagen})`);
        $("#post-titulo").html(publicacion.titulo);
        $("#post-fecha").html(dateToString(publicacion.fecha));
        $("#post-contenido").html(publicacion.contenido);
      }
    },
  });
});

