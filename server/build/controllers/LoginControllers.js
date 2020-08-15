"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @controller('/')
var LoginController = /** @class */ (function () {
    function LoginController() {
        // @get('/login')
        this.getLogin = function (req, res) {
            res.send("\n      <form method=\"POST\">\n        <div>\n          <label>Email</label>\n          <input name=\"email\" />\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" />\n        </div>\n        <button>Submit</button>\n      </form>\n    ");
        };
    }
    return LoginController;
}());
