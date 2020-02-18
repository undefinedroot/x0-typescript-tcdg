// requires: >>npm i @types/node
import fs from 'fs';

// make this class standalone,
// not related to any class
export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}

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
      });
  }
}
