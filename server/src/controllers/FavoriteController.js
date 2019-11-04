const Favorite = require("../models/Favorite");

module.exports = {
  async show(req, res) {
    const { email } = req.params;
    const alerts = await Favorite.find({ email: email });

    return res.json(alerts);
  },
  async delete(req, res) {
    const { id, email } = req.params;
    await Favorite.deleteOne({ _id: id })
    const alerts = await Favorite.find({ email: email });

    return res.json(alerts);
  },
  async store(req, res) {
    const { search, email, time } = req.body;

    await Favorite.create({
      search: search,
      email: email,
      time: time
    });

    const alerts = await Favorite.find({ email: email });


    return res.json(alerts);
  },
  async edit(req, res) {
    const { search, email, time } = req.body;
    const { id } = req.params;

    await Favorite.replaceOne({ _id: id }, {
      search: search,
      email: email,
      time: time
    });

    const alerts = await Favorite.find({ email: email });

    return res.json(alerts);
  },
  async emailList(req, res) {
    const { time } = req.params;

    const alerts = await Favorite.find({ time: time });

    return res.json(alerts);
  },
};
