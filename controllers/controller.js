const model = require('../models/mongoose');

//CREATE
exports.create = function (req, res){
    let Created = new model({
        ImageURL: req.body.ImageURL,
        Title: req.body.Title,
        Content: req.body.Content,
        Heading: req.body.Heading
    })
    Created.save()
    .then(() => {
    res.json(Created)
    console.log(Created)
    })
    .catch(err => { console.log(err)})
};

//READ
exports.read = function (req, res) {
    const id = req.params.id;
    model.findById(id, (err, result) => {
        if (err) { console.log(err)}
        else {res.json(result)}
    })
};

//UPDATE
exports.update = function (req, res) {
    const id = req.params.id;
    model.findByIdAndUpdate(id,{$set: req.body}, (err, result)=> {
        if (err) { console.log(err)}
        else {res.json("Updated Successfully!")}
    })
}

//DELEE
exports.deleted = function (req, res) {
    model.findByIdAndRemove(req.params.id, function (result) {
        if (result) return next(err);
        res.send('Deleted successfully!');
    })
};
