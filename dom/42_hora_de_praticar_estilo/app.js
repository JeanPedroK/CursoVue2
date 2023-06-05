new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		class2: true,
		perigo: true,
		class3: '',
		class5: '',
		valid: '',
		cor: '',
		tamanho: {
			width: '200px',
			height: '200px'
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		validClass(event) {
			if (event.target.value == 'true') {
				this.perigo = true
			} else if (event.target.value == 'false') {
				this.perigo = false
			}
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500);

		}
	}

})
