import { Seller } from "../src/seller"
describe('Interface', function(){
    it('Should support interface on ts', function(){

        const seller : Seller = {
            id : 1,
            name : 'hantu',
            nib :'2121',
            npwp :'21212111'
        }

        seller.name = 'Maop'

        console.log(seller);
    })
})