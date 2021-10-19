    //fonte dati
    class contenuti_id {
        //in tag si trovano i termini che devono essere contenuti nell'input per dare risultati
        tag =[];
        //in id viene salvata la posizione dell'elemento, sui vettori titolo e foglio, viene preso l'id tramite la posizione
        //di tag
        id = [];
        //all'interno di titolo sono presenti i titoli che vengono mostrati
        titolo = [""] //le posizioni del vettore sono collegate agli ID
        //su foglio sono presenti i link delle varie pagine che devono essere raggiunte dopo la ricerca
        foglio = [""] //le posizioni del vettore sono collegate agli ID
    }

    class risulta {
        resulta = document.getElementById("Risulta");
    }

    class principale {
        testo = document.getElementById("contento");
    }

    class output {
        outp = document.getElementById("result");
    }
    class zona_output {
        zona = document.getElementById("mega_container");
    }
    class gestione_error {
        errore = document.getElementById("errori");
        msg_err = document.getElementById("ouerr");
    }
    function ricerca(){
        var errori = new gestione_error;
        //raccolta input
        var input = document.getElementById("input").value;
        //verifica che sia presente testo prima di inviare alla ricerca
        input.trim()
        switch (input) {
            case "":
            errori.errore.innerHTML='<b>Impossibile rilevare input, scrivi prima quello che vuoi cercare!</b>';
                break;
            case " ":
            errori.errore.innerHTML='<b>Impossibile cercare, scrivi prima quello che vuoi cercare!</b>'
                break;
            default:
            cerca(input);
                break;
        }
        
    }
    function cerca(input){
        //controllo parametri
        if(input != " " || input != undefined || input != null){
        //riduco a minuscolo per evitare errori nel confronto
            input = input.toLowerCase();
        //divido ogni elemento
        const inp_diviso = input.split(' ');
       
        //inizializzazione oggetto da class
        let oggetto_meta = new contenuti_id;
            vettore_pos = new Array;
        //ricerca
            var pos = new Number;
        inp_diviso.forEach(e => {
            pos = oggetto_meta.tag.indexOf(e);
            if(pos >= 0){
                if(vettore_pos.indexOf(oggetto_meta.id[pos])<0){
                vettore_pos.push(oggetto_meta.id[pos]);
                }
            }
            //chiama la funzione per mostrare il risultato
           
        });
        scrivi();
        //terminato questo blocco tutti gli elementi presenti hanno il loro id salvato nel vettore vettore_pos
    }
        }

    function scrivi() {
        //lettura classi
        var class_data = new contenuti_id;
        var class_text = new principale;
        var scrittura = new output;
        var output1 = new zona_output;
        var inputscorso = new risulta;

        var testi = new String
        save = class_text.testo.innerHTML;
        var error = new gestione_error;
        var i = new Number;
        i = 0;
        var altezza = new Number;
        altezza = 200;
        //individua testo da scrivere
        vettore_pos.forEach(element => {
            i++;
            //output
            testi += '<a href="'+ class_data.foglio[element] +'" style=" top:'+ altezza +'px; width: fit-content; height: fit-content;"><button class="bottone">' + class_data.titolo[element]+ "</button></a>";
            altezza += 70;
        });
            //mostrato output
        if(testi == ""){
            let scritta = error.msg_err;
        scritta.classList.add("visibile");  
            scrittura.outp.innerHTML = testi;
        error.msg_err.innerHTML='<h2>Nessun risultato <h2><button onClick="tutto()" class="tutto">Visualizza tutti gli argomenti</button>';
        }else{
            let scritta = error.msg_err;
        scritta.classList.remove("visibile"); 
            scrittura.outp.innerHTML = testi;
        }
        //eliminazione conenuto
        class_text.testo.innerHTML = "";
        //sistema presenza scritta risultati
        var scritta = output1.zona;
        scritta.classList.add("cliccato");       
    }
    function tutto() {
        //prendo informazioni e dati da classi
        var errori = new gestione_error;
        var out = new output;
        var dati= new contenuti_id;

        let scritta = errori.msg_err;
        scritta.classList.remove("visibile"); 

        //inizializzo contenitore risultati
        var risultati = new String;
        var altezza = new Number;
        altezza = 210;
        errori.msg_err.innerHTML=" ";
        dati.titolo.forEach(i => {
            risultati += '<a href="'+ dati.foglio[dati.titolo.indexOf(i)]+'" style=" top:'+ altezza +'px"><button class="bottone">'+i+"</button></a>";
            altezza += 70;
        });
        out.outp.innerHTML=risultati;
    }
    function riavvia(){
        //creazione oggetti
        var errori = new gestione_error;
        var class_text = new principale;
        var output1 = new zona_output;
        var scrittura = new output;

        //nascondi finestra output
        var scritta = output1.zona;
        scritta.classList.remove("cliccato");
        let errore1 = errori.msg_err;
        errore1.classList.remove("visibile"); 

        //recupera vecchio contenuto
        class_text.testo.innerHTML = save;
        //elimuna eventuale messaggio errore
        errori.msg_err.innerHTML="";
    }