const urlModel = require("../Models/urlModel");
const shortId = require("shortid");
const { ObjectId } = require("mongodb");

async function newUrl(req, res) {
  try {
    const url = req.body.redirectUrl;
    const shortid = shortId.generate();
    let result = await urlModel.create({
      redirectUrl: url,
      shortUrl: shortid,
      visitHistory: [],
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function go(req, res) {
  try {
    let time = new Date(Date.now());

    const url = await urlModel.findOneAndUpdate(
      { shortUrl: req.params.stortUrl },
      {
        $push: { visitHistory: { timestamps: time } },
      }
    );
    if (url) {
      res.redirect(url.redirectUrl);
    } else {
      res.status(404).json({ error: "somthing went wrong!" });
    }
  } catch (error) {
    res.status(409).send(error);
  }
}

async function getAllUrl(req, res) {
  try {
    let url = await urlModel.find();
    return res.status(200).send({ msg: "success", status: 200, result: url });
  } catch (err) {
    return res.status(409).json(err);
  }
}

async function getUrlById(req, res) {
  try {
    let id = req.params.id;

    let url = await urlModel.find({ _id: id });
    return res.status(200).send({ msg: "success", status: 200, result: url });
  } catch (err) {
    return res.status(409).json(err);
  }
}
async function deleteUrlById(req, res) {
  try {
    let url = await urlModel.findByIdAndDelete({
      _id: new ObjectId(req.params.id),
    });
    return res.status(200).send({ msg: "success", result: url });
  } catch (err) {
    return res.status(400).json(err);
  }
}
async function visitHistory(req, res) {
  try {
    const url = await urlModel.findOne({ shortUrl: req.params.shortId });
    if (url) {
      res
        .status(200)
        .send({ url: url.redirectUrl, totalviews: url.visitHistory.length });
    } else {
      res.status(404).json({ error: "somthing went wrong!" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
module.exports = {
  newUrl,
  go,
  getAllUrl,
  getUrlById,
  deleteUrlById,
  visitHistory,
};
