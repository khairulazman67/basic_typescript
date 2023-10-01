describe('Union Type',function(){
    it('Should support in typescript ', function(){
        let sample : number  | string | boolean = "Eko"

        console.log(sample)

        sample = 100
        console.log(sample)

        sample = false
        console.log(sample)
    })
})

describe('Validation Union Type', function(){
    it('Shout support union validation in typescript', function(){
        function process(value: number | string | boolean){
            if(typeof value == 'string'){
                return value.toUpperCase();
            }else if(typeof value == 'number'){
                return value + 2;
            }else{
                return !value
            }
        }
        expect(process("Eko")).toBe('EKO');
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    })
})