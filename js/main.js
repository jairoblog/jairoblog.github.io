function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function dateToString(fecha){
    var dt = new Date(fecha);
    var mes;
    switch (dt.getMonth()) {
        case 0:
            mes ="enero";
            break;
        case 1:
            mes ="febrero";
            break;
        case 2:
            mes ="marzo";
            break;
        case 3:
            mes ="abril";
            break;
        case 4:
            mes ="mayo";
            break;
        case 5:
            mes ="junio";
            break;
        case 6:
            mes ="julio";
            break;
        case 7:
            mes ="agosto";
            break;
        case 8:
            mes ="septiembre";
            break;
        case 9:
            mes ="octubre";
            break;
        case 10:
            mes ="noviembre";
            break;
        case 11:
            mes ="diciembre";
            break;
    }
    return `${dt.getDate()+1} de ${mes} del ${dt.getFullYear()}`;
}

function stripHtml(html){
    var text = html.replace(/<[^>]*>?/gm, '');
    return text;
}

function getPostHtml(post, postType) {
    var contenidoTxt = stripHtml(post.contenido);
    var space = getSpaceAheadOf(contenidoTxt,250);
    return `
      <div class="row project">
          <div class="col-lg-3 col-md-4 offset-lg-1">
              <img class="img-fluid" src="img/${postType}/${post.imagen}" alt="">
          </div>
          <div class="col-lg-7 col-md-8">
              <h2 class="section-heading title">${post.titulo}</h2>
              <p>${dateToString(post.fecha)}</p>
              <p>${contenidoTxt.substring(0,space)}...</p>
              <p><a href="${postType}-post?id=${post.id}">Leer más...</a></p>
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