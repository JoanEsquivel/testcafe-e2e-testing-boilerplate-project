//https://jsonplaceholder.typicode.com/

fixture`request`;
test("GET request", async (t) => {
  const results = await t.request({
    url: `https://jsonplaceholder.typicode.com/todos/1`,
    method: "GET",
    //body: {name: 'Jane Doe', position: 'CTO'}
    // params: {
    //     uid: 503,
    //     auth: true
    // }
    //withCredentials: true
    //auth: {
    //     username: 'admin',
    //     password: '1234'
    // }
    // headers: {
    //     "Accept": "text/html"
    // }
  });

  //   console.log(results);
  await t.expect(results.body.title).eql("delectus aut autem");
  await t.expect(results.status).eql(201);
});
