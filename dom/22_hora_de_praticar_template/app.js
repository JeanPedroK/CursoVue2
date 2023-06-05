new Vue({
    el: '#desafio',
    data :{
        nome: 'Jean',
        idade: '30',
        img: 'https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/bem-aleatoria-essa-foto-de-gato..jpg?resize=783%2C1024&ssl=1'

    },
    methods:{
        multiplica(){
            return this.idade * 3
        },
        numeroAl(){
            return Math.random() * 84
        },
        meunome(event){
            this.nome = event.target.value
        }
    }
    
})