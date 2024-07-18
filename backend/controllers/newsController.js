// newsController.js
const News = require('../models/News');

// Fetches all news articles
exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json({ success: true, data: news });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching news' });
  }
};

// Fetches a single news article by ID
exports.getNewsById = async (req, res) => {
  try {
    const newsArticle = await News.findById(req.params.id);
    if (!newsArticle) {
      return res.status(404).json({ success: false, message: 'News article not found' });
    }
    res.json({ success: true, data: newsArticle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching news article' });
  }
};

// Creates a new news article
exports.createNews = async (req, res) => {
  try {
    const newNewsArticle = new News(req.body);
    await newNewsArticle.save();
    res.status(201).json({ success: true, data: newNewsArticle });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Error creating news article' });
  }
};
