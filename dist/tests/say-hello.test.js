import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('Should return hello eko ', function () {
        expect(sayHello('eko')).toBe('Hello eko');
    });
});
