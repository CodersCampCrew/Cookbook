import { createServer, Model } from "miragejs";

const makeServer = () => {
  createServer({
    models: {
      dish: Model,
      comment: Model,
      day: Model
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
      server.create("day",{
        day: 1,
    dishes: [
      {
        id: "d1",
        img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
        title: "scrambled eggs",
        kcal: "500",
        url: "scrambled_eggs",
        time: 5,
        desc: "simple, tasty, day starter, to wake you up",
        dishType: "Breakfast"
      },
      {
        id: "d2",
        img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
        title: "schabowy",
        kcal: "500",
        url: "schabowy",
        time: 5,
        desc: "great Polish dish",
        dishType: "Lunch"
      },
      {
        id: "d3",
        img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
        title: "Ramen",
        kcal: "500",
        time: 5,
        url: "ramen",
        desc: "great Japanese dish",
        dishType: "Dinner"
      }
    ]
  },
  {
    day: 2,
    dishes: [
      {
        id: "d1",
        img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
        title: "Ramen",
        kcal: "500",
        url:"ramen",
        time: 5,
        desc: "simple, tasty, day starter, to wake you up",
        dishType: "Breakfast"
      },
      {
        id: "d2",
        img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
        title: "Jajko na twardo",
        kcal: "500",
        url:"jajko_na_twardo",
        time: 5,
        desc: "great Polish dish",
        dishType: "Lunch"
      },
      {
        id: "d3",
        img: "https://i.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM",
        title: "Kurczak",
        kcal: "500",
        url:"kurczak",
        time: 5,
        desc: "great Japanese dish",
        dishType: "Dinner"
      }
    ]
      })
    },

    routes() {
      this.namespace = "api";

      this.get("/dishes", (schema) => {
        return { dishes: schema.dishes.all(), comments: schema.comments.all() };
      });
      this.get("dishes/:url", (schema, request) => {
        const { url } = request.params;
        return schema.dishes.findBy({url});
      });
      this.get("/days", (schema) => {
        return schema.dishes.all()
      })
    }
  });
};

export default makeServer;
