import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { ConsoleReport } from "./ReportTargets/ConsoleReport";
import { HtmlReport } from "./ReportTargets/HtmlReport";
import { Summary } from "./Summary";

const csvReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
const summaryHtml = new Summary(new WinsAnalysis('Man United'), new HtmlReport())

summary.buildAndPrintReport(matchReader.matches);
summaryHtml.buildAndPrintReport(matchReader.matches);
