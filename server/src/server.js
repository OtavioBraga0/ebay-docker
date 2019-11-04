const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const http = require("http");
const api = require("./services/api");
const ebay = require("./services/ebayApi");
const nodemailer = require("nodemailer");

const routes = require("./routes");

const app = express();
const server = http.Server(app);

mongoose.connect(
  "mongodb+srv://ebay:ebay@ebay-mmfmv.mongodb.net/ebay?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar o corpo da requisição (para criação, edição)

sendEmail(2);
sendEmail(10);
sendEmail(30);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

function sendEmail(time, accessToken) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: "otavio.chadbraga@gmail.com",
      clientId: '407408718192.apps.googleusercontent.com',
      clientSecret: 'jvXnmAjSYlEffadApfyNFfhN',
      accessToken: "ya29.Il-vBzklQGZ76UZUTshFsqC-HVLYjMPq8OhPrEfXBoz3_JLfvpgjgwwnib0BQmSs6C4uokCZ3QepyEb7vuimGiZf3EAZoceY-F9_0Gd9qT-J28My41S7r5PXkSO3FvJ4lA",
      refreshToken: "1//04cj9Uyy8fMIkCgYIARAAGAQSNwF-L9IrFRW89mhGFeSJK_Uy55_P50YtD30bsE_2t_6l02AyDnZXzS86F7t4eEdTM2JaZaDQdY4",
    }
  })
  setInterval(() => {
    api.get(`searchForTime/${time}`).then((response) => {
      const data = response.data;
      data && data.map(async (obj) => {
        let mailOptions = {
          from: 'otavio.chadbraga@gmail.com',
          to: obj.email,
        };
        const response = await ebay.get(`buy/browse/v1/item_summary/search?q=${obj.search}&limit=3&sort=price`)
        const items = response.data.itemSummaries;
        mailOptions = {
          ...mailOptions,
          subject: `Preços dos itens: "${obj.search}"`,
          text: `
            Item 1 - ${items[0].title} ($${items[0].price.value})
            Item 2 - ${items[1].title} ($${items[1].price.value})
            Item 3 - ${items[2].title} ($${items[2].price.value})
          `,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      })
    })
  }, 60000 * time)
}