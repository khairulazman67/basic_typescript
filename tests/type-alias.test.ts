import { Category, Product } from "../src/type-alias";

describe('Type Alias', function(){
    it('Should support in typescript', function(){
        const category: Category ={
            id : "1",
            name : "Hp"
        }

        const product : Product={
            id : "1",
            name : "Iphone 11",
            price : 10000,
            category : category
        }
        const product2 : Product={
            id : '1',
            name : "Iphone 11",
            price : 10000,
            category : category
        }

        console.info(category)
        console.info(product)
        console.info(product2)
    })
})