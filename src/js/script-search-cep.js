new Vue({
    el: "#appCep",
    data: {
        endereco: {
            cep: null,
            logradouro: null,
            estado: null,
            cidade: null,
            bairro: null
        }
    },
    methods: {
        cepAlteradoEvento() {
            axios({
                method: "get",
                url: `https://viacep.com.br/ws/${this.endereco.cep}/json/`,
                responseType: "json"
            }).then(response => {
                var bean = response.data;
                this.endereco.logradouro = bean.logradouro;
                this.endereco.estado = bean.uf;
                this.endereco.cidade = bean.localidade;
                this.endereco.bairro = bean.bairro;
            }).catch(error => {
                console.error("Error fetching data:", error);
            });
        }
    }
});


