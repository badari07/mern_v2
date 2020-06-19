const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// const gravatar = require("gravatar");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const config = require("config");
// const normalize = require("normalize-url");

const User = require("../../models/User");

// @route    POST api/users
// @desc     Adding  user
// @access   Public

router.post(
  "/",
  [
    check("FirstName", "firstName is Required").not().isEmpty(),
    check("LastName", "LastName is Required").not().isEmpty(),
    check("UserName", "Username is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { FirstName, LastName, UserName } = req.body;

    try {
      let user = await User.findOne({ UserName });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "UserName already exists" }] });
      }

      user = new User({
        FirstName,
        LastName,
        UserName,
      });

      await user.save();
      res.send("User Added");
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);
router.delete("/", async (req, res) => {
  try {
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
