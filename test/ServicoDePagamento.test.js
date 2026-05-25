import { servicoDePagamento } from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe('Classe de serviço de pagamento', () => {

   it('Deve realizar um pagamento com categoria cara', () => {
      const servico = new servicoDePagamento();

      servico.pagar('0987-7656-3475', 'Samar', 156.87);

      const ultimoPagamento = servico.consultarUltimoPagamento();

      assert.equal(ultimoPagamento.categoria, 'cara');
   });

   it('Deve realizar um pagamento com categoria padrão', () => {
      const servico = new servicoDePagamento();

      servico.pagar('1234', 'Amazonas Energia', 50);

      const ultimoPagamento = servico.consultarUltimoPagamento();

      assert.equal(ultimoPagamento.categoria, 'padrão');
   });

   it('Deve consultar o último pagamento realizado', () => {
      const servico = new servicoDePagamento();

      servico.pagar('1111', 'Kebab Amazônico', 20);
      servico.pagar('2222', 'Amazonas Energia', 200);

      const ultimoPagamento = servico.consultarUltimoPagamento();

      assert.equal(ultimoPagamento.codigoBarras, '2222');
   });

});