function initVue() {
    new Vue({
        el: '#vue',
        data: {
            activated: '',
            name: '',
            src: '',
            sent: '',
            msg: '',
            user: '',
            enterMsg: '',
            contacts: [
                {
                    name: 'Alessia Lee',
                    imgSrc: 'img/ale.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/21',
                            hour: '15:30:00',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/21',
                            hour: '15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/21', 
                            hour: '16:15:00',
                            text: "Mi manchi!",
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Trecca',
                    imgSrc: 'img/trecca.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/21',
                            hour: '16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/21',
                            hour: '16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/21',
                            hour: '16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'More',
                    imgSrc: 'img/more.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/21',
                            hour: '10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/21',
                            hour: '10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/21',
                            hour: '16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessia Pellegrini',
                    imgSrc: 'img/alessiadonb.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/21',
                            hour: '15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/21',
                            hour: '15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        methods:{
            selectedChat: function (contact) {
                this.name = contact.name;
                this.activated = 'active';
                this.src = contact.imgSrc;
                
                this.msg = contact.messages;
                console.log(this.msg);
                this.user = contact;
            },
            answer: function () {
                console.log('ciaoaaaa');
                let moment = new Date();
                let date = `${moment.getDate()}/${(moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                let hours = `${moment.getHours()}:${moment.getMinutes()}:${moment.getSeconds()}`;

                let text = 'Va bene!';
                let status = 'received';

                this.user.messages.push({date, hours, text, status});
                console.log(this.user.messages);
            },
            enterMsgs: function () {
                let moment = new Date();
                let date = `${moment.getDate()}/${(moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                let hours = `${moment.getHours()}:${moment.getMinutes()}:${moment.getSeconds()}`;

                let text = this.enterMsg;
                let status = 'sent';

                if(this.enterMsg.length > 0 && this.enterMsg[0] != ' '){
                    this.user.messages.push({date, hours, text, status});
                    console.log(this.user.messages);
                    this.enterMsg = '';
                    setTimeout(this.answer, 2000);
                }
            }
        },
        // mounted() {
        //     function orderBydate(contacts) {
        //         let lastContact = 0;
        //         let thisContact;
        //         for (let i = 0; i < contacts.length; i++) {
        //             // thisContact = contacts[i];
        //             const dateMsg = contacts[i].messages[contacts[i].messages.length - 1].date;
        //             console.log(dateMsg);
        //             let hour = dateMsg.slice(0,2);
        //             console.log(hour);
        //             if(lastContact == 0){
        //                 lastContact = contacts[i];
        //             }
        //         }
        //     }
        //     orderBydate(this.contacts);
        // }
    });
}

function init(){
    initVue();
}

document.addEventListener('DOMContentLoaded', init);