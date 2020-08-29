(function () {
    if (!window.BG || typeof window.BG !== 'object') {
        window.BG = {};
    }
    var BG = window.BG;

    BG.votdWriteCallback = function (json) {
        var votd = json.votd;
        var votd_html = '';
        votd_html += '<p>' + votd.text;
        votd_html += ' <a href="' + votd.permalink + '" target="_blank">' + votd.display_ref + ' ' + votd.version_id + '</a>';
        votd_html += '</p>';
        votd_html += '<p>Versículo del día por <a target="_blank" href="https://www.biblegateway.com/">BibleGateway.com</a></p>';
        document.write(votd_html);
    };

    window.BG = BG;

})();