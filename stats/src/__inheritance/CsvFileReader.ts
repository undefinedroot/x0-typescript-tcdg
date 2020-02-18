// requires: >>npm i @types/node
import fs from 'fs';

// generic class, because we want to define the type of the class in the future
export abstract class CsvFileReader<T> {
  // only 1 dimensional array definition instead of MatchData[][]
  // because MatchData is an array itself
  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    // need to indicate 'encoding' so that readFileSync()
    // does not return a buffer value
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
