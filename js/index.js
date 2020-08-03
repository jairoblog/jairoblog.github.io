$( document ).ready(function() {
    var postsPerPage = 10;
    $("#posts-per-page").html(postsPerPage);
    var page = getUrlParameter('page');
    if (page == null){
        page = 1;
    }
    $.ajax({
        url: 'https://jairoblog.github.io/json/posts.json',
        dataType:'json',
        type: 'GET',  
        error: function(xhr, statusText, err) {
            $("#posts").html("No se ha podido cargar las publicaciones");
        },
        success: function(data) {
            var postsHtml = "";
            //Inicio paginacion
            var postsLength = data.length;
            var pages = Math.ceil(postsLength/postsPerPage);
            var pagesHtml = "";
            for(i=0; i<pages; i++){
                pagesHtml += getPageHtml(i,page);
            }
            $("#pages").html(pagesHtml);
            //Fin paginacion
            //Inicio posts
            var last = postsPerPage*page;
            var first = last-postsPerPage;
            if (last > data.length){
                last = data.length;
            }
            for(i=first; i<last; i++){
                postsHtml += getPostHtml(data[i]);
            }
            $("#posts").html(postsHtml);
            //FIn posts
        }
     });
});

function getPostHtml(post) {
    var contenidoTxt = stripHtml(post.contenido);
    var space = getSpaceAheadOf(contenidoTxt,250);
    return `
      <div class="row project">
          <div class="col-lg-3 col-md-4 offset-lg-1">
              <img class="img-fluid" src="img/posts/${post.imagen}" alt="">
          </div>
          <div class="col-lg-7 col-md-8">
              <h2 class="section-heading title">${post.titulo}</h2>
              <p>${dateToString(post.fecha)}</p>
              <p>${contenidoTxt.substring(0,space)}...</p>
              <p><a href="post.html?id=${post.id}">Leer más...</a></p>
          </div>
      </div>`;
}

function getPageHtml(n,page){
    if (n+1 == page){
        return `<li class="page-item active"><a class="page-link" href="?page=${n+1}">${n+1}</a></li>`;
    }else{
        return `<li class="page-item"><a class="page-link" href="?page=${n+1}">${n+1}</a></li>`;
    }
    
}

function getSpaceAheadOf(str, n){
    while(str[n] != " " || n == str.length){
        n++;
    }
    return n;
}