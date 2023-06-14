const {createApp} = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/3/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/3/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/3/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/3/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/3/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/3/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/1/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            
            selectedContact : 0,
            send_message:'',
            text_typed:'',
            msgIndex: -1,
        }
       
    },

    methods: {
        
        selectContact(index)    
        {
            this.selectedContact = index,
            console.log(index);  
        },

        autoAnswer()
        {
            setTimeout(()=>
            {
                obj = 
                {
                    date: '',
                    message: 'ok',
                    status:'received',
                }
                  this.contacts[this.selectedContact].messages.push(obj)
            },12500)
        },

        sendMessage()
        {
            let obj =
            {
                date: this.currentDate(),
                message: this.send_message,
                status:'sent',
            }
                this.contacts[this.selectedContact].messages.push(obj),
                this.send_message='';
                setTimeout(()=>
                {
                    obj = 
                    {
                        date: this.currentDate(),
                        message: 'ok',
                        status:'received'
                    }
                      this.contacts[this.selectedContact].messages.push(obj)
                },1000)
        },

        searchContact() 
        {
            this.contacts.forEach((contact) => 
            {
              if (!contact.name.toLowerCase().includes(this.text_typed.toLowerCase())) 
              {
                contact.visible = false;
              } else 
              {
                contact.visible = true;
              }
            })
        },

        dropDownToggle(index)
        {
            if ( this.msgIndex == -1 || this.msgIndex != index) 
            {
                this.msgIndex = index;
            } else 
            {
                this.msgIndex = -1;
            }
        },
        
        deleteMsg(index)
        {
            this.contacts[this.selectedContact].messages.splice(index, 1);
        },

        lastMessageSent(contact) 
        {
            let messages = contact.messages;
            if (messages.length > 0) 
            {
                const lastMessage = messages[messages.length - 1];
                return lastMessage.message;
            }
            return '';
        },

        lastTimeOnline(contact) 
        {
            let messages = contact.messages;
            if (messages.length > 0) 
            {
              const last_time_online = messages[messages.length - 1];
              return last_time_online.date;
            }
            return '';
        },

        currentDate()
        {
            let current_date = luxon.DateTime;
            let now = current_date.now().toLocaleString(current_date.DATETIME_SHORT);
            return now;
        },
}

}).mount('#app');