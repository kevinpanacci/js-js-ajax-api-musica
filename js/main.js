// Ricreare pagina 'spotify' come nell'esercizio visto in classe. Per motivi di tempo non ricreo html e css, ma solo JS.
// chiamata API: https://flynn.boolean.careers/exercises/api/array/music

// Compilare il template utilizzando i dati forniti dall'API di Boolean.
var source = $('#card-template').html();
var cardTemplate = Handlebars.compile(source)
// Chiamata all'API:
$.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(valori) {
        var valoriOggetto = valori.response;
        console.log(valoriOggetto);
        for (var i = 0; i < valoriOggetto.length; i++) {
            // console.log(valoriOggetto[i]);
            var valoriTemplate = {
                autore: valoriOggetto[i].author,
                genere: valoriOggetto[i].genre,
                immagineAlbum: valoriOggetto[i].poster,
                nomeAlbum: valoriOggetto[i].title,
                anno: valoriOggetto[i].year
            }
            var template = cardTemplate(valoriTemplate);
            $('.container-card').append(template);
        }
    },



    error: function() {
        alert('C\'è un errore!');
    }

})
