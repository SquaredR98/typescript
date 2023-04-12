import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

// The following approach has a flow of maybe someone new
// finds that one of the following variable is unused so delete it.
//    const homeWin = 'H';
//    const awayWin = 'A';
//    const draw = 'D';

// Replace above by a new variable
//    const matchResult = {
//      HomeWin: 'H',
//      AwayWin: 'A',
//      Draw: 'D'
//    }
// But this has also has a flaw and we should use ENUM

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
