function getIndex(req, res) {
    res.render('index', {title: 'CV'})
}

function getTest(req, res) {
    res.render('about-cv')
}

module.exports = {
    getIndex,
    getTest
};