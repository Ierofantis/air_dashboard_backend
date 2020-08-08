const db = require("../models");
const Bankcrupt = db.bankcrupt;

/* Create Bankcruptcy For Certain Airlines and "REMOVE" them */
exports.createBankcruptcy = async (res) => {
    try {

        let findAirlineByCount = await Bankcrupt.count({ where: { airlineId: 1 } });

        if (findAirlineByCount !== 0) {
            let findAirlineById = await Bankcrupt.findOne({ where: { airlineId: 1 } });
            let isBankcrupt = await findAirlineById.dataValues.bankcrupts === false ? true : false;

            await Bankcrupt.update({
                bankcrupts: isBankcrupt,
                airlineId: 1,
            }, { where: { id: 1 } })

            res.status(200).send({ success: true, msg: 'Bankcruptcy updated' });
        } else {
            await Bankcrupt.create({
                bankcrupts: true,
                airlineId: 1,
            })

            res.status(200).send({ success: true, msg: 'Bankcruptcy created' });
        }
    } catch (err) {
        console.log(err)
    }
}
