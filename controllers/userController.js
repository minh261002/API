const userModel = require('../Models/userModels');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const UserController = {
  getAllUsers: (req, res) => {
    userModel.getAll((err, results) => {
      if (err) {
        console.error('Error getting users:', err);
        return res.status(500).json({ error: 'Failed to get users' });
      }
      return res.status(200).json(results);
    });
  },
  
    getUserById: (req, res) => {
        const { id } = req.params;
        userModel.getById(id, (err, result) => {
        if (err) {
            console.error('Error getting user:', err);
            return res.status(500).json({ error: 'Failed to get user' });
        }
        if (!result) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(result);
        });
    },

    createUser: (req, res) => {
        const newUser = req.body; 
      
        if (!newUser || !newUser.username || !newUser.password || !newUser.email) {
          return res.status(400).json({ error: 'Invalid data' });
        }
      
        userModel.create(newUser, (err, result) => {
          if (err) {
            console.error('Error creating user:', err);
            return res.status(500).json({ error: 'Lỗi' });
          }
          return res.status(201).json({ message: 'Đăng Ký Thành Công' });
        });
    },

    updateUser: (req, res) => {
        const { id } = req.params;
        const updatedUser = req.body;
      
        if (!updatedUser || !updatedUser.username || !updatedUser.password || !updatedUser.email) {
          return res.status(400).json({ error: 'Invalid data' });
        }
      
        userModel.update(id, updatedUser, (err, result) => {
          if (err) {
            console.error('Error updating user:', err);
            return res.status(500).json({ error: 'Failed to update user' });
          }
          return res.status(200).json({ message: 'Update user successfully' });
        });
    },

    deleteUser: (req, res) => {
        const { id } = req.params;
        userModel.delete(id, (err, result) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ error: 'Failed to delete user' });
        }
        return res.status(200).json({ message: 'Delete user successfully' });
        });
    },

    login: (req, res) => {
        const { username, password } = req.body;
      
        if (!username || !password) {
          return res.status(400).json({ error: 'Không Có Dữ Liệu' });
        }
      
        userModel.getByUsername(username, (err, user) => {
          if (err) {
            console.error('Error getting user:', err);
            return res.status(500).json({ error: 'Tài Khoản Không Tồn Tại' });
          }
          if (!user) {
            return res.status(404).json({ error: 'Không Tìm Thấy Tài Khoản Này' });
          }
          if (user.password !== password) {
            return res.status(401).json({ error: 'Sai Mật Khẩu' });
          }
          return res.status(200).json({ message: 'Đăng Nhập Thành Công' });
        });
    }

};

module.exports = UserController;
