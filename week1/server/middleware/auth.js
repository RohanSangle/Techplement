// import jwt from "jsonwebtoken";

// const auth = async (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).send('Access denied');
//   try {
//     const decoded = jwt.verify(token, 'secret');
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(400).send('Invalid token');
//   }
// };

// export default auth;

import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;