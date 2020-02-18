"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// import { HtmlReport } from './reportTargets/HtmlReport';
// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// No need to create a new object if we just use static methods
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
// Transform data
matchReader.load();
// Instantiate classes
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
// Execute related methods from previously instantiated classes
summary.buildAndPrintReport(matchReader.matches);
// Let us use a different reporter class, but using static a method
// it is a good shortcut to use without needing to code alot.
var summary2 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);
