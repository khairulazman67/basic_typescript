describe('Optional', function(){
    it('Should support null and undefinded', function(){
        function sayHello(name? : string){
            if(name){
                console.log(`Hello ${name}`)
            }else{
                console.log(`Hello`)
            }
        }

        sayHello('Azman')
        const name : string | undefined = undefined
        console.log(name)
    })
})