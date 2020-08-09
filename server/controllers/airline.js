const db = require("../models");
const Accident = db.accident;
const Airline = db.airline;

/* Sort companies from top to worst */
exports.sortCompanyFromTopToWorst = async (res) => {

  try {
    let companies = await Airline.findAll({ order: [['ranking', 'ASC']] })
    res.json(companies)
  } catch (err) {
    console.log(err)
  }
}

/* Sort companies from worst to top */
exports.sortCompanyFromWorstToTop = async (res) => {

  try {
    let companies = await Airline.findAll({ order: [['ranking', 'DESC']] })
    res.json(companies)
  } catch (err) {
    console.log(err)
  }
}

/* Create Accidents For Certain Airlines */
exports.createAccidentForCertainAirline = async (accident, id, res) => {

  try {
    let reasons = { 'other': 1, 'people': 5, 'machine': 10, 'systems': 20 };

    await Accident.create({
      accidents: accident,
      airlineId: id
    })
    let findAirlineById = await Airline.findOne({ where: { id: id } });
    let airlineRanking = await findAirlineById.dataValues.ranking;
    let updatedRanking = await airlineRanking + reasons[accident];

    await Airline.update({
      ranking: updatedRanking
    }, { where: { id: id } })

    res.status(200).send({ success: true, msg: 'Accident created' });
  } catch (err) {
    console.log(err)
  }
}

