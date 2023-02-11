const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "options") {
    next();
  }
  try {
    //Получаем токет из заголовка
    const tokenFromHeaders = req.headers.authorization;
    if (!tokenFromHeaders) {
      res.status(400);
      throw new Error("No TOKEN provided");
    }
    //Проверяем, что это токен ИМЕННО Авторизации Bearer
    if (!tokenFromHeaders.startsWith("Bearer")) {
      res.status(400);
      throw new Error("Not athorization TOKEN");
    }

    // Расшифровываем токен
    const authToken = tokenFromHeaders.split(" ")[1];
    const decoded = jwt.verify(authToken, "pizza");
    console.log(decoded);
    // Даем возможность Всем роутам пользоваться этим Токеном
    const id = decoded.data;
    req.user = id;
    next();
  } catch (error) {
    res.status(401).json({
      code: 401,
      status: "Not authorizen",
    });
  }
};
