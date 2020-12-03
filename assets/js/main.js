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
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var bottone = $('#bottone');
var nomeUser;
var cognomeUser;
var eta;
// bottone.click(function(){
    var studenteDue = {
        nomeUser : prompt("Come ti chiami? Inserisci il nome"),
        cognomeUser : prompt("Qual è il tuo cognome?"),
        eta : Number(prompt("Quanti anni hai?"))
    }
    //console.log(studenteDue);
    // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
    var studenti = [
        studenteUno,
        studenteDue
        // {
        // nome: "Studente",
        // cognome: "Virtuale",
        // },
        // {
        // nome: nomeUser,
        // cognome: cognomeUser,
        // }
    ]
    for (var key in studenti){
        var nomeStudenteUno = studenti["nome"];
        var nomeStudenteDue = studenti["nomeUser"]
        var cognomeStudenteUno = studenti["cognome"];
        var cognomeStudenteDue = studenti["cognomeUser"];


        var markup = "Benvenuto" + nomeStudenteUno +" "+ cognomeStudenteUno + " e " + nomeStudenteDue +" "+ cognomeStudenteDue;
        
        document.getElementById('sezione_studenti').innerHTML = markup;
        
    }
    console.log(studenti);

// });




