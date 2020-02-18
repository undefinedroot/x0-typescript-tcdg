import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);

// No need to create a new object if we just use static methods
const matchReader = MatchReader.fromCsv('football.csv');

// Transform data
matchReader.load();

// Instantiate classes
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

// Execute related methods from previously instantiated classes
summary.buildAndPrintReport(matchReader.matches);

// Let us use a different reporter class, but using static a method
// it is a good shortcut to use without needing to code alot.
const summary2 = Summary.winsAnalysisWithHtmlReport('Man United');

summary2.buildAndPrintReport(matchReader.matches);
