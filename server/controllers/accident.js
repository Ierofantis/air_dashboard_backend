const db = require("../models");
const Accident = db.accident;

/* Sort show all the accidents */
exports.getAllTheAccidents = async (res) => {

    try {
        let companies = await Accident.findAll({ order: [['createdAt', 'DESC']] })
        res.json(companies)
    } catch (err) {
        console.log(err)
    }
}