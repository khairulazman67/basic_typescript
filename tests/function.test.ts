describe('Function', function(){
    it('Should support arrow function on ts', function(){
        function sayHello(name:string , filter:(name:string) => string):string{
            return `Hello ${filter(name)}`;
        }

        expect(sayHello("Eko", (name:string):string => name.toUpperCase())).toBe("Hello EKO");
    })
})