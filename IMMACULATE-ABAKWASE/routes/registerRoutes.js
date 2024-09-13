const express = require("express");
const router = express.Router();
const Register = require("../models/register");

router.get("/sign", (req, res) => {
    res.render("register");
});

router.post("/sign", (req, res) => {
    const newsignup = new Register(req.body);
    newsignup.save()
        .then(() => res.redirect("/login")) // Redirect to a login page or success page
        .catch(err => {
            console.error(`Error saving user: ${err}`);
            res.redirect("/sign"); // Redirect back to sign-up page on error
        });
});

module.exports = router;
