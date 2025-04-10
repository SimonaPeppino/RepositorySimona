function getPastEvent(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const events = [
                { year: 1990, name: "WWB inveted"},
                { year: 2001, name: "Wikipedia Launched"},
                { year: 1969, name: " Moon Landing"},
                { year: 2020, name: "Global pandemic"},
                { year: 1989, name: "Fall of Berlin Wall"}
            ];
            const randomIndex = Math.floor(Math.random() * events.length);
            resolve(events[randomIndex]);
        }, Math.random() * 1000);
    });
}

let arr = [];
async function travelThrougtHistory(n = 20){
    try {
        const newListEvents = Array.from({length:n},()=> getPastEvent());  // nuova variabile con all'interno array con tutte le n volte e inserimento nella f.ne getpastEvent 
      // In collaborazione con raffaele la parte di newListEvents
        /*  for(let i=0; i<n; i++) {  // ciclo n volte
            newlistevents.push(getPastEvent())  // inserimento all'interno della f.ne getPastEvent
        }*/
        const risultato = await Promise.all(newListEvents);  // await=parola chiave usata quando stiamo aspettando il risultato di una promise
                                             // promise.all (collegata alla stringa precedente RACCOGLIE TUTTI I DATI) ti lancia l'esecuzione in parallelo
            console.log(risultato);
        arr = risultato.sort((a,b) => (a.year - b.year)) // ordine cronologico
        .filter((events, n, arr) => n === arr.findIndex(event => event.year=== events.year&& event.name===events.name)) // rimuovere duplicati dall'array
        .filter(event => event.year < 2000);
        console.log(arr);
    } catch (error) {
        console.log(error.message);
    };
    }
    
travelThrougtHistory();




