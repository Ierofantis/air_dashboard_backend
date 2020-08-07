const db = require("../models");
const Accident = db.accident;
const Airline = db.airline;

/* Sort companies from top to worst */
exports.sortCompanyFromTopToWorst = async (res) => {

  try {
    let companies = await Airline.findAll({ order: [['ranking', 'ASC']] })
    res.status(200).send({ success: true, data: companies });
  } catch (err) {
    console.log(err)
  }
}

/* Sort companies from worst to top */
exports.sortCompanyFromWorstToTop = async (res) => {

  try {
    let companies = await Airline.findAll({ order: [['ranking', 'DESC']] })
    res.status(200).send({ success: true, data: companies });
  } catch (err) {
    console.log(err)
  }
}

/* Create Accidents For Certain Airlines */
exports.createAccidentForCertainAirline = async (res) => {

  try {
    await Accident.create({
      accidents: 1,
      airlineId: 1,
    })

    let findAirlineById = await Airline.findOne({ where: { id: 1 } });
    let airlineRanking = await findAirlineById.dataValues.ranking;
    let updatedRanking = await airlineRanking + 1;

    await Airline.update({
      ranking: updatedRanking
    }, { where: { id: 1 } })

    res.status(200).send({ success: true, msg: 'Accident created' });
  } catch (err) {
    console.log(err)
  }
}

