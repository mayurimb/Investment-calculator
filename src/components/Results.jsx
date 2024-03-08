import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({input}) {
  const resultsData = calculateInvestmentResults(input) 
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
  return ( <table id = "result">
    <thead>
      <tr>
        <th> Year </th>
        <th> Investment value </th>
        <th> Interest(Year) </th>
        <th> Total interest </th>
        <th> Invested capital </th>
      </tr>
    </thead>
    <tbody>
      {resultsData.map((yeardata) =>
        { 
          const totalInterest = yeardata.valueEndOfYear - yeardata.annualInvestment* 
                  yeardata.year - initialInvestment
          const totalAmountInvested = yeardata.valueEndOfYear - totalInterest
          return (
            <tr key = {yeardata.year}>
              <td> {yeardata.year}</td>
              <td> {formatter.format(yeardata.valueEndOfYear)}</td>
              <td> {formatter. format(yeardata.interest)}</td>
              <td> {formatter.format(totalInterest)}</td>
              <td> {formatter.format(totalAmountInvested)}</td>
            </tr>
        )}
      )}
    </tbody>
  </table>
  )
}

