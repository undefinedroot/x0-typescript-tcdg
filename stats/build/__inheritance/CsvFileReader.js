"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// requires: >>npm i @types/node
var fs_1 = __importDefault(require("fs"));
// generic class, because we want to define the type of the class in the future
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        // only 1 dimensional array definition instead of MatchData[][]
        // because MatchData is an array itself
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        // need to indicate 'encoding' so that readFileSync()
        // does not return a buffer value
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
