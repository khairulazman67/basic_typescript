describe('Object', function(){
    it('Should support in ts', function(){
        let person : {id:number, name:string, hobbies?:string[]}={
            id : 1,
            name : 'sas',
            hobbies : ['ek u']
        }

        console.log(person)
    })
}) 