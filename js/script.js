function initVue() {
    new Vue({
        el: '#vue',
        data: {
            activated: '', // Classe active main attivato
            name: '', // Nome contatto selected
            src: '', // Src immagine contatto selected
            sent: '', // Classe sent per chat verde
            msg: '', // Array msg utente selezionto
            user: '', // Utente selzionato
            enterMsg: '', // Messaggio inviato da input
            search: '', // Nome da cercare via input
            deletedActive: '', // Classe active delete attivato
            indexUser: -1, // Indice in contacs dell'utente selected
            contacts: [
                {
                    name: 'Alessia Facchetti',
                    imgSrc: 'img/ale.jpg',
                    visible: true,
                    messages: [
                        {
                            deleted: false,
                            date: '10/01/21',
                            hour: '15:30:00',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            deleted: false,
                            date: '10/01/21',
                            hour: '15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            deleted: false,
                            date: '10/01/21', 
                            hour: '16:15:00',
                            text: "Si, appena arrivo a casa!",
                            status: 'received'
                        },
                        {
                            deleted: false,
                            date: '10/01/21', 
                            hour: '16:30:00',
                            text: "Stasera pizzetta easy??",
                            status: 'received'
                        },
                        {
                            deleted: false,
                            date: '10/01/21', 
                            hour: '17:20:00',
                            text: "Yess, ho già chiamato!",
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Trecca',
                    imgSrc: 'img/trecca.jpg',
                    visible: true,
                    messages: [
                        {
                            deleted: false,
                            date: '20/03/21',
                            hour: '16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            deleted: false,
                            date: '20/03/21',
                            hour: '16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            deleted: false,
                            date: '20/03/21',
                            hour: '16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                        {
                            deleted: false,
                            date: '20/03/21',
                            hour: '16:37:00',
                            text: 'Domani ci sono vez!',
                            status: 'sent'
                        },
                        {
                            deleted: false,
                            date: '20/03/21',
                            hour: '16:42:00',
                            text: 'Perfetto!!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'More',
                    imgSrc: 'img/more.jpg',
                    visible: true,
                    messages: [
                        {
                            deleted: false,
                            date: '28/03/21',
                            hour: '10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            deleted: false,
                            date: '28/03/21',
                            hour: '10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            deleted: false,
                            date: '28/03/21',
                            hour: '16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        },
                        {
                            deleted: false,
                            date: '28/03/21',
                            hour: '18:00:45',
                            text: 'Stasera calcetto ricordati vez...',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessia Mancinetti',
                    imgSrc: 'img/alessiadonb.jpg',
                    visible: true,
                    messages: [
                        {
                            deleted: false,
                            date: '10/01/21',
                            hour: '15:30:55',
                            text: 'Ciao bella, stai bene?',
                            status: 'sent'
                        },
                        {
                            deleted: false,
                            date: '10/01/21',
                            hour: '15:50:00',
                            text: 'Si, tutto appost! E tu?',
                            status: 'received'
                        }
                    ],
                }
            ]
        },
        methods:{
            // Funzione filtro per nome cercato
            research: function () {
                let filteredContacts = [];
                let searched = this.search.toLowerCase();

                for (let i = 0; i < this.contacts.length; i++) {
                    // if(this.search == ''){
                    //     filteredContacts = this.contacts;
                    if(this.contacts[i].name.toLowerCase().includes(searched)){
                        filteredContacts.push(this.contacts[i]);
                    }
                }
                return filteredContacts;
            },
            // Funzione chat selezionata
            selectedChat: function (contact, index) {
                this.name = contact.name;
                this.activated = 'active';
                this.src = contact.imgSrc;
                this.msg = contact.messages;
                this.user = contact; 
                this.indexUser = index;
            },
            // Funzione di risposta automatica
            answer: function () {
                let moment = new Date();
                let date = `${moment.getDate()}/${(moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                let hour = `${this.formatDate(moment.getHours())}:${this.formatDate(moment.getMinutes())}:${this.formatDate(moment.getSeconds())}`;

                let text = 'Va bene!';
                let status = 'received';
                let deleted = false;

                this.user.messages.push({date, hour, text, status, deleted});
                console.log(this.user.messages);

                this.scrollToBottom();
            },
            // Funzione invio messaggio
            enterMsgs: function () {
                let moment = new Date();
                let date = `${moment.getDate()}/${(moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                let hour = `${this.formatDate(moment.getHours())}:${this.formatDate(moment.getMinutes())}:${this.formatDate(moment.getSeconds())}`;

                let text = this.enterMsg;
                let status = 'sent';
                let deleted = false;

                if(this.enterMsg.length > 0 && this.enterMsg[0] != ' '){
                    this.user.messages.push({date, hour, text, status, deleted});
                    console.log(this.user.messages);
                    this.enterMsg = '';
                    setTimeout(this.answer, 2000);
                }

                this.scrollToBottom();
            },
            // Finestra rimuovi messagio compare
            deleteMsg: function (ms) {
                ms.deleted = true;
                // this.scrollToBottom;
            },
            // Finestra rimuovi messagio scompare
            renewedMsg: function (ms) {
                ms.deleted = false;
            },
            // Rimozione messaggio
            deleteThisMsg: function (index) {
                
                this.msg.splice(index, 1);
                if(this.msg.length == 0){
                    this.contacts.splice(this.indexUser, 1);
                    this.activated = '';
                }
                console.log('Elem arr msg: ' + this.msg.length);
                console.log(this.indexUser);
                console.log(this.msg);
            },
            // Formattazione data/ora
            formatDate: function (format){
                if (format < 10) {
                    format = '0' + format;
                }
                return format;
            },
            scrollToBottom: function(){
                const container = this.$el.querySelector(".chat ul");
                container.scrollTop = container.scrollHeight;
            }
        }
    });
}

function init(){
    initVue();
}

document.addEventListener('DOMContentLoaded', init);