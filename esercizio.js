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
    })
}

async function travelThrougtHistory(n = 50){
    try {
        const newlistevents = Array.from({length:n},()=> getPastEvent());  // nuova variabile con all'interno array con tutte le n volte e inserimento nella f.ne getpastEvent
      /*  for(let i=0; i<n; i++) {  // ciclo n volte
            newlistevents.push(getPastEvent())  // inserimento all'interno della f.ne getPastEvent
        }*/
        const risultato = await Promise.all(newlistevents);  // await=parola chiave usata quando stiamo aspettando il risultato di una promise
                                             // promise.all (collegata alla stringa precedente RACCOGLIE TUTTI I DATI) ti lancia l'esecuzione in parallelo
            console.log(risultato);
        const FinalList = risultato.sort((a,b) => a.year - b.year)
        Array.filter((events,n) => Array.findIndex(event => event.year, event.name)) // rimuovere duplicati dall'array
        events.filter(event => event.year < 2000)
        console.log(FinalList);
    } catch (error) {
        console.log(error.message);
    };
    }
    
travelThrougtHistory();




