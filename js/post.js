$( document ).ready(function() {
    var id = getUrlParameter('id');
    $.ajax({
        url: 'https://jairoblog.github.io/json/posts.json',
        dataType:'text',
        type: 'GET',  
        error: function(xhr, statusText, err) {
            alert("Sucedio un error al cargar la publicación.");
        },
        success: function(data) {
            console.log(data);
        }
     });
});

var getUrlParameter = function getUrlParameter(sParam) {
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