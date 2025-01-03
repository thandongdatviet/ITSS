// models/Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Tag = require('./Tag');
const User = require('./User');

const Post = sequelize.define('Posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fileUrl: {
    type: DataTypes.STRING,  // Lưu đường dẫn file
    allowNull: true
  },
  formUrl: {
    type: DataTypes.STRING,  // Lưu đường dẫn form 
    allowNull: true
  },
  commentsCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

// Quan hệ nhiều-nhiều giữa Post và Tag
  // Mỗi bài viết thuộc về một người dùng


module.exports = Post;
