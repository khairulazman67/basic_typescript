import {Customer, customerType} from '../src/enum'

describe('Enum',function(){
    it('Should support from ts', function(){
        const customer : Customer = {
            id : 1,
            name :'Azman',
            type : customerType.GOlD
        };

        console.log(customer)
    })
})