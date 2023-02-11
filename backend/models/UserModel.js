const { model, Schema } = require("mongoose");

const usersSchema = Schema({
  userName: {
    type: String,
    default: "Jhon Konor",
  },
  userEmail: {
    type: String,
    required: [true, "DB: Field Email is required"],
  },
  userPassword: {
    type: String,
    required: [true, "DB: Field Password is required"],
  },
  token: {
    type: String,
    default: null,
  },
});

module.exports = model("users", usersSchema);
