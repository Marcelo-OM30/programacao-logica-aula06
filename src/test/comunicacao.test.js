const { describe, it } = require('node:test');
const {linguagemDosGatosECachorros} = require('../comunicacao');
const {strictEqual} = require('node:assert');

describe('linguagemDosGatosECachorros', () => {
    it('deve retornar "woff woff" para cachorros', () => {
        const resultado = linguagemDosGatosECachorros('cachorro');
        strictEqual(resultado, 'woff woff');
    });
    it('deve retornar "miau" para gatos', () => {
        const resultado = linguagemDosGatosECachorros('gato');
        strictEqual(resultado, 'miau');
    });
})