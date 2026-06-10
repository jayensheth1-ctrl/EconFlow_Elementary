export const units = [
  {
    id: "unit-1",
    title: "Money Basics & Choices",
    description: "Learn what money is and how we use it",
    color: "from-emerald-400 to-emerald-600",
    lessons: [
      {
        id: "1-1",
        title: "What is Money?",
        studyBrief: "Long ago, people didn't use paper bills or metal coins. Instead, they traded useful or beautiful items like shells, beads, or even salt! Today, we use official coins and dollar bills to buy the things we need and want. Money is a tool that everyone agrees to use because it makes trading easy. When you do a chore and earn a dollar, that bill holds value because you can take it to a store and swap it for a toy or a snack.",
        questions: [
          {
            type: "multiple_choice",
            question: "What do people use money for today?",
            options: [
              "To buy things they need and want",
              "To give allowances to their kids",
              "To invest in the stock market",
              "To pay taxes to the US Government"
            ],
            correct: 0,
            explanation: "Money is a helpful tool that we use to buy goods and services every day."
          },
          {
            type: "true_false",
            question: "Long ago, people sometimes used items like shells or salt as money.",
            correct: true,
            explanation: "True! Before paper bills were invented, people traded useful or pretty objects."
          },
          {
            type: "multiple_choice",
            question: "If you wash your family's car and earn $5, what are you doing?",
            options: ["Earning money", "Paying taxes", "Borrowing money", "Losing money"],
            correct: 0,
            explanation: "When you do work and get paid for it, you are earning money."
          },
          {
            type: "word_bank",
            question: "Today we use paper ___ and metal ___ to buy things at the store.",
            blanks: ["bills", "coins"],
            options: ["bills", "coins", "shells", "leaves", "toys"],
            explanation: "Our modern currency is made up of printed paper bills and stamped metal coins."
          },
         {
            type: "true_false",
            question: "Money only works if everyone agrees that it has value.",
            correct: true,
            explanation: "Exactly! Money works because shopkeepers and shoppers all agree to trust its value."
          }
        ]
      },
      {
        id: "1-2",
        title: "Needs vs. Wants",
        studyBrief: "Every day we make choices about money. A 'need' is something you absolutely must have to live a safe and healthy life, like water, healthy food, a warm coat, and a place to live. A 'want' is something that is nice to have, but you can live perfectly fine without it, like video games, candy, or a skateboard. Because money is limited, it is always smart to pay for your needs before you spend money on your wants.",
        questions: [
          {
            type: "multiple_choice",
            question: "Which of the following is a basic human need?",
            options: [
              "Clean drinking water",
              "A new video game console",
              "An electronic device",
              "Luxury clothing"
            ],
            correct: 0,
            explanation: "Water is necessary for your body to stay alive and healthy, making it a true need."
          },
          {
            type: "multiple_choice",
            question: "Which item is considered a personal want?",
            options: ["A toy racecar", "A stable lifestyle", "A safe home", "Healthy dinner"],
            correct: 0,
            explanation: "A toy is fun to play with, but you can live safely and happily without it."
          },
          {
            type: "true_false",
            question: "It is a smart idea to buy your wants before paying for your needs.",
            correct: false,
            explanation: "False! Always take care of your important needs first so you stay safe and healthy."
          },
          {
            type: "word_bank",
            question: "A jacket is a ___ in the freezing winter, but a new comic book is a ___.",
            blanks: ["need", "want"],
            options: ["need", "want", "gift", "chore", "tax"],
            explanation: "Staying warm keeps you healthy (need), while entertainment is just for fun (want)."
          },
          {
            type: "true_false",
            question: "If you run out of money buying toys, you might not have enough for food.",
            correct: true,
            explanation: "True! Since money is limited, spending it on wants can leave you short on needs."
          }
        ]
      },
      
  
    ]
  },
  {
    id: "unit-2",
    title: "Saving & Smart Spending",
    description: "Discover how to grow your money",
    color: "from-blue-400 to-blue-600",
    lessons: [
      {
        id: "2-1",
        title: "The Piggy Bank Secret",
        studyBrief: "Saving means keeping your money in a safe place instead of spending it right away. When you put coins into a piggy bank or a savings account at a bank, your money waits for you. If you save a little bit of money every single week, your pile grows bigger and bigger. This is called a savings habit. Saving helps you buy bigger things in the future that cost more than you have right now.",
        questions: [
          {
            type: "multiple_choice",
            question: "What does it mean to save money?",
            options: [
              "Keeping your money to use later",
              "Spending all your coins today",
              "Borrowing money from others",
              "Not paying your taxes"
            ],
            correct: 0,
            explanation: "Saving means pausing and protecting your money so you can use it in the future."
          },
          {
            type: "true_false",
            question: "If you save a small amount of money regularly, your savings will grow over time.",
            correct: true,
            explanation: "Yes! Small amounts add up over time to create a big pile of savings."
          },
          {
            type: "word_bank",
            question: "Instead of spending money today, you can ___ it for the ___.",
            blanks: ["save", "future"],
            options: ["save", "future", "lose", "yesterday", "use"],
            explanation: "Saving means looking ahead and preparing your money for future goals."
          },
          {
            type: "multiple_choice",
            question: "Why would someone want to save their money?",
            options: [
              "To buy a bigger item later, like a bicycle",
              "Because they hate toys",
              "To ignore their basic needs",
              "Because banks require you to store all cash"
            ],
            correct: 0,
            explanation: "Saving allows you to purchase expensive things that require multiple weeks of allowance."
          },
          {
            type: "true_false",
            question: "A piggy bank is one place you can use to start a saving habit.",
            correct: true,
            explanation: "True! A piggy bank or a small jar is a great place to start watching your money grow."
          }
        ]
      },
      {
        id: "2-2",
        title: "The Three Jars Rule",
        studyBrief: "A great way to manage your allowance or chore money is to use three different jars labeled: Spend, Save, and Give. The 'Spend' jar is for small things you want right now, like a piece of gum. The 'Save' jar is for bigger goals, like a box of building blocks. The 'Give' jar is for helping others, like buying food for an animal shelter or helping a friend. This keeps your money organized and balanced!",
        questions: [
          {
            type: "multiple_choice",
            question: "What are the three jars used for in this budgeting rule?",
            options: [
              "Spend, Save, and Give",
              "Need, Want, and Tax",
              "Buy, Hide, and Lose",
              "Coins, Bills, and Buttons"
            ],
            correct: 0,
            explanation: "Dividing money into Spend, Save, and Give helps you balance your financial choices."
          },
          {
            type: "true_false",
            question: "The 'Give' jar is meant to buy things only for yourself.",
            correct: false,
            explanation: "False! The Give jar is dedicated to helping other people, animals, or your community."
          },
          {
            type: "multiple_choice",
            question: "If you want to buy a bicycle next year, which jar should get the most money?",
            options: ["The Save jar", "The Spend jar", "The Give jar", "The Want jar"],
            correct: 0,
            explanation: "Big items that take a long time to afford belong in your long-term Save jar."
          },
          {
            type: "word_bank",
            question: "The ___ jar is for small treats today, while the ___ jar is for helping your community.",
            blanks: ["Spend", "Give"],
            options: ["Spend", "Give", "Save", "Hide", "Need"],
            explanation: "Spending handles immediate desires, while giving focuses on kindness to others."
          },
          {
            type: "true_false",
            question: "Separating your money into jars helps you make smart financial choices.",
            correct: true,
            explanation: "True! Visually dividing your money prevents you from accidentally spending it all at once."
          }
        ]
      }
    ]
  },
  {
    id: "unit-3",
    title: "Jobs & The Community",
    description: "See how people work together",
    color: "from-purple-400 to-purple-600",
    lessons: [
      {
        id: "3-1",
        title: "Goods and Services",
        studyBrief: "People in a community earn money by creating 'goods' or providing 'services.' Goods are real physical objects you can touch and hold, like a book, a loaf of bread, an apple, or a pair of shoes. Services are helpful actions that people perform for you, like a barber cutting your hair, a doctor checking your health, or a bus driver taking you to school. Both goods and services make our lives easier and better.",
        questions: [
          {
            type: "multiple_choice",
            question: "Which of the following is an example of a physical good?",
            options: [
              "A shiny new bicycle",
              "A piano lesson",
              "A haircut at a salon",
              "A dog-walking service"
            ],
            correct: 0,
            explanation: "A bicycle is a real physical object that you can touch, making it a good."
          },
          {
            type: "true_false",
            question: "A teacher helping you learn in school is providing a service.",
            correct: true,
            explanation: "True! Teaching is an activity or action performed to help you, which is a service."
          },
          {
            type: "word_bank",
            question: "An ice cream cone is a ___ you eat, but fixing a broken car is a ___.",
            blanks: ["good", "service"],
            options: ["good", "service", "money", "chore", "tax"],
            explanation: "Objects you can hold are goods, while helpful actions or skills are services."
          },
          {
            type: "multiple_choice",
            question: "What is a service?",
            options: [
              "An action or job someone does to help you",
              "A chore you are forced to do",
              "A physical object like a toy box",
              "A type of tax you pay"
            ],
            correct: 0,
            explanation: "Services are tasks performed by individuals utilizing their time and skills to help others."
          },
          {
            type: "true_false",
            question: "Shoes, pencils, and pizzas are all examples of services.",
            correct: false,
            explanation: "False! These are all physical items you can touch, which means they are goods."
          }
        ]
      },
      {
        id: "3-2",
        title: "Earning a Living",
        studyBrief: "An income is the money a person receives in exchange for doing a job. Adults choose different careers—like being a chef, an engineer, a firefighter, or an artist—to earn an income. This income is then used to pay for their family's food, clothing, and housing. Incomplete chores at home can sometimes mimic this; completing your tasks responsibly might earn you a small allowance, which introduces how real-world jobs work.",
        questions: [
          {
            type: "multiple_choice",
            question: "What is an income?",
            options: [
              "The money you receive for doing a job",
              "A list of things you want to buy",
              "The specfic cost of something you want to buy",
              "A tax that is applied to your salary"
            ],
            correct: 0,
            explanation: "Income is the money flowing into your pocket as a reward for your labor or job."
          },
          {
            type: "true_false",
            question: "Adults use their job income to pay for things like rent and groceries.",
            correct: true,
            explanation: "True! Job income covers both essential living expenses and fun extra items."
          },
          {
            type: "word_bank",
            question: "People work a ___ to earn an ___ that supports their families.",
            blanks: ["job", "income"],
            options: ["job", "income", "tax", "allowance", "expense"],
            explanation: "Working a regular job provides the steady income required to buy household goods."
          },
          {
            type: "multiple_choice",
            question: "Which of these is a way an elementary school student might earn a small income?",
            options: [
              "Doing extra chores around the house",
              "Becoming an Uber driver",
              "Trading in the cryptocurrency market",
              "Working the nightly shift at a local factory"
            ],
            correct: 0,
            explanation: "Helping out at home with extra chores is a classic way for kids to earn allowance money."
          },
          {
            type: "true_false",
            question: "Every single job pays the exact same amount of money.",
            correct: false,
            explanation: "False! Different jobs have different pay rates depending on the tasks and training involved."
          }
        ]
      }
    ]
  },
  {
    id: "unit-4",
    title: "The Marketplace",
    description: "Explore how stores and trading work",
    color: "from-amber-400 to-amber-600",
    lessons: [
      {
        id: "4-1",
        title: "Buyers and Sellers",
        studyBrief: "A market is any place where people gather to buy and sell things. A 'buyer' is a customer who gives money to get a good or a service. A 'seller' is a shopkeeper or worker who provides the item and takes the money. For example, at a farmers' market, you are the buyer looking for fresh strawberries, and the farmer is the seller. Both people leave the market happy because they exchanged things they valued!",
        questions: [
          {
            type: "multiple_choice",
            question: "Who is a buyer at a store?",
            options: [
              "The customer who pays money for an item",
              "The person who works the cash register",
              "The worker who manages finances",
              "The workers who deliver inventory"
            ],
            correct: 0,
            explanation: "The buyer is the consumer spending money to acquire an object or service."
          },
          {
            type: "true_false",
            question: "A seller's job is to give away store items completely for free.",
            correct: false,
            explanation: "False! Sellers trade their goods or services in exchange for money."
          },
          {
            type: "word_bank",
            question: "The ___ gives money to the ___ to get a new item or service.",
            blanks: ["buyer", "seller"],
            options: ["buyer", "seller", "manager", "banker", "company"],
            explanation: "A transaction requires a buyer spending currency and a seller trading inventory."
          },
          {
            type: "multiple_choice",
            question: "Which place is an example of a marketplace?",
            options: [
              "A local grocery store",
              "A magazine that you read",
              "Netflix",
              "A school you go to"
            ],
            correct: 0,
            explanation: "A grocery store is a classic marketplace full of buyers and active sellers."
          },
          {
            type: "true_false",
            question: "When a trade is fair, both the buyer and the seller are happy.",
            correct: true,
            explanation: "True! Both sides get something they want: the buyer gets a product, the seller gets money."
          }
        ]
      },
      {
        id: "4-2",
        title: "Prices & Scarcity",
        studyBrief: "Have you ever wondered why some things cost more than others? A 'price' is the amount of money you must pay to buy something. If an item is rare or hard to make, it has 'scarcity,' which means there isn't enough of it for everyone. When a toy becomes super popular but the store only has three left, the price often goes up. If the store has thousands of copies of that same toy, the price usually drops because it is easy to get.",
        questions: [
          {
            type: "multiple_choice",
            question: "What does it mean if a popular toy is scarce?",
            options: [
              "There are not enough copies for everyone who wants one",
              "The toy is dangerous for children to use",
              "The toy is too expensive for people to buy",
              "There are too many toys with not enough people buying them"
            ],
            correct: 0,
            explanation: "Scarcity means an item is rare or limited, so it is harder to find and buy."
          },
          {
            type: "true_false",
            question: "When an item is very easy to find everywhere, its price usually goes up.",
            correct: false,
            explanation: "False! When items are abundant and easy to find, prices generally stay lower."
          },
          {
            type: "word_bank",
            question: "A ___ tells you how much ___ you need to buy a specific toy.",
            blanks: ["price", "money"],
            options: ["price", "money", "tag", "time", "coupon"],
            explanation: "The price tag indicates the amount of financial currency needed to complete a buy."
          },
          {
            type: "multiple_choice",
            question: "Why might a rare, beautiful diamond cost more than a common smooth pebble?",
            options: [
              "Because diamonds are scarce and hard to find",
              "Because pebbles look much better in jewelry",
              "Because pebbles are formed deep in the earth, whereas diamonds are easier to find",
              "Because pebbles are used to operate machinery, but diamonds are useless"
            ],
            correct: 0,
            explanation: "Rare items that are highly desired have high value and high prices due to scarcity."
          },
          {
            type: "true_false",
            question: "Scarcity forces people to make choices about what they want to buy.",
            correct: true,
            explanation: "True! Since we cannot have everything we want, we have to choose carefully."
          }
        ]
      }
    ]
  }
];

export function getAllLessons() {
  const lessons = [];
  units.forEach(unit => {
    unit.lessons.forEach(lesson => {
      lessons.push({ ...lesson, unitId: unit.id, unitTitle: unit.title, unitColor: unit.color });
    });
  });
  return lessons;
}

export function getLessonById(id) {
  for (const unit of units) {
    const lesson = unit.lessons.find(l => l.id === id);
    if (lesson) return { ...lesson, unitId: unit.id, unitTitle: unit.title, unitColor: unit.color };
  }
  return null;
}

export function getNextLessonId(completedLessons) {
  const allLessons = getAllLessons();
  for (const lesson of allLessons) {
    if (!completedLessons?.includes(lesson.id)) return lesson.id;
  }
  return null;
}