import {getCurrencies} from './getCurrencies';

describe('getCurrency',()=>{
    it('contain USD AUD EUR',()=>{
        let currency = getCurrencies();
        expect(currency).toContain('USD');
        expect(currency).toContain('AUD');
        expect(currency).toContain('EUR');
    });
});