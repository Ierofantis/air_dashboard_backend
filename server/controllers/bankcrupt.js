const db = require("../models");
const Airline = db.airline;

/* Create Bankcruptcy For Certain Airlines and "REMOVE" them */
exports.createBankcruptcy = async (id, status, res) => {
    try {

        await Airline.update({
            isBankcrupt: status,
        }, { where: { id: id } })

        res.status(200).send({ success: true, msg: 'Bankcruptcy created' });

    } catch (err) {
        console.log(err)
    }
}