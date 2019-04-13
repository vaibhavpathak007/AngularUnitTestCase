import {compute} from './compute';

describe('Compute Function',()=>{
    it('should detect negative number',() => {
        let val = compute(-2);
        expect(val).toBe(0);
    });
    it('should increment number',() => {
        let val = compute(1);
        expect(val).toBe(2);
    });
});