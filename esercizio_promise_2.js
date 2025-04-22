function getPastEvent(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const events = [
  { "year": 1066, "name": "Battle of Hastings" },
  { "year": 1492, "name": "Columbus Discovers America" },
  { "year": 1776, "name": "American Declaration of Independence" },
  { "year": 1789, "name": "French Revolution Begins" },
  { "year": 1804, "name": "Napoleon Becomes Emperor" },
  { "year": 1865, "name": "Abolition of Slavery in the US" },
  { "year": 1914, "name": "World War I Begins" },
  { "year": 1917, "name": "Russian Revolution" },
  { "year": 1920, "name": "Women Gain Right to Vote in US" },
  { "year": 1929, "name": "Stock Market Crash" },
  { "year": 1939, "name": "World War II Begins" },
  { "year": 1945, "name": "End of World War II" },
  { "year": 1947, "name": "India Gains Independence" },
  { "year": 1953, "name": "DNA Double Helix Discovered" },
  { "year": 1955, "name": "Rosa Parks Sparks Bus Boycott" },
  { "year": 1957, "name": "Sputnik Launched" },
  { "year": 1963, "name": "Martin Luther King's 'I Have a Dream'" },
  { "year": 1969, "name": "Moon Landing" },
  { "year": 1971, "name": "Email First Used" },
  { "year": 1973, "name": "First Mobile Phone Call" },
  { "year": 1975, "name": "Microsoft Founded" },
  { "year": 1976, "name": "Apple Founded" },
  { "year": 1980, "name": "CNN Launched" },
  { "year": 1983, "name": "Internet Protocol Introduced" },
  { "year": 1986, "name": "Chernobyl Disaster" },
  { "year": 1989, "name": "Fall of Berlin Wall" },
  { "year": 1990, "name": "World Wide Web Invented" },
  { "year": 1991, "name": "Collapse of Soviet Union" },
  { "year": 1995, "name": "Windows 95 Released" },
  { "year": 1997, "name": "Deep Blue Beats Kasparov" },
  { "year": 1998, "name": "Google Founded" },
  { "year": 2001, "name": "Wikipedia Launched" },
  { "year": 2004, "name": "Facebook Founded" },
  { "year": 2005, "name": "YouTube Launched" },
  { "year": 2007, "name": "First iPhone Released" },
  { "year": 2008, "name": "Global Financial Crisis" },
  { "year": 2009, "name": "Bitcoin Created" },
  { "year": 2010, "name": "Instagram Launched" },
  { "year": 2012, "name": "Curiosity Rover Lands on Mars" },
  { "year": 2014, "name": "Ebola Outbreak in West Africa" },
  { "year": 2015, "name": "Paris Climate Agreement Signed" },
  { "year": 2016, "name": "Brexit Referendum" },
  { "year": 2017, "name": "Me Too Movement Goes Viral" },
  { "year": 2018, "name": "First Image of a Black Hole" },
  { "year": 2019, "name": "Notre-Dame Cathedral Fire" },
  { "year": 2020, "name": "Global Pandemic" },
  { "year": 2021, "name": "COVID-19 Vaccine Rollout" },
  { "year": 2022, "name": "Russia Invades Ukraine" },
  { "year": 2023, "name": "ChatGPT Becomes Public" },
  { "year": 2024, "name": "First Commercial Space Hotel Announced" },
  { "year": 2025, "name": "Breakthrough in Fusion Energy" },
  { "year": 2026, "name": "Mars Colony Plans Finalized" },
  { "year": 2027, "name": "AI Passes Turing Test" },
  { "year": 2028, "name": "Global Internet via Satellite" },
  { "year": 2029, "name": "First Human Cloned" },
  { "year": 2030, "name": "Climate Neutral Europe" },
  { "year": 2031, "name": "Virtual Reality Education Becomes Norm" },
  { "year": 2032, "name": "Medical Nanobots Used in Surgery" },
  { "year": 2033, "name": "First Ocean Cleanup Completed" },
  { "year": 2034, "name": "Quantum Internet Launched" },
  { "year": 2035, "name": "Hyperloop Public Transport Begins" },
  { "year": 2036, "name": "AI Judges Begin Trial Use" },
  { "year": 2037, "name": "First Fully Automated City" },
  { "year": 2038, "name": "End of Fossil Fuel Era Declared" },
  { "year": 2039, "name": "Ocean Colonies Established" },
  { "year": 2040, "name": "Global Digital Currency Adopted" },
  { "year": 2041, "name": "AI-Powered Governments" },
  { "year": 2042, "name": "Universal Basic Income Introduced Globally" },
  { "year": 2043, "name": "Space Elevator Begins Operation" },
  { "year": 2044, "name": "Global Language Translation Implants" },
  { "year": 2045, "name": "End of Physical Classrooms" },
  { "year": 2046, "name": "First Terraforming on Mars" },
  { "year": 2047, "name": "Global Water Crisis Solved" },
  { "year": 2048, "name": "Earthquake Prediction Systems Activated" },
  { "year": 2049, "name": "Climate Migration Peaks" },
  { "year": 2050, "name": "World Population Stabilizes" },
  { "year": 2051, "name": "AI Creates New Scientific Theory" },
  { "year": 2052, "name": "Major City Relocated Due to Climate" },
  { "year": 2053, "name": "Robots Gain Legal Personhood" },
  { "year": 2054, "name": "First Contact with Alien Life" },
  { "year": 2055, "name": "Memory Transfer Becomes Possible" },
  { "year": 2056, "name": "Earth Protected by Climate Shield" },
  { "year": 2057, "name": "Neural Interface Replaces Smartphones" },
  { "year": 2058, "name": "Earthquake-Proof Cities Completed" },
  { "year": 2059, "name": "Mind-Uploaded Humans Debut" },
  { "year": 2060, "name": "Human-AI Symbiosis Achieved" },
  { "year": 2061, "name": "Halley's Comet Returns" },
  { "year": 2062, "name": "First AI-Directed Space Mission" },
  { "year": 2063, "name": "Universal Translator Achieves 100% Accuracy" },
  { "year": 2064, "name": "World Celebrates Peace Century" },
  { "year": 2065, "name": "Artificial Consciousness Recognized" },
  { "year": 2066, "name": "Mars Becomes Self-Sustaining Colony" },
  { "year": 2067, "name": "Earth's Oldest Tree Preserved Forever" },
  { "year": 2068, "name": "Artificial Gravity Invented" },
  { "year": 2069, "name": "100th Anniversary of the Moon Landing" }
];
const randomIndex = Math.floor(Math.random() * events.length);
resolve(events[randomIndex]);
}, Math.random() * 1000);
})
}

  
  let arr = [];

  async function travelThrougtHistory(n = 95) {
    const nuoviEventi = new Set();
    
    try {
      while (nuoviEventi.size < 95 ) {
        const richiesta = Array.from({length:n},()=> getPastEvent());
        const risultato = await Promise.all(richiesta);
        risultato.forEach(event => {
        if (!nuoviEventi.has((`${event.year}:${event.name}`))) {
          nuoviEventi.add((`${event.year}:${event.name}`))
        }
      });
    };
    
    console.log(nuoviEventi);
    
    
    arr = Array.from(nuoviEventi.values()).sort((a,b) => (a.year - b.year))
    .filter((events,n, arr) => n === arr.findIndex(event => event.year === events.year&& event.name===events.name))
    .filter(event => event.year < 2000);
    
    console.log(arr);  // ordinato con filtri //
    
    return nuoviEventi;

    
  } catch (error) {
        console.log(error.message);
      };
    }

travelThrougtHistory();
      
      
      
      
 /*  ESERCIZIO INVIATO
  let arr = []; 
  
  async function travelThrougtHistory(n = 95) {
    const nuoviEventi = new Set();
    const finalList = [];
    const eventiTot = 95;

    
    while (nuoviEventi.size < eventiTot) {
        const evento = await getPastEvent();
        const setEventi = `${evento.year}:${evento.name}`; // 1° array con tutti gli eventi in ordine casuale //

        if (!nuoviEventi.has(setEventi)) {
          nuoviEventi.add(setEventi);
          finalList.push(evento);
          console.log(`${evento.year}:${evento.name}`); // if per evitare la duplicazione degli eventi //
        }

    }
        
    arr = finalList.sort((a,b) => (a.year - b.year))
    .filter((events,n, arr) => n === arr.findIndex(event => event.year === events.year&& event.name===events.name)) // rimuovere duplicati dall'array
    .filter(event => event.year < 2000);
    console.log(arr);  // ordinato con filtri //

    return finalList;
  
    }

    travelThrougtHistory().then(finalList => {
    console.log(finalList); 
    });
    */     
     

  
