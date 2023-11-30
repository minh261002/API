const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Lấy tất cả user
router.get('/users', UserController.getAllUsers);
// Lấy user theo id
router.get('/users/:id', UserController.getUserById);
// Đăng ký user
router.post('/register', UserController.createUser);
// Đăng nhập
router.post('/login', UserController.login);
// Cập nhật user
router.put('/update/:id', UserController.updateUser);
// Xóa user
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router;
