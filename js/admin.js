$(document).ready(function () {
  var today = new Date(Date.now());
  $("#fecha").val(
    `${today.getFullYear()}-${
      (today.getMonth()+1) < 10 ? "0" + (today.getMonth()+1) : (today.getMonth()+1)
    }-${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`
  );
  $.ajax({
    url: "https://jairoblog.github.io/json/posts.json",
    dataType: "json",
    type: "GET",
    error: function (xhr, statusText, err) {},
    success: function (data) {
      var lastId = parseInt(data[0].id);
      $("#id").val(lastId + 1);
    },
  });
});

$("form#form-publicacion").on("submit", function (e) {
  e.preventDefault();
  var id = $("#id").val();
  var titulo = $("#titulo").val();
  var contenido = editor.getData().replace(/"/gm,"'").replace(/<a href/gm,"<a target='_blank' href").replace(/(\r\n|\n|\r)/gm,"");
  var fecha = $("#fecha").val();
  var imagen = $("#imagen").val();
  var json = `{\n\t"id":"${id}",\n \t"titulo":"${titulo}",\n \t"contenido":"${contenido}",\n \t"fecha":"${fecha}",\n \t"imagen":"${imagen}"\n},`;
  $("#publicacion").val(json);
});

$("#copy").click(function () {
  var copyText = document.getElementById("publicacion");
  copyText.select();
  copyText.setSelectionRange(0, 999999);
  document.execCommand("copy");
  alert("Publicación copiada al portapapeles, pegala donde la necesites.");
});

ClassicEditor
		.create( document.querySelector( '#editor' ), {
			// toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
		} )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( err => {
			console.error( err.stack );
		} );