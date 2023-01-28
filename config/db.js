const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    console.log(
      `Database is connected on port: ${db.connection.port}, name: ${db.connection.name}, host: ${db.connection.host}`
        .bold.green.italic
    );
  } catch (error) {
    console.log(error.message.bold.red);
    process.exit(1);
  }
};

module.exports = connectDb;

// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
