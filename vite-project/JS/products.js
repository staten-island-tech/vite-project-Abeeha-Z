const shopItems = [
  {
    name: "Espresso",
    price: 2.50,
    description: "Rich and bold espresso shot.",
    image:
      "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg", // Blank spot for image URL
    category: "coffee",
  },
  {
    name: "Americano",
    price: 3.0,
    description: "Espresso with hot water for a smooth flavor.",
    image:
      "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/wibjptxr/10d77b7d-188a-45bb-a601-bc26d178f337.jpeg", // Blank spot for image URL
    category: "coffee",
  },
  {
    name: "Latte",
    price: 4.00,
    description: "Espresso with steamed milk and a touch of foam.",
    image:
      "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg", // Blank spot for image URL
    category: "coffee",
  },
  {
    name: "Cappuccino",
    price: 4.50,
    description: "Espresso with equal parts steamed milk and foam.",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino", // Blank spot for image URL
    category: "coffee",
  },
  {
    name: "Mocha",
    price: 4.75,
    description: "Espresso with steamed milk and chocolate syrup.",
    image:
      "https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726", // Blank spot for image URL
    category: "coffee",
  },
  {
    name: "Cold Brew",
    price: 3.50,
    description: "Smooth and refreshing cold-brewed coffee.",
    image:
      "https://daniliciousdishes.com/wp-content/uploads/2020/05/Homemade-Cold-Brew-Coffee-1-2.jpg", // Blank spot for image URL
    category: "coffee",
  },

  // Tea items
  {
    name: "Chai Latte",
    price: 4.00,
    description: "Spiced chai tea with steamed milk.",
    image: "https://bakingmischief.com/wp-content/uploads/2022/10/dirty-chai-latte-image-683x1024.jpg", // Blank spot for image URL
    category: "teas",
  },
  {
    name: "Matcha",
    price: 2.50,
    description: "Flavorful matcha latte with an earthy flavor.",
    image: "https://coffeecopycat.com/wp-content/uploads/2023/04/IcedMatchaLatte-1200-x-1200.jpg", // Blank spot for image URL
    category: "teas",
  },
  {
    name: "Herbal Tea",
    price: 2.5,
    description: "Caffeine-free herbal blend for relaxation.",
    image: "https://www.100percentpure.com/cdn/shop/articles/HP-hot_herbal_tea_5f1af437-ae9d-4d20-b381-d60bd0d90061_1200x1200.jpg?v=1610662944", // Blank spot for image URL
    category: "teas",
  },
  {
    name: "Iced Tea",
    price: 3.0,
    description: "Refreshing iced tea with lemon.",
    image: "https://images.themodernproper.com/billowy-turkey/production/posts/IcedTea_8.jpg?w=1200&q=82&auto=format&fit=crop&dm=1716306653&s=106dea35c7406e03f4ec643638104115", // Blank spot for image URL
    category: "teas",
  },

  // Sweet food items
  {
    name: "Pastry",
    price: 2.5,
    description: "Freshly baked pastry of the day.",
    image: "https://afess.ng/wp-content/uploads/2024/08/15-Essential-Industrial-Kitchen-Equipment-for-Making-Pastries.webp", // Blank spot for image URL
    category: "sweetfood",
  },
  {
    name: "Muffin",
    price: 2.75,
    description: "Freshly baked muffin, available in various flavors.",
    image: "https://meaningfuleats.com/wp-content/uploads/2022/06/gluten-free-blueberry-muffins-1.jpg", // Blank spot for image URL
    category: "sweetfood",
  },
  {
    name: "Brownie",
    price: 3.0,
    description: "Rich chocolate brownie, gooey and delicious.",
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/05/brownies-22.jpg", // Blank spot for image URL
    category: "sweetfood",
  },
  {
    name: "Cookie",
    price: 1.5,
    description: "Freshly baked cookie, soft and chewy.",
    image: "https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/1:1/w_2700,h_2700,c_limit/chocolate-chip-cookie.jpg", // Blank spot for image URL
    category: "sweetfood",
  },

  // Savory food items
  {
    name: "Sandwich",
    price: 5.0,
    description: "Gourmet sandwich with your choice of fillings.",
    image: "https://www.foodandwine.com/thmb/tM060YA0Fd0UALCmPQ-5gGWyBqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Club-Sandwich-FT-RECIPE0523-99327c9c87214026b9419b949ee13a9c.jpg", // Blank spot for image URL
    category: "savoryfood",
  },
  {
    name: "Salad",
    price: 6.0,
    description: "Fresh mixed greens with seasonal vegetables.",
    image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg", // Blank spot for image URL
    category: "savoryfood",
  },
  {
    name: "Quiche",
    price: 4.5,
    description: "Savory pie filled with eggs, cheese, and vegetables.",
    image: "https://www.ifyougiveablondeakitchen.com/wp-content/uploads/2023/03/easy-muffin-tin-quiche.jpg", // Blank spot for image URL
    category: "savoryfood",
  },
  {
    name: "Avocado Toast",
    price: 4.0,
    description: "Smashed avocado on toasted bread with egg and seasonings.",
    image: "https://runlifteatrepeat.com/wp-content/uploads/2020/06/avocado-egg-toast-10.jpg", // Blank spot for image URL
    category: "savoryfood",
  },
];

export { shopItems };
