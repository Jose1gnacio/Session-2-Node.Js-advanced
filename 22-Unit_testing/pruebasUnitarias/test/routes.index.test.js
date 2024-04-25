const request = require('supertest');
const app = require('../app');

describe('Ruta inicial', ()=>{

    //evaluando respuesta
    test('debe devolver una respuesta por GET', (done)=>{
        request(app)
        .get('/')
        .then((response)=>{
            expect(response.statusCode)
            .toBe(200);
            done();
        })
    });

    test('no debe devolver una respuesta por POST', (done)=>{
        request(app)
        .post('/')
        .then((response)=>{
            expect(response.statusCode)
            .toBe(404);
            expect(response.statusCode)//es para ser redundante
            .not.toBe(200);
            done();
        })
    });

    //evaluando contenido
    test('debe mostrar bienvenido', (done)=>{
        request(app)
        .get('/')
        .then((response)=>{
            expect(response.text)
            .toMatch(/Bienvenido/);            
            done();
        })
    });
})