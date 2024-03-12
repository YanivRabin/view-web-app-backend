"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_controller_1 = __importDefault(require("../controller/auth_controller"));
const auth_middleware_1 = __importDefault(require("../common/auth_middleware"));
router.post('/register', auth_controller_1.default.register);
router.post('/login', auth_controller_1.default.login);
router.post('/googleLogin', auth_controller_1.default.findOrCreateGoogleUser);
router.put('/changeProfilePicture', auth_middleware_1.default, auth_controller_1.default.changeProfilePicture);
router.put('/changeName', auth_middleware_1.default, auth_controller_1.default.changeName);
router.get('/logout', auth_controller_1.default.logout);
router.get('/refreshToken', auth_controller_1.default.refreshToken);
router.get('/userInfo', auth_middleware_1.default, auth_controller_1.default.userInfo);
router.get('/getAllUsers', auth_middleware_1.default, auth_controller_1.default.allUsers);
module.exports = router;
//# sourceMappingURL=auth_route.js.map