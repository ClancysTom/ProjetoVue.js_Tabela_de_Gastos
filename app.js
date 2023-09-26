new Vue({
    el: '#app',
    data: {
        rendaMensal: 0,
        mostrarTabela: false,
        gastosMensais: {},
        gastosAnuais: {}
    },
    methods: {
        calcularGastos() {
            // Definir as porcentagens de gastos mensais
            const porcentagemAgua = 4;
            const porcentagemEnergia = 6;
            const porcentagemInternet = 5;
            const porcentagemAlimentacao = 38;
            const porcentagemAluguel = 18.87;
            const porcentagemViagens = 8.696;
            const porcentagemEmergencia = 9.44;
            const porcentagemDizimo = 10;

            // Calcular os gastos mensais
            this.gastosMensais.agua = (this.rendaMensal * porcentagemAgua) / 100;
            this.gastosMensais.energia = (this.rendaMensal * porcentagemEnergia) / 100;
            this.gastosMensais.internet = (this.rendaMensal * porcentagemInternet) / 100;
            this.gastosMensais.alimentacao = (this.rendaMensal * porcentagemAlimentacao) / 100;
            this.gastosMensais.aluguel = (this.rendaMensal * porcentagemAluguel) / 100;
            this.gastosMensais.viagens = (this.rendaMensal * porcentagemViagens) / 100;
            this.gastosMensais.emergencia = (this.rendaMensal * porcentagemEmergencia) / 100;
            this.gastosMensais.dizimo = (this.rendaMensal * porcentagemDizimo) / 100;

            // Calcular os gastos anuais
            this.gastosAnuais.agua = this.gastosMensais.agua * 12;
            this.gastosAnuais.energia = this.gastosMensais.energia * 12;
            this.gastosAnuais.internet = this.gastosMensais.internet * 12;
            this.gastosAnuais.alimentacao = this.gastosMensais.alimentacao * 12;
            this.gastosAnuais.aluguel = this.gastosMensais.aluguel * 12;
            this.gastosAnuais.viagens = this.gastosMensais.viagens * 12;
            this.gastosAnuais.emergencia = this.gastosMensais.emergencia * 12;
            this.gastosAnuais.dizimo = this.gastosMensais.dizimo * 12;

            // Exibir as tabelas
            this.mostrarTabela = true;
        }
    }
});
