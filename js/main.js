// Ricreare pagina 'spotify' come nell'esercizio visto in classe. Per motivi di tempo non ricreo html e css, ma solo JS.
// chiamata API: https://flynn.boolean.careers/exercises/api/array/music
// BONUS: creare un menu per scegliere il genere
// Compilare il template utilizzando i dati forniti dall'API di Boolean.
// Chiamata all'API:

// Tentativo utilizzando funzione Object:

$.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(valori) {
        var valoriOggetto = valori.response;
        var source = $('#card-template').html();
        var cardTemplate = Handlebars.compile(source)
        Object.keys(valoriOggetto).forEach(function(k){
            var valoriTemplate = {
                autore: valoriOggetto[k].author,
                genere: valoriOggetto[k].genre,
                immagineAlbum: valoriOggetto[k].poster,
                nomeAlbum: valoriOggetto[k].title,
                anno: valoriOggetto[k].year
            }
            var template = cardTemplate(valoriTemplate);
            $('.container-card').append(template);
        });
    },
    error: function() {
        alert('C\'è un errore!');
    }
});
// PUNTO BONUS: MENU GENERE --->
$('.selettore-genere').change(function(){
    var genere = $(this).val();
    if (genere == "") {
        $('.card').show();
    } else {
        $('.card').each(function(){
            if (genere.toLowerCase() == $(this).data('genere').toLowerCase()) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
});
