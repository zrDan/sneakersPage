const Sneaker = require("../model/sneakerModel");

exports.create = (req, res) => {
  const sneakerPar = new Sneaker(req.body);
  sneakerPar.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: `Error ${err}`,
      });
    }
    res.json({ data });
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Sneaker.find()
    .sort([[sortBy, order]])
    .exec((err, sneakers) => {
      if (err) {
        return res.status(400).json({ error: `Error ${err}` });
      }
      res.json(sneakers);
    });
};

exports.sneakerById = (req, res, next, id) => {
  Sneaker.findById(id).exec((err, sneakerPar) => {
    if (err || !sneakerPar) {
      return res.status(404).json({
        error: "Sneaker Par was not found",
      });
    }
    req.sneakerPar = sneakerPar;
    next();
  });
};

exports.sneakerDetails = (req, res) => {
  const id = req.sneakerPar._id;
  Sneaker.findById(id).exec((err, sneakers) => {
    if (err) {
      return res.status(400).json({ error: `Error ${err}` });
    }
    data = [];
    data.push(sneakers);
    res.json(data);
  });
};
