const prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
function afficheTrajets(){
    console.log("afficher tous les trajets disponibles : ")
    for(let i=0;i<trips.length;i++){
       console.log("id : " + trips[i].id);
       console.log("deparure : "+ trips[i].departure);
       console.log("destination : " + trips[i].destination);
       console.log("departureTime: "+ trips[i].departureTime);
       console.log("arrivalTime : "+ trips[i].arrivalTime);
       console.log("price : "+ trips[i].price);
       console.log("availableSeats : "+ trips[i].availableseats);
    }
}
const ticket = []
function acheterTicket(){
    
    let idtr =Number(prompt('Entrer id de trajet : '));
    for(let i=0;i<trips.length;i++){

        if(idtr === trips[i].id){
            if(trips[i].availableSeats > 0){
                let nomPassager = prompt('Saisir le Nom de passager :')
                let idTicket = ticket.length+1
                let numPlace = 1
                for(i=0;i<ticket.length;i++){
                    if(idtr.ticket[i]===trips[i].id){
                        numPlace++;
                    }
                }
                const nvTicket = {
                    idTicket : idTicket,
                    nomPassager : nomPassager,
                    depart :trips[i].departure,
                    arrivee : trips[i].destination,
                    numPlace : numPlace,
                    prix : trips[i].price,                              
                }
                ticket.push(nvTicket);
                   trips[i].availableSeats--;
                console.log("Ticket acheté avec succès.");
            }
            else{
                console.log('auccun place')
            }
            return;
        }
    
    }
    console.log('Trajet introuvable.');
}
function afficherTicket(){
    console.log("afficher tous les tickets disponibles : ")
    for(let i=0;i<ticket.length;i++){
       console.log("id Ticket : " + ticket[i].idTicket);
       console.log('nom passager :'+ ticket[i].nomPassager);
       console.log("deparure : "+ ticket[i].depart);
       console.log("destination : " + ticket[i].arrivee);
       console.log("prix : "+ ticket[i].prix);
       console.log("place : "+ ticket[i].numPlace);
    }
    if(ticket.length == 0){
        console.log('aucun ticket disponible : ')

    }

}
function annulerTicket(){
    let id_trajet = Number(prompt('entrer identifiant du ticket pour rechercher : '))
    let annTicket = false ;
    const ticket2 =[]
    for(let i=0;i<ticket.length;i++){
        if(id_trajet ===ticket[i].idTicket){
            annTicket = true;
            for(let i=0;i<trips.length;i++){
                if(trips[i].idtr === trips[i].id){
                   availableSeats++;
                console.log('Ticket annulé avec succès. ')
                  break ;
                }
                else{
                    ticket2.push(ticket[i])
                }
            }
        }
    }
    if(annTicket){
        ticket.length == 0;
        for(let i=0;i<ticket2.length;i++){
            ticket.push(ticket)
        }
    }
     else{
           console.log('Ticket introuvable.') 
     }

}
function rechercherTicket(){
    let nom_passager = prompt('entrer le nom de passager : ');

}














let Choix=11
do{
console.log("\n================ MENU ================");
        console.log("1. Afficher tous les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets réservés");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket par nom");
        console.log("6. Filtrer trajets par ville de départ");
        console.log("7. Trier les trajets par prix");
        console.log("0. Quitter");
        console.log("=========================================");

        Choix = prompt(" Choisissez une option :");

        switch (Choix) {
            case '1':
               afficheTrajets();
                break;
            case '2':
               acheterTicket();
                break;
            case '3':
                afficherTicket();
                break;
            case '4':
                annulerTicket();
                break;
            case '5':
                rechercherTicket();
                break;
            case '6' :
                break;
           
            case '0':
                console.log("Au revoir !");
                break;
            default:
                console.log("Option invalide, veuillez réessayer.");
        }
}while(Choix!=="0")