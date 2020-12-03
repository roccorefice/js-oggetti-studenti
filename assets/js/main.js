// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. 
var studenteUno = {
    nome: "Studente",
    cognome: "Virtuale",
    eta: 16
}
//console.log(studenteUno);
// Stampare a schermo attraverso il for-in tutte le proprietà.
for ( var key in studenteUno){
    var nomeStudente = studenteUno["nome"];
    var cognomeStudente = studenteUno["cognome"];
    var etaStudente = studenteUno["eta"];
    var markup = "💻 Ciao! Io sono uno " + nomeStudente + " " + cognomeStudente + " ed ho " + etaStudente + " anni 👦";
    document.getElementById('sezione_studenteUno').innerHTML = markup;
}


// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var bottoneUno = $('#bottoneUno');
var bottoneDue = $('#bottoneDue');
var sezione_studenti = $('#sezione_studenti')
var listaNuoviStudenti
var eta;
var studenti;
var nuovo_studente = $('#nuovo_studente');

bottoneUno.click(function(){
    studenti = [
        {
        nome: "Paolo",
        cognome: "Bonolis",
        },
        {
        nome: "Maria",
        cognome: "De Filippi",
        },
        {
        nome: "Pippo",
        cognome: "Baudo",
        }
    ]
    for (var key in studenti){
        var nomi = studenti[key].nome;
        var cognomi = studenti[key].cognome;
        var markup = " " + nomi + " " + cognomi;
        document.getElementById('sezione_studenti').innerHTML += markup;
    }
});


////Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
bottoneDue = $('#bottoneDue');
bottoneDue.click(function(){
    
    var nomeNuovoStudente = prompt("Inserisci il nome");
    var cognomeNuovoStudente = prompt("Inserisci il cognome");
    var etaNuovoStudente = prompt("Inserisci l'età");

    studenti.push({
        nome : nomeNuovoStudente,
        cognome: cognomeNuovoStudente,
        eta : etaNuovoStudente
    });

   for (var key in studenti) {
    document.getElementById("nuovo_studente").innerHTML += studenti[key].nome +" "+ studenti[key].cognome + " "  ;
 }
});

