// newsController.js
const News = require('../models/News');

const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createNews = async (req, res) => {
  const news = new News(req.body);
  try {
    const newArticle = await news.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getNews,
  createNews,
};
