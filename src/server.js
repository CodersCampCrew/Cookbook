import { createServer, Model } from "miragejs";

const makeServer = () => {
  createServer({
    models: {
      dish: Model,
      comment: Model
    },

    seeds(server) {
      server.create("dish", {
        id: 1,
        img: "https://picsum.photos/100/100",
        title: "Schabowy",
        kcal: 500,
        time: 30,
        url: "schabowy",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.",
        shortDesc: "Great Polish dish"
      });
      server.create("dish", {
        id: 2,
        img: "https://picsum.photos/100/100",
        title: "Frytki",
        kcal: 500,
        time: 30,
        url: "frytki",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!",
        shortDesc: "Great Polish dish"
      });
      server.create("comment", {
        id: 1,
        text: "Very tasty Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, iure possimus quam qui, ratione earum aut hic repudiandae soluta dolorum debitis dolore quis fuga non dolores quibusdam quaerat expedita eaque?",
        author: "Marcin"
      });
      server.create("comment", {
        id: 2,
        text: "Very tasty Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, iure possimus quam qui, ratione earum aut hic repudiandae soluta dolorum debitis dolore quis fuga non dolores quibusdam quaerat expedita eaque?",
        author: "Przemek"
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/dishes", (schema) => {
        return { dishes: schema.dishes.all(), comments: schema.comments.all() };
      });
      this.get("dishes/:url", (schema, request) => {
        const { url } = request.params;
        console.log(url);
        return schema.dishes.find(url);
      });
    }
  });
};

export default makeServer;
