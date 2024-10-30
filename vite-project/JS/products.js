const coffeeShopMenu = {
    coffees: {
        espresso: {
            price: 2.50,
            description: "Rich and bold espresso shot.",
            category: "coffee"
        },
        americano: {
            price: 3.00,
            description: "Espresso with hot water for a smooth flavor.",
            category: "coffee"
        },
        latte: {
            price: 4.00,
            description: "Espresso with steamed milk and a touch of foam.",
            category: "coffee"
        },
        cappuccino: {
            price: 4.50,
            description: "Espresso with equal parts steamed milk and foam.",
            category: "coffee"
        },
        mocha: {
            price: 4.75,
            description: "Espresso with steamed milk and chocolate syrup.",
            category: "coffee"
        },
        coldBrew: {
            price: 3.50,
            description: "Smooth and refreshing cold-brewed coffee.",
            category: "coffee"
        }
    },
    teas: {
        chaiLatte: {
            price: 4.00,
            description: "Spiced chai tea with steamed milk.",
            category: "tea"
        },
        greenTea: {
            price: 2.50,
            description: "Freshly brewed green tea with a delicate flavor.",
            category: "tea"
        },
        herbalTea: {
            price: 2.50,
            description: "Caffeine-free herbal blend for relaxation.",
            category: "tea"
        },
        icedTea: {
            price: 3.00,
            description: "Refreshing iced tea with lemon.",
            category: "tea"
        }
    },
    savoryFood: {
        sandwich: {
            price: 5.00,
            description: "Gourmet sandwich with your choice of fillings.",
            category: "savory food"
        },
        salad: {
            price: 6.00,
            description: "Fresh mixed greens with seasonal vegetables.",
            category: "savory food"
        },
        quiche: {
            price: 4.50,
            description: "Savory pie filled with eggs, cheese, and vegetables.",
            category: "savory food"
        },
        avocadoToast: {
            price: 4.00,
            description: "Smashed avocado on toasted bread with seasonings.",
            category: "savory food"
        }
    },
    sweetFood: {
        pastry: {
            price: 2.50,
            description: "Freshly baked pastry of the day.",
            category: "sweet food"
        },
        muffin: {
            price: 2.75,
            description: "Freshly baked muffin, available in various flavors.",
            category: "sweet food"
        },
        brownie: {
            price: 3.00,
            description: "Rich chocolate brownie, gooey and delicious.",
            category: "sweet food"
        },
        cookie: {
            price: 1.50,
            description: "Freshly baked cookie, soft and chewy.",
            category: "sweet food"
        }
    }
};

// Example of how to access an item
console.log(coffeeShopMenu.coffees.latte);
