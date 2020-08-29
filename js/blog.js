$( document ).ready(function() {
    var postsPerPage = 10;
    $("#posts-per-page").html(postsPerPage);
    var page = getUrlParameter('page');
    if (page == null){
        page = 1;
    }
    $.ajax({
        url: 'https://jairoblog.github.io/json/blog.json',
        dataType:'json',
        type: 'GET',  
        error: function(xhr, statusText, err) {
            console.log(err);
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
                postsHtml += getPostHtml(data[i],'blog');
            }
            $("#posts").html(postsHtml);
            //FIn posts
        }
    });
});