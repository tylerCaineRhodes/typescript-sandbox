"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (i, j) {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (i, j) {
        var _a;
        var characters = this.data.split('');
        _a = [characters[j], characters[i]], characters[i] = _a[0], characters[j] = _a[1];
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
