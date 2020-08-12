"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var count = 1;
            var curr = this.head;
            while (curr.next) {
                count++;
                curr = curr.next;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (i) {
        if (!this.head)
            throw new Error('index doesn\'t exist');
        var counter = 0;
        var curr = this.head;
        while (curr) {
            if (counter === i) {
                return curr;
            }
            counter++;
            curr = curr.next;
        }
        throw new Error('index out of bounds');
    };
    LinkedList.prototype.compare = function (left, right) {
        if (!this.head)
            throw new Error('list is empty');
        return this.at(left).value > this.at(right).value;
    };
    LinkedList.prototype.swap = function (left, right) {
        var _a;
        var leftNode = this.at(left);
        var rightNode = this.at(right);
        _a = [rightNode.value, leftNode.value], leftNode.value = _a[0], rightNode.value = _a[1];
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
