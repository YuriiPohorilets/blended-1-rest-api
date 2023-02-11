const express = require("express");
const path = require("path");
const connectDb = require("../config/db");
require("colors");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const UserModel = require("./models/UserModel");

// load config variables
const configPath = path.join(__dirname, "..", "config", ".env");
const dotenv = require("dotenv").config({
  path: configPath,
});

// console.log(dotenv);
console.log(process.env.PORT);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// http://localhost:62000/api/v1/books
// set Routes

app.use("/api/v1", require("./routes/booksRoutes"));

//Регистрация - Добавляем пользователя в БД
// Аутентификация - это проверка данных, которые ввел Пользователь с тем, что хранится в БД. Обычно это логин и пароль.
// Аутороизация - это проверка прав Пользователя выпольнять какие-либо действия на сайте.
// Разлогирование - выход из системы. Т.Е. Система уже не знает что это за пользователь.
app.post(
  "/register",
  asyncHandler(async (req, res) => {
    //Получение данных от Пользователя
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
      res.status(400);
      throw new Error("Plese provide all required fields");
    }
    //Сделать поиск в БД на наличие Пользователя.
    const candidate = await UserModel.findOne({ userEmail });
    // Если есть - Пользователь существует - иди и залогинься
    if (candidate) {
      res.status(409);
      throw new Error("User already exists. Please logIn");
    }
    // Если нет - то шифруем пароль
    const hashPassword = bcrypt.hashSync(userPassword, 5, function (err) {
      // Store hash in your password DB.
      res.status(400);
      throw new Error(err);
    });
    // Сохраняем Пользователя
    const user = await UserModel.create({
      ...req.body,
      userPassword: hashPassword,
    });
    if (!user) {
      res.status(400);
      throw new Error("Can not create User. Try again");
    }
    res.status(201).json({
      code: 201,
      status: "Success",
      data: user,
    });
  })
);

app.post("/login", (req, res) => {});

// Для Ауторизации мне нужна миддлвара
app.get("/logout", (req, res) => {});

const errorHandler = require("./middlewares/errorHandler");

app.use(errorHandler);
connectDb();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT}`.bold.green.italic
  );
});
