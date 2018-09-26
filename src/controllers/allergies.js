const model = require('../models/allergies')

async function getAllAllergies(req, res, next) {
	const data = await model.getAllAllergies()
	res.status(200).json({
		data,
	})
}

// async function getAllergy(req, res, next) {
//   try {
//     const data = await model.getAllergy(req.params.allergyId)
//     res.status(200).json({
//       data 
//     })
//   } catch (err) {
//     next({
//       status: 404,
//       message: err.message,
//     })
//   }
// }

module.exports = {
	getAllAllergies,
}
