const request = require('supertest');
const app = require('../src/app');

describe('POST /bfhl', () => {
    it('Example A', async () => {
        const res = await request(app)
            .post('/bfhl')
            .send({ data: ["a", "1", "334", "4", "R", "$"] });

        expect(res.statusCode).toBe(200);
        expect(res.body.is_success).toBe(true);
        expect(res.body.even_numbers).toEqual(["334", "4"]);
        expect(res.body.odd_numbers).toEqual(["1"]);
        expect(res.body.alphabets).toEqual(["A", "R"]);
        expect(res.body.special_characters).toEqual(["$"]);
        expect(res.body.sum).toBe("339");
        expect(res.body.concat_string).toBe("Ra");
    });
    // tests/bfhl.test.js
    it('Example B', async () => {
        const res = await request(app)
            .post('/bfhl')
            .send({ data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"] });

        expect(res.statusCode).toBe(200);
        expect(res.body.is_success).toBe(true);
        expect(res.body.odd_numbers).toEqual(["5"]);
        expect(res.body.even_numbers).toEqual(["2", "4", "92"]);
        expect(res.body.alphabets).toEqual(["A", "Y", "B"]);
        expect(res.body.special_characters).toEqual(["&", "-", "*"]);
        expect(res.body.sum).toBe("103");
        expect(res.body.concat_string).toBe("ByA");
    });


    it('Example C (multi-letter tokens)', async () => {
        const res = await request(app)
            .post('/bfhl')
            .send({ data: ["A", "ABcD", "DOE"] });

        expect(res.statusCode).toBe(200);
        expect(res.body.is_success).toBe(true);
        expect(res.body.alphabets).toEqual(["A", "ABCD", "DOE"]);
        expect(res.body.sum).toBe("0");
        expect(res.body.concat_string).toBe("EoDdCbAa");
    });
});
