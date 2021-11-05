'use strict';

const {server}=require('../src/server');
const supertest=require('supertest');
const mockReq=supertest(server);
const {db}=require('../src/models/index');


beforeAll(async () => {
  await db.sync();
});

// after all the tests are done
afterAll(async () => {
  await db.drop();
});

describe('server testing',()=>{

 test('should reponse with 404 status on a bad route',async()=>{
   const res=await mockReq.get('/bad');
   expect(res.status).toBe(404);  
 })   


 test('should reponse with 404 status on a bad method',async()=>{
    const res=await mockReq.get('/bad()');
    expect(res.status).toBe(404);  
  }) 


  // test if can read

  it('can get all ', async () => {

    const response = await mockReq.get('/food');

    expect(response.status).toBe(200);

  });

  // test if can read one 
  it('can get one ', async () => {
    const response = await mockReq.get('/food').send({
      foodname: 'sandwich'
      
     });
 
     expect(response.status).toBe(200);

  });

  it('can add ', async () => {

    const response = await mockReq.post('/food').send({
     foodname: 'sandwich',
     
    });

    expect(response.status).toBe(201);

  });

  // test if can update a food
  // it('can update a record', async () => {
  //   const response = await mockReq.put('/food/2').send({
  //     name:"fish"
  //    });
 
  //    expect(response.status).toBe(201);

  // });
  
  // test if can delete 
  it('can delete a record', async () => {
    const response = await mockReq.delete('/food/3').send({
       id:1
     });
 
     expect(response.status).toBe(204);

  });

})