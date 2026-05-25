export class servicoDePagamento{
    pagamentos;

    //primeiro metodo a ser executado ao usar a classe
    constructor(){
        this.pagamentos = [];
    }
    
    pagar(codigoBarras, empresa, valor) {
        this.pagamentos.push({
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: valor > 100 ? 'cara' : 'padrão'
        });
    }

    consultarUltimoPagamento() {
        return this.pagamentos[this.pagamentos.length - 1];
    }
}
