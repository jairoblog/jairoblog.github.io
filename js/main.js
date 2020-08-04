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