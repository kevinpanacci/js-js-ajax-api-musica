// Ricreare pagina 'spotify' come nell'esercizio visto in classe. Per motivi di tempo non ricreo html e css, ma solo JS.
// chiamata API: https://flynn.boolean.careers/exercises/api/array/music

// Compilare il template utilizzando i dati forniti dall'API di Boolean.

// Chiamata all'API:
$.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(response) {
        
    }



    error: function() {
        alert('C\'è un errore!');
    }

})



var source = $('#card-template').html();
var cardTemplate = Handlebars.compile(source)
