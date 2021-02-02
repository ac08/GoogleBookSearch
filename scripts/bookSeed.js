const mongoose = require("mongoose");
const db = require("../models");

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
});

const bookSeed = [
  {
    title: "Leonardo da Vinci",
    subtitle:
      "The author of the acclaimed bestsellers Steve Jobs, Einstein, and Benjamin Franklin brings Leonardo da Vinci to life in this exciting new biography.",
    authors: "Walter Isaacson",
    link:
      "https://www.google.com/books/edition/Leonardo_Da_Vinci/vkA5DwAAQBAJ?hl=en&gbpv=0",
    description:
      "Based on thousands of pages from Leonardo’s astonishing notebooks and new discoveries about his life and work, Walter Isaacson weaves a narrative that connects his art to his science. He shows how Leonardo’s genius was based ...",
    date: new Date(Date.now()),
  },
  {
    title: "Brooklyn",
    author: "Colm Tóibín",
    description:
      "Hauntingly beautiful and heartbreaking, Brooklyn, is set in Brooklyn and Ireland in the early 1950s, when one young woman crosses the ocean to make a new life for herself.",
    date: new Date(Date.now()),
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    description:
      "Red Rising. Red Rising is a 2014 science fiction dystopian novel by American author Pierce Brown, and the first book and eponym of a series. The novel, set on a future planet Mars, follows lowborn miner Darrow as he infiltrates the ranks of the elite Golds.",
    date: new Date(Date.now()),
  },
  {
    title: "Man\ns Search for Meaning",
    author: "Viktor Frankel",
    description:
      "a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II, and describing his psychotherapeutic method, which involved identifying a purpose in life to feel positive about, and then immersively imagining that outcome.",
    date: new Date(Date.now()),
  },
  {
    title: "Farenheit 451",
    author: "Ray Bradbury",
    description:
      'Fahrenheit 451 is a dystopian novel by American writer Ray Bradbury, first published in 1953. Often regarded as one of his best works, the novel presents a future American society where books are outlawed and "firemen" burn any that are found.',
    date: new Date(Date.now()),
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
