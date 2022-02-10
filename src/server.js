import { createServer, Model } from "miragejs";

const makeServer = () => {
  createServer({
    models: {
      dish: Model,
      day: Model
    },

    seeds(server) {
      server.create("dish", {
        id: 1,
        img: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1095550.jpg&fm=jpg",
        title: "Toast with egg",
        kcal: 250,
        time: 30,
        url: "toastwithegg",
        desc: "Heat a drizzle of oil in a heavy-bottomed, small frying pan – a cast-iron one is perfect. Add the onion and cook for a few mins until soft, then push them to one side of the pan. Add the sausages and fry for 5-10 mins, rolling them around in the pan until golden brown. Add the tomatoes, sugar and harissa, season well and add a splash of water. Cook for 5-10 mins, stirring now and then, until the tomatoes have cooked down to a thick, chunky sauce.",
        shortDesc: "Healthy and deliciious breakfast",
        dishType: "Breakfast",
        comments: [
          {
            id: 1,
            text: "Super delicious, I made with normal chipolatas as I already had them and normal harissa as I like the spice. Love it!",
            author: "Marcin"
          },
          {
            id: 2,
            text: "This was absolutely divine! I would strongly encourage anyone considering making this to do so! Perhaps up the amount of tomatoes and sausages if cooking for 2 people but if individual then the perfect amount.",
            author: "Przemek"
          }
        ]
      });

      server.create("dish", {
        id: 2,
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-muffins-5cf2ffe.jpg?quality=90&webp=true&resize=300,272",
        title: "Easy egg muffins",
        kcal: 230,
        time: 45,
        url: "easyeggmuffins",
        desc: "Heat the oven to 200C/180C fan/gas 4. Brush half the oil in an 8-hole muffin tin. Heat the remaining oil in a frying pan and add the broccoli, pepper and spring onions. Fry for 5 mins. Set aside to cool.Whisk the eggs with the milk, smoked paprika and half the cheese in a bowl. Add the cooked veg. Pour the egg mixture into the muffin holes and top each with the remaining cheese and a few chives, if you like. Bake for 15-17 mins or until golden brown and cooked through.",
        shortDesc:
          "Make these mini egg muffins for an easy breakfast or lunch with the kids.",
        dishType: "Breakfast",
        comments: [
          {
            id: 1,
            text: "I didn't have a muffin tin, so I cooked it in a frying pan that was oven safe. I substituted broccoli for kale (as I didn't have broccoli) and I added mushrooms. I cooked it for a bit longer - about 30 mins and it came out all puffed up. It tasted very good.",
            author: "David"
          },
          {
            id: 2,
            text: "Hi, these will keep for 2 days in the fridge. They can also be frozen. We hope this helps. Best wishes, BBC Good Food Team.",
            author: "Lucy"
          }
        ]
      });

      server.create("dish", {
        id: 3,
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tropical-breakfast-bars-31ec8ab.jpg?quality=90&webp=true&resize=300,272",
        title: "Tropical breakfast bars",
        kcal: 230,
        time: 45,
        url: "Tropical breakfast bars",
        desc: "Heat the oven to 180C/160C fan/gas 4. Lightly oil and line a 20cm deep square tin with baking parchment.Mash the bananas in a bowl until smooth, then stir through the oil, egg and sugar. Fold through the muesli, most of the tropical mix and a pinch of salt. Spoon the mixture into the tin and sprinkle with the remaining tropical mix. Bake for 35-40 mins, leave to cool in the tin, then turn out on to a board and slice into 10 bars. Will keep in an airtight container for four days.",
        shortDesc: "Wrap up these tropical breakfast bars",
        dishType: "Breakfast",
        comments: [
          {
            id: 1,
            text: "These are scrummy. Approved by the kids, so a big thumbs up. Great for a snack or a treat in their packed lunch. I only used 40g of sugar and they are still plenty sweet enough with the bananas and the fruit. I used dried apricots and raisins instead of tropical mix.",
            author: "David"
          },
          {
            id: 2,
            text: "I love this recipe, I make it in an effort to have less processed sugary breakfasts on the go I make this every week, and it doesn't produce waste packaging because I use beeswax wraps. I don't grease the tin just line with greaseproof paper and I reduced the sugar to 50g.",
            author: "Lucy"
          }
        ]
      });

      server.create("dish", {
        id: 4,
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spinach-sweet-potato-and-lentil-dhal-be8fae5.jpg?quality=90&webp=true&resize=300,272",
        title: "Spinach, sweet potato & lentil",
        kcal: 250,
        time: 30,
        url: "Spinach, sweet potato & lentil",
        desc: "Heat a drizzle of oil in a heavy-bottomed, small frying pan – a cast-iron one is perfect. Add the onion and cook for a few mins until soft, then push them to one side of the pan. Add the sausages and fry for 5-10 mins, rolling them around in the pan until golden brown. Add the tomatoes, sugar and harissa, season well and add a splash of water. Cook for 5-10 mins, stirring now and then, until the tomatoes have cooked down to a thick, chunky sauce.",
        shortDesc: "Vegan one-pot recipe",
        dishType: "Dinner",
        comments: [
          {
            id: 1,
            text: "Absolutely delicious. Read the comments posted by others and so upped the liquid content by about 200ml. Used a mix of coconut milk and stock. Cut the sweet potato into 1 cm dice. Will definitely be doing this again.",
            author: "Marcin"
          },
          {
            id: 2,
            text: "This was absolutely divine! I would strongly encourage anyone considering making this to do so! Perhaps up the amount of tomatoes and sausages if cooking for 2 people but if individual then the perfect amount.",
            author: "Przemek"
          }
        ]
      });

      server.create("dish", {
        id: 5,
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-muffins-5cf2ffe.jpg?quality=90&webp=true&resize=300,272",
        title: "Healthy lasagne",
        kcal: 230,
        time: 45,
        url: "Healthy lasagne",
        desc: "Heat the oven to 200C/180C fan/gas 4. Brush half the oil in an 8-hole muffin tin. Heat the remaining oil in a frying pan and add the broccoli, pepper and spring onions. Fry for 5 mins. Set aside to cool.Whisk the eggs with the milk, smoked paprika and half the cheese in a bowl. Add the cooked veg. Pour the egg mixture into the muffin holes and top each with the remaining cheese and a few chives, if you like. Bake for 15-17 mins or until golden brown and cooked through.",
        shortDesc: "Enjoy our lighter version of lasagne",
        dishType: "Dinner",
        comments: [
          {
            id: 1,
            text: "Was going ok until the “canful of water” turned it into a watery mess to be honest. Maybe half a can would have been acceptable.",
            author: "David"
          },
          {
            id: 2,
            text: "Hi, these will keep for 2 days in the fridge. They can also be frozen. We hope this helps. Best wishes, BBC Good Food Team.",
            author: "Lucy"
          }
        ]
      });

      server.create("dish", {
        id: 6,
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-chicken-thighs-with-brown-rice-salsa-verde-6d23d73.jpg?quality=90&webp=true&resize=300,272",
        title: "Roast chicken",
        kcal: 230,
        time: 45,
        url: "Roast chicken",
        desc: "Heat the oven to 180C/160C fan/gas 4. Lightly oil and line a 20cm deep square tin with baking parchment.Mash the bananas in a bowl until smooth, then stir through the oil, egg and sugar. Fold through the muesli, most of the tropical mix and a pinch of salt. Spoon the mixture into the tin and sprinkle with the remaining tropical mix. Bake for 35-40 mins, leave to cool in the tin, then turn out on to a board and slice into 10 bars. Will keep in an airtight container for four days.",
        shortDesc: "Healthy, low-calorie roast chicken",
        dishType: "Dinner",
        comments: [
          {
            id: 1,
            text: "These are scrummy. Approved by the kids, so a big thumbs up. Great for a snack or a treat in their packed lunch. I only used 40g of sugar and they are still plenty sweet enough with the bananas and the fruit. I used dried apricots and raisins instead of tropical mix.",
            author: "David"
          },
          {
            id: 2,
            text: "I love this recipe, I make it in an effort to have less processed sugary breakfasts on the go I make this every week, and it doesn't produce waste packaging because I use beeswax wraps. I don't grease the tin just line with greaseproof paper and I reduced the sugar to 50g.",
            author: "Lucy"
          }
        ]
      });

      server.create(
        "day",
        {
          day: 1,
          dishes: [
            {
              id: 1,
              img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tropical-breakfast-bars-31ec8ab.jpg?quality=90&webp=true&resize=300,272",
              title: "Tropical breakfast bars",
              kcal: 230,
              time: 45,
              url: "Tropical breakfast bars",
              desc: "Heat the oven to 180C/160C fan/gas 4. Lightly oil and line a 20cm deep square tin with baking parchment.Mash the bananas in a bowl until smooth, then stir through the oil, egg and sugar. Fold through the muesli, most of the tropical mix and a pinch of salt. Spoon the mixture into the tin and sprinkle with the remaining tropical mix. Bake for 35-40 mins, leave to cool in the tin, then turn out on to a board and slice into 10 bars. Will keep in an airtight container for four days.",
              shortDesc: "Wrap up these tropical breakfast bars",
              dishType: "Breakfast",
              tags: ["gog", "goo"]
            },
            {
              id: 2,
              img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-chicken-thighs-with-brown-rice-salsa-verde-6d23d73.jpg?quality=90&webp=true&resize=300,272",
              title: "Roast chicken",
              kcal: 230,
              time: 45,
              url: "Roast chicken",
              desc: "Heat the oven to 180C/160C fan/gas 4. Lightly oil and line a 20cm deep square tin with baking parchment.Mash the bananas in a bowl until smooth, then stir through the oil, egg and sugar. Fold through the muesli, most of the tropical mix and a pinch of salt. Spoon the mixture into the tin and sprinkle with the remaining tropical mix. Bake for 35-40 mins, leave to cool in the tin, then turn out on to a board and slice into 10 bars. Will keep in an airtight container for four days.",
              shortDesc: "Healthy, low-calorie roast chicken",
              dishType: "Lunch",
              tags: ["non", "goo"]
            },
            {
              id: 3,
              img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-muffins-5cf2ffe.jpg?quality=90&webp=true&resize=300,272",
              title: "Healthy lasagne",
              kcal: 230,
              time: 45,
              url: "Healthy lasagne",
              desc: "Heat the oven to 200C/180C fan/gas 4. Brush half the oil in an 8-hole muffin tin. Heat the remaining oil in a frying pan and add the broccoli, pepper and spring onions. Fry for 5 mins. Set aside to cool.Whisk the eggs with the milk, smoked paprika and half the cheese in a bowl. Add the cooked veg. Pour the egg mixture into the muffin holes and top each with the remaining cheese and a few chives, if you like. Bake for 15-17 mins or until golden brown and cooked through.",
              shortDesc: "Enjoy our lighter version of lasagne",
              dishType: "Dinner",
              tags: ["src", "goo"]
            }
          ]
        },

        server.create("day", {
          day: 2,
          dishes: [
            {
              id: 1,
              img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-muffins-5cf2ffe.jpg?quality=90&webp=true&resize=300,272",
              title: "Easy egg muffins",
              kcal: 230,
              time: 45,
              url: "easyeggmuffins",
              desc: "Heat the oven to 200C/180C fan/gas 4. Brush half the oil in an 8-hole muffin tin. Heat the remaining oil in a frying pan and add the broccoli, pepper and spring onions. Fry for 5 mins. Set aside to cool.Whisk the eggs with the milk, smoked paprika and half the cheese in a bowl. Add the cooked veg. Pour the egg mixture into the muffin holes and top each with the remaining cheese and a few chives, if you like. Bake for 15-17 mins or until golden brown and cooked through.",
              shortDesc:
                "Make these mini egg muffins for an easy breakfast or lunch with the kids.",
              dishType: "Breakfast",
              tags: ["gog", "yup"]
            },
            {
              id: 2,
              img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-chicken-thighs-with-brown-rice-salsa-verde-6d23d73.jpg?quality=90&webp=true&resize=300,272",
              title: "Roast chicken",
              kcal: 230,
              time: 45,
              url: "Roast chicken",
              desc: "Heat the oven to 180C/160C fan/gas 4. Lightly oil and line a 20cm deep square tin with baking parchment.Mash the bananas in a bowl until smooth, then stir through the oil, egg and sugar. Fold through the muesli, most of the tropical mix and a pinch of salt. Spoon the mixture into the tin and sprinkle with the remaining tropical mix. Bake for 35-40 mins, leave to cool in the tin, then turn out on to a board and slice into 10 bars. Will keep in an airtight container for four days.",
              shortDesc: "Healthy, low-calorie roast chicken",
              dishType: "Lunch",
              tags: ["yum", "yup"]
            },
            {
              id: 4,
              img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spinach-sweet-potato-and-lentil-dhal-be8fae5.jpg?quality=90&webp=true&resize=300,272",
              title: "Spinach, sweet potato & lentil",
              kcal: 250,
              time: 30,
              url: "Spinach, sweet potato & lentil",
              desc: "Heat a drizzle of oil in a heavy-bottomed, small frying pan – a cast-iron one is perfect. Add the onion and cook for a few mins until soft, then push them to one side of the pan. Add the sausages and fry for 5-10 mins, rolling them around in the pan until golden brown. Add the tomatoes, sugar and harissa, season well and add a splash of water. Cook for 5-10 mins, stirring now and then, until the tomatoes have cooked down to a thick, chunky sauce.",
              shortDesc: "Vegan one-pot recipe",
              dishType: "Dinner",
              tags: ["yum", "sup"]
            }
          ]
        })
      );
    },

    routes() {
      this.namespace = "api";

      this.get("/dishes", (schema) => {
        return schema.dishes.all();
      });

      this.get("dishes/:url", (schema, request) => {
        const { url } = request.params;
        return schema.dishes.findBy({ url });
      });

      this.get("/days", (schema) => {
        return schema.days.all();
      });

      this.post("/dishes", (schema, request) => {
        const attrs = request.requestBody;
        return schema.dishes.create(attrs);
      });
    }
  });
};

export default makeServer;
