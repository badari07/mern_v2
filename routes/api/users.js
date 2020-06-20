const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @route    POST api/users
// @desc     Create or update user

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
    const userField = {
      FirstName,
      LastName,
      UserName,
    };
    try {
      let sameUserName = await User.findOne({ UserName });
      if (sameUserName) {
        return res
          .status(400)
          .json({ errors: [{ msg: "UserName already exists" }] });
      }

      let user = await User.findOneAndUpdate(
        { UserName },
        { $set: userField },
        { new: true, upsert: true }
      );

      return res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);
router.delete("/:id", async (req, res) => {
  try {
    // Remove user
    await User.findByIdAndRemove(req.params.id);

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile
// @desc     Get all profiles

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("user", [
      "FirstName",
      "LastName",
      "UserName",
    ]);
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route    GET api/users/:id
// @desc     Get current users profile

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("user", [
      "FirstName",
      "LastName",
      "UserName",
    ]);
    // const user = req.param._id;
    console.log(user);
    if (!user) {
      res.status(400).json({ msg: "There is no User" });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
