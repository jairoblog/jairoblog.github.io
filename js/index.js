$(document).ready(function () {
  loadLastBlog();
  loadLastDevo();
});

function loadLastDevo(){
  $.ajax({
    url: "https://jairoblog.github.io/json/devo.json",
    dataType: "json",
    type: "GET",
    error: function (xhr, statusText, err) {
      $("#devo").html('Sucedio un error al cargar el devocional más reciente');
    },
    success: function (data) {
      var post = data[0];
      var postHtml = getPostHtml(post,'devo');
      $("#devo").html(postHtml);
    },
  });
}

function loadLastBlog(){
  $.ajax({
    url: "https://jairoblog.github.io/json/blog.json",
    dataType: "json",
    type: "GET",
    error: function (xhr, statusText, err) {
      $("#blog").html('Sucedio un error al cargar el blog más reciente');
    },
    success: function (data) {
      var post = data[0];
      var postHtml = getPostHtml(post,'blog');
      $("#blog").html(postHtml);
    },
  });
}



