/* Calculate Risk */
exports.calculation = (ranking, condition, res) => {

    try {
        let weather = { 'rainy': 3, 'cloudy': 2, 'snowy': 1, 'sunny': -1, 'other': 0 };
        let index = (1024 / ranking) - (30 * weather[condition]);

        res.json({ success: true, risk_index: index.toFixed(2) });
    } catch (err) {
        console.log(err)
    }
}