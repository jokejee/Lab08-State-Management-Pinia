import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

const menu_list=ref([
    {name:'Jordan 1 Retro OG', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV90TrPIs0Tfr1YH8_FR59-JJ5yfMvlLNCPg&usqp=CAU", price:5000},
    {name:'Jordan 1 Mid Ice Blue ', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXzBsgDQzAb7eyv0A7108TfLP2ABLvOLCqqx-F3rUIq9l3RFg4dFvBEA5ozDi-JPtDKM&usqp=CAU", price:6000 },
    {name:'Jordan 1 Rabbit', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnSOsdRdpw2-CMeDeFMS0rnzE3jpcTYcj78CogBgQ-XmBWRZI_cvZ4uNMIlrUGSHXl3A&usqp=CAU", price:6500},
    {name:'Jordan 1 Homage', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yjSL7E3vsmi0lcDraBZjxbvNkoEzm_k4FJryUFM9DJMk36rKuSsnmWgwnt9TNU6IYgM&usqp=CAU", price:7000},
    {name:'Jordan 1 Retro High', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzUNWstTXe4EG-as8AAEvK-66JbPgXmSQCA&usqp=CAU", price:9000},
    {name:'Jordan 1 Latest ', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3I4RE71O9TjBZx3eQXZ7-AdS0kke28heCQ&usqp=CAU", price:9900},
])

return { menu_list }
})