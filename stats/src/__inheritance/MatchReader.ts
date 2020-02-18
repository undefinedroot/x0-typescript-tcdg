import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';

// Tupple
type MatchData = [Date, string, string, number, number, MatchResult, string];

// we don't need to create a constructor,
// this child class will use the parent's constructor
// we pass a generic type which is a Tupple called 'MatchData'
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // Type Assertion
      row[6]
    ];
  }
}
