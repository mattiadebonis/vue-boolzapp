var app = new Vue({
    el: "#app",
    data:{
        //contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },     
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        indexSelezionato : 0,
        nuovoMessaggio : "",
        searchedUser: "",
    },

    methods:{
        //mostra immagine utente
        showUserImg : function(indexUser){
            var imgName = "img/avatar" + this.contacts[indexUser].avatar + ".jpg";
            return imgName;
        },
        
        //salva indice dell'utente selezionato
        userSelected : function(indexSelected){
            this.indexSelezionato = indexSelected;
        },

        //salva messaggio inviato dall'utente
        sendMessage : function(){
            if (this.nuovoMessaggio != ""){
                setTimeout(() => this.contacts[this.indexSelezionato].messages.push({
                    date: '29/03/2020 10:11:40',
                    text: "Ok",
                    status: 'received'
                }), 1000);
                //concatena il messaggio di risposta
                this.contacts[this.indexSelezionato].messages.push({
                    date: '28/03/2020 10:10:40',
                    text: this.nuovoMessaggio,
                    status: 'sent'
                })
                this.nuovoMessaggio = "";
            }
        },

        //restituisce vero se caratteri inseriti nella ricerca sono presenti nel nome dell'utente della chat
        isSearched : function (nameUser){
            var contained = false;
            nameUser = nameUser.toLowerCase();
            if (nameUser.includes(this.searchedUser)){
                return contained = true;
            }
            return contained;
        },

        // se la chat ?? selezionata restituisce il nome della classe setta la propriet?? background:lightgray
        isSelected : function(indexItem){
            var background = "back_lightgray";
            if (indexItem == this.indexSelezionato){
                return background;
            }
        }

    }
});