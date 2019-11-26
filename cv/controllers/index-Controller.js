function getIndex(req, res) {
    res.render('index', {title: 'CV'})
}

module.exports = {
    getIndex
};