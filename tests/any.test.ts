describe('Any', function(){
    it('Should support in javascript', function(){
        const person : any ={
            id : 1,
            name : 'Azman',
            age : 10
        }

        person.age = '20',
        person.address = 'Lhokseumewew'

        console.log(person)
    })
})