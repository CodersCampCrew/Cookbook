import { createServer } from "miragejs";

const makeServer = () => {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/dishes", () => {
        return {
          dishes: [
            {
              id: 1,
              img: "https://picsum.photos/100/100",
              title: "Schabowy",
              kcal: 500,
              time: 30,
              desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, hic.",
              shortDesc: 'Great Polish dish' 
            },
            {
              id: 2,
              img: "https://picsum.photos/100/100",
              title: "Schabowy",
              kcal: 500,
              time: 30,
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio iusto maiores inventore sed velit!", 
              shortDesc: 'Great Polish dish'
            }
          ],

          comments: [
            {
              id: 1,
              text: "Very tasty Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, iure possimus quam qui, ratione earum aut hic repudiandae soluta dolorum debitis dolore quis fuga non dolores quibusdam quaerat expedita eaque?",
              author: "Marcin"
            },
            {
              id: 2,
              text: "Very tasty Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, iure possimus quam qui, ratione earum aut hic repudiandae soluta dolorum debitis dolore quis fuga non dolores quibusdam quaerat expedita eaque?",
              author: "Przemek"
            }
          ]
        };
      });
    }
  });
};

export default makeServer;
