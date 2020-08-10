const db = require("../models");
const Accident = db.accident;
const Airline = db.airline;

/* Sort companies from top to worst */
exports.sortCompanyFromTopToWorst = async (res) => {

  try {
    let companies = await Airline.findAll({ where: { isBankcrupt: false }, order: [['ranking', 'ASC']] })
    res.json(companies)
  } catch (err) {
    console.log(err)
  }
}

/* Sort companies from worst to top */
exports.sortCompanyFromWorstToTop = async (res) => {

  try {
    let companies = await Airline.findAll({ where: { isBankcrupt: false }, order: [['ranking', 'DESC']] })
    res.json(companies)
  } catch (err) {
    console.log(err)
  }
}

/* Get all airlines */
exports.getAllAirlines = async (res) => {

  try {
    let companies = await Airline.findAll({ order: [['ranking', 'ASC']] })
    res.json(companies)
  } catch (err) {
    console.log(err)
  }
}

/* Get all removed airlines */
exports.getAllRemovedAirlines = async (res) => {

  try {
    let companies = await Airline.findAll({ where: { isBankcrupt: true }, order: [['ranking', 'ASC']] })
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
/* Create and Save new Airlines */
exports.createAirlines = async (res) => {
  try {
    await Airline.bulkCreate([
      { name: 'Aer Lingus	', address: '3447  Maple Lane', contact: 'tl0m6oab89s@temporary-mail.net', ranking: 0 },
      { name: 'Aeromexico', address: '3505  Hott Street', contact: 'qz57hueryc@temporary-mail.net', ranking: 0 },
      { name: 'Air France', address: '4502  Hinkle Deegan Lake Road', contact: 'evtp0p4ld5b@temporary-mail.net', ranking: 0 },
      { name: 'Air India', address: '3976  Oak Street', contact: '818m6qggl4y@temporary-mail.net', ranking: 0 },
      { name: 'Alitalia', address: '3954  Wakefield Street  ', contact: 'b1wu5fo8f2d@temporary-mail.net', ranking: 0 },
      { name: 'TAM', address: '370  Black Oak Hollow Road', contact: 'y058vl0but@temporary-mail.net', ranking: 0 },
      { name: 'Vietnam Airlines', address: '2118  Ashwood Drive', contact: 'ydhib63k0pg@temporary-mail.net', ranking: 0 },
    ])

    res.status(200).send({ success: true, msg: 'Airline created' });
  } catch (err) {
    console.log(err)
  }
}