import { Seller } from "../src/seller"
import { Employee, Manager } from "../src/emoloyee"
import { Person } from "../src/person"

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

    it('Should support interface', function(){
        interface addFunction{
           (value1 : number, value2:number): number
        }
        const testFunction : addFunction = (value1:number, value2:number):number=>{
            return value1+value2
        }

        expect(testFunction(5,5)).toBe(10);
        console.log('testFunction ', testFunction(5,5))
    })

    it('Should support indexable interface', function(){
        interface StringDictionary{
            [index : number ] : string
        }

        const data : StringDictionary = ['Khairul', 'Azman', 'Eko']
        console.log('data ', data)
    })

    it('Should support indexable for non number index', function(){
        interface StringDictionary{
            [key:string] : string
        }

        const dictionaryName : StringDictionary={
            name : 'azman',
            address : 'lhokseumawe'
        }

        expect(dictionaryName["name"]).toBe('azman')
        expect(dictionaryName.address).toBe('lhokseumawe')

        console.log('name ', dictionaryName["name"])
        console.log('dictionaryName.address ', dictionaryName.address)

    })

    it('Should support extended interface', function(){
        const isiManager : Manager={
            id : 1,
            name : "Azman",
            division : 'Programmer',
            numberOfEmployee : 1,
        }

        console.log('isi Manager ', isiManager)
    })

    it('Should support function in interface', function(){


        const setPerson : Person = {
            name :'azman',
            sayHello : function(name:string):string{
                return `Hello ${name} my name is ${this.name}`
            }
        }

        console.log(setPerson.sayHello('Maop'))
    })

    it('Should support interception type',function(){
        interface HashName{
            name : string
        }

        interface HashId{
            id : string
        }

        // interface Person extends HashId , HashName{
        //     address : string
        // }

        // atauu

        type Person = HashId & HashName

        const tes : Person = {
            name :'hantu',
            id :'1'
        }

        console.log('tes ', tes)
    })

    it('Shoult support type assertion', function(){
        const person : any ={
            name : "Eko",
            age : 20
        }
        const person2: Person = person as Person
        
        person2.sayHello('Budi')

        console.log(person2)
    })
})