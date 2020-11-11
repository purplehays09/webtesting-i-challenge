const enhancer = require('./enhancer.js');
// test away!

const item = {
    name:'name',
    durability:50,
    enhancement:19
}

describe('making sure that everything works to begin with', () => {
    it('can pass a test', () => {
        expect(enhancer).toBeDefined()
    });
    
});

describe('enhancer.repair returns 100', () => {
    it('can return 100', () => {
        const expectDurability = 100;
        const actualItem = enhancer.repair(item)
    
        expect(actualItem.durability).toBe(expectDurability)        
    });
    
});

describe('enhancer.success ', () => {
    it('returns the number +1 until 20', () => {
        const expectedEnhancement = item.enhancement < 20 ? item.enhancement + 1 : 20
        const actualItem = enhancer.success(item)

        expect(actualItem.enhancement).toBe(expectedEnhancement)
    });
    
});

describe('enhancer.fail', () => {
    it('lowers durabily or enhancement accordingly', () => {
        const expectedItem = {...item}
        if(expectedItem.enhancement > 16){
             expectedItem.enhancement -= 1
        } else if(expectedItem.enhancement >= 15){
            expectedItem.durability -= 10
        }else{
            expectedItem.durability -= 5
        }

        const actualItem = enhancer.fail(item)

        expect(actualItem).toStrictEqual(expectedItem)
    });
    
});

