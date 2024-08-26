"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignupController = void 0;
class UserSignupController {
    constructor(iusersignupUseCase) {
        this.iusersignupUseCase = iusersignupUseCase;
    }
    async SignupUserControl(req, res) {
        try {
            const data = await this.iusersignupUseCase.SignupUser(req.body);
            if (data) {
                const userData = {
                    _id: data._id,
                    username: data.username,
                    email: data.email,
                };
                res.status(200).json(userData);
            }
            else {
                res.json(data);
            }
        }
        catch (error) {
            console.error("Error during user signup:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
exports.UserSignupController = UserSignupController;
