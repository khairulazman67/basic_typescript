describe('Type Alias', function () {
    it('Should support in typescript', function () {
        const category = {
            id: "1",
            name: "Hp"
        };
        const product = {
            id: "1",
            name: "Iphone 11",
            price: 10000,
            category: category
        };
        const product2 = {
            id: '1',
            name: "Iphone 11",
            price: 10000,
            category: category
        };
        console.info(category);
        console.info(product);
        console.info(product2);
    });
});
export {};
