describe('array', function(){
    it('should same with js', function(){
        const names: string[] = ['eko', 'budi', 'joko'];
        const values: number[] = [1,2,3]

        console.info(names)
        console.info(values)

    })

    it('should support readonly array', function(){
        const hobbies: readonly string[] = ['game', 'badminton']
        // const hobbies:  ReadonlyArray<string> = ['game', 'badminton']

        console.info(hobbies)

        // hobbies.push('football')
        // hobbies[2] = 'football'

        console.info(hobbies)
    })

    it('should support tupple', function(){
        const person : readonly [string,string,number] = ['hantu', 'maop', 67];

        console.info(person);

        // person[0] = 'kunti';
    })
})