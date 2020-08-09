const db = require("../models");
const Accident = db.accident;
const Bankcrupt = db.bankcrupts;

/* Sort show all the accidents */
exports.getAllTheAccidents = async (res) => {

    try {
        let companies = await Accident.findAll({ order: [['createdAt', 'DESC']] })
        res.json(companies)
    } catch (err) {
        console.log(err)
    }
}

/* Sort show all the bankcrupts */
exports.getAllTheBankcrupts = async (res) => {

    try {
        let bankcruptCompanies = await Bankcrupt.findAll({ order: [['createdAt', 'DESC']] })
        res.json(bankcruptCompanies)
    } catch (err) {
        console.log(err)
    }
}