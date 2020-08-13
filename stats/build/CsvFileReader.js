"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        var _this = this;
        this.filename = filename;
        this.data = [];
        this.read = function () {
            _this.data = fs_1.default.readFileSync(_this.filename, {
                encoding: 'utf-8'
            })
                .split('\n')
                .map(function (row) {
                return row.split(',');
            });
        };
    }
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
