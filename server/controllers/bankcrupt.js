const db = require("../models");
const Bankcrupt = db.bankcrupts;

/* Create Bankcruptcy For Certain Airlines and "REMOVE" them */
exports.createBankcruptcy = async (id, status, res) => {
    try {

        let findAirlineByCount = await Bankcrupt.count({ where: { airlineId: id } });

        if (findAirlineByCount !== 0) {
            let isBankcrupt = await status;

            await Bankcrupt.update({
                bankcrupts: isBankcrupt,
                airlineId: id,
            }, { where: { id: id } })

            res.status(200).send({ success: true, msg: 'Bankcruptcy updated' });
        } else {
            await Bankcrupt.create({
                bankcrupts: true,
                airlineId: id,
            })

            res.status(200).send({ success: true, msg: 'Bankcruptcy created' });
        }
    } catch (err) {
        console.log(err)
    }
}
