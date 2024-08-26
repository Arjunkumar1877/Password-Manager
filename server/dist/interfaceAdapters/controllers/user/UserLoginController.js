"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginController = void 0;
class UserLoginController {
    constructor(iuserloginusecase) {
        this.iuserloginusecase = iuserloginusecase;
    }
    async LoginControl(req, res) {
        try {
            const data = await this.iuserloginusecase.UserLogin(req.body.email, req.body.password);
            console.log("login controller 📀📀🤷‍♂️🤷‍♂️🤷‍♂️❤️");
            if (data !== "Invalid credentials" && data !== 'error') {
                const userData = {
                    _id: data?._id,
                    username: data?.username,
                    email: data?.email,
                };
                res.json(userData);
            }
            else {
                let data = false;
                res.json(data); // Send error message in response
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.UserLoginController = UserLoginController;
