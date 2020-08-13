"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    //[28, 10, 2018]
    var dateParts = dateString.split('/')
        .map(function (value) {
        return parseInt(value);
    });
    var _a = __spreadArrays(dateParts), day = _a[0], month = _a[1], year = _a[2];
    return new Date(year, month - 1, day);
};
