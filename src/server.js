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
              id: "d1",
              img: "https://images.pexels.com/photos/6003058/pexels-photo-6003058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=12600",
              title: "Scrambled eggs",
              kcal: 148,
              url: "scrambled_eggs",
              time: 10,
              desc: "Crack two eggs into a microwave safe bowl or jug, add 15ml (1 tbsp) of milk and a pinch of salt and black pepper. Beat the mixture lightly with a whisk or fork. Microwave on high for a final 20 seconds, run the fork around the edge of the bowl and remove to serve.",
              shortDesc: "Basic breakfast for fresh start",
              dishType: "Breakfast",
              tags: ["gog", "goo"]
            },
            {
              id: "d2",
              img: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              title: "schabowy",
              kcal: 462,
              url: "ramen",
              time: 70,
              desc: "While the caramelized soy chicken is cooking in the oven, make the ramen base.Place two saucepans on the stove. As an optional step, you can chop the garlic and ginger. Or you can add them whole or sliced and strain the ramen stock to remove the large pieces of garlic and ginger later. In one saucepan (Pot 1), place the stock, ginger, garlic, spring onions, chili (if using), soy sauce and mirin. Stir and cover the pot. Let it come to a boil at medium high – high heat. Then lower the heat to medium and let it simmer for 25 minutes. Taste the base and add more soy sauce if needed. While Pot 1 is simmering, add water to the second pot (Pot 2), and bring it to a boil. Add the dried noodles to the boiling water, and cook according to package directions. I prefer cooking the noodles for ONE MINUTE LESS than what’s recommended on the package, as the noodles will continue to cook for a bit longer when served with hot broth. The straight ramen noodles I use here take 3 minutes to cook. Drain the noodles and divide into 4 bowls and set aside. When the ramen base in Pot 1 has cooked for about 20 – 25 minutes, strain to remove the garlic, ginger, chili and spring onions (or only the spring onions and chili). Add the strained stock back into the pot and add the mushrooms, and let it cook for a further 5 minutes until the mushrooms have softened. The ramen base is now ready. ",
              shortDesc: "Most famous Japanese dish",
              dishType: "Lunch",
              tags: ["non", "goo"]
            },
            {
              id: "d3",
              img: "https://images.pexels.com/photos/2161636/pexels-photo-2161636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              title: "Sandwiches",
              kcal: 225,
              time: 15,
              url: "snadwiches",
              desc: "Boil, cool and peel the eggs. Cut in half, remove the yolks and chop whites.Mash the egg yolks with the mayonnaise, mustard and salt and pepper to taste.Add the chopped egg whites and the green onion, celery, the chopped fresh dill. Blend carefully and serve cold on bread, a salad, or a wrap! For a fresh take, try making an avocado egg salad with mashed avocado! Super healthy take on an American classic!",
              shortDesc: "Great and quick meal",
              dishType: "Dinner",
              tags: ["src", "goo"]
            }
          ]
        },
        server.create("day", {
          day: 2,
          dishes: [
            {
              id: "d1",
              img: "https://images.pexels.com/photos/6129137/pexels-photo-6129137.jpeg?cs=srgb&dl=pexels-alesia-kozik-6129137.jpg&fm=jpg",
              title: "Breakfast rice",
              kcal: 234,
              url: "breakfast_rice",
              time: 12,
              desc: "In a medium saucepan over medium heat, bring chicken broth to a simmer. Reduce heat to low.In a large pot or Dutch oven, heat oil. Add onion and cook, stirring often, until translucent, about 5 minutes. Add 1 tablespoon butter, garlic, mushrooms, bay leaf and thyme. Cook until the mushrooms have softened and are golden, about 4 more minutes, then season with salt and pepper. Remove mixture from the pot.Melt remaining tablespoon butter in the pot and add the arborio rice, stirring quickly. Cook until the grains are well-coated and smell slightly toasty, about 2 minutes. Add the wine and cook until the wine has mostly absorbed.With a ladle, add about 1 cup hot broth. Stirring often, cook until the rice has mostly absorbed liquid. Add remaining broth about 1 cup at a time, continuing to allow the rice to absorb each addition of broth before adding more. Stir often and cook until the risotto is al dente and creamy, not mushy. (You might not need all the broth.)Add the mushroom mixture back into the rice.Stir in Parmesan and peas then garnish with parsley. Serve warm.",
              shortDesc: "For fresh start",
              dishType: "Breakfast",
              tags: ["gog", "yup"]
            },
            {
              id: "d2",
              img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              title: "Steak",
              kcal: 672,
              url: "steak",
              time: 45,
              desc: "Pat dry – use paper towels to pat the steaks dry to get a perfect sear and reduce oil splatter.Season generously – just before cooking steaks, sprinkle both sides liberally with salt and pepper.Preheat the pan on medium and brush with oil. Using just 1/2 Tbsp oil reduces splatter.Sear steaks – add steaks and sear each side 3-4 minutes until a brown crust has formed then use tongs to turn steaks on their sides and sear edges (1 min per edge).Add butter and aromatics – melt in butter with quartered garlic cloves and rosemary sprigs. Tilt pan to spoon garlic butter over steaks and cook to your desired doneness (see chart below).Remove steak and rest 10 minutes before slicing against the grain.",
              shortDesc: "Best choice if you are hungry",
              dishType: "Lunch",
              tags: ["yum", "yup"]
            },
            {
              id: "d3",
              img: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              title: "Salad with tomatoes",
              kcal: 224,
              url: "Salad_with_tomatoes",
              time: 5,
              desc: "Make tomato salad dressing: In a mixing bowl whisk together olive oil, red wine vinegar, honey, parsley, basil, oregano and season with salt and pepper to taste.Toss tomatoes and mozzarella with dressing: In a medium salad bowl toss together tomatoes with dressing. Add mozzarella and toss.",
              shortDesc: "Best for light meal",
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
    }
  });
};

export default makeServer;
