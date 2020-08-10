const db = require("../models");
const Airline = db.airline;

/* Show all the accidents from each airline */
exports.getAllTheAccidents = async (res) => {

    try {
        let companies = await Airline.findAll({ include: ["accidents"] })
        res.json(companies)
    } catch (err) {
        console.log(err)
    }
}