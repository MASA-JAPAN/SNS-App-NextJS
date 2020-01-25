export default (req: any, res: any) => {
  console.log(req);
  req.sanitizeBody("name");
  req.sanitizeBody("email");
  req.sanitizeBody("password");

  // Name is non-null and is 4 to 10 characters
  req.checkBody("name", "Enter a name").notEmpty();
  req
    .checkBody("name", "Name must be between 4 and 10 characters")
    .isLength({ min: 4, max: 10 });

  // Email is non-null, valid, and normalized
  req
    .checkBody("email", "Enter a valid email")
    .isEmail()
    .normalizeEmail();

  // Password must be non-null, between 4 and 10 characters
  req.checkBody("password", "Enter a password").notEmpty();
  req
    .checkBody("password", "Password must be between 4 and 10 characters")
    .isLength({ min: 4, max: 10 });

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error: any) => error.msg)[0];
    return res.status(400).send(firstError);
  }
};

//   const signup = async (req:any, res:any) => {
//     const { name, email, password } = req.body;
//     const user = await new User({ name, email, password });
//     await User.register(user, password, (err, user) => {
//       if (err) {
//         return res.status(500).send(err.message);
//       }
//       res.json(user.name);
//     });
//   };
