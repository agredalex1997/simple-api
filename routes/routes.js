var faker = require("faker");

var appRouter = function (app) {
  app.get("/", function (req, res) {
    res.status(200).send("Hello world!");
  });

  app.get("/user", function (req, res) {
    var dataUser = ({
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      usuario: faker.internet.userName(),
      email: faker.internet.email(),
      image: faker.internet.avatar()
    });
    res.status(200).send(dataUser);
  });

  app.get("/user/:cant", function (req, res) {
    var users = [];
    var num = req.params.cant;

    if (isFinite(num) && num > 0) {
      for (let i = 0; i < num; i++) {
        users.push({
          nombre: faker.name.firstName(),
          apellido: faker.name.lastName(),
          usuario: faker.internet.userName(),
          email: faker.internet.email(),
          image: faker.internet.avatar()
        });
      }
      res.status(200).send(users);
    } else {
      res.status(400).send("Ingresar un numero mayor a cero");
    }
  });

}

module.exports = appRouter;
