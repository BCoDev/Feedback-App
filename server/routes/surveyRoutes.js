const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys', requireLogin, (req, res) => {
        const { title, subject, body } = req.body
      res.send('POST request to the homepage')

      const survey = new Survey({
          title, 
          subject, 
          body
      })
    })
}