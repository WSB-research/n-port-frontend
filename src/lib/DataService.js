// const exampleData = [
//   {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
//   {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
//   {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
//   {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
//   {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
// ]

// const exampleData = {
//   companyInfo: {
//     tradeName: '1290 Funds',
//     longName: '1290 SmartBeta Equity Fund',
//     totalAssets: '32154782.7',
//     totalLiability: '61467.71',
//     netAssets: '32093314.99'
//   },
//   holdingInfo: [
//     {
//       type: 'EC',
//       fixedFloating: undefined,
//       issuer: 'Tokyo Gas Co. Ltd.',
//       name: 'Tokyo Gas Co. Ltd.',
//       typeOfIssuer: 'CORP',
//       issuerCountry: 'JP',
//       originalBalance: '2000.00000000',
//       totalValue: '43840.33000000',
//       ltv: '0.136602685056',
//       maturityData: undefined,
//       couponRate: undefined,
//       defaultStatus: undefined,
//       collateral: {
//         isCashCollateral: 'N',
//         isNonCashCollateral: 'N',
//         isLoanByFund: 'N'
//       }
//     },
//     {
//       type: 'EC',
//       fixedFloating: undefined,
//       issuer: 'Costco Wholesale Corp.',
//       name: 'Costco Wholesale Corp.',
//       typeOfIssuer: 'CORP',
//       issuerCountry: 'US',
//       originalBalance: '827.00000000',
//       totalValue: '252665.04000000',
//       ltv: '0.787282460782',
//       maturityData: undefined,
//       couponRate: undefined,
//       defaultStatus: undefined,
//       collateral: {
//         isCashCollateral: 'N',
//         isNonCashCollateral: 'N',
//         isLoanByFund: 'N'
//       }
//     },
//     {
//       type: 'EC',
//       fixedFloating: undefined,
//       issuer: 'Home Depot, Inc. (The)',
//       name: 'Home Depot, Inc. (The)',
//       typeOfIssuer: 'CORP',
//       issuerCountry: 'US',
//       originalBalance: '1300.00000000',
//       totalValue: '296530.00000000',
//       ltv: '0.923961890793',
//       maturityData: undefined,
//       couponRate: undefined,
//       defaultStatus: undefined,
//       collateral: {
//         isCashCollateral: 'N',
//         isNonCashCollateral: 'N',
//         isLoanByFund: 'N'
//       }
//     },
//     {
//       type: 'EC',
//       fixedFloating: undefined,
//       issuer: 'STERIS plc',
//       name: 'STERIS plc',
//       typeOfIssuer: 'CORP',
//       issuerCountry: 'IE',
//       originalBalance: '500.00000000',
//       totalValue: '75345.00000000',
//       ltv: '0.234768518065',
//       maturityData: undefined,
//       couponRate: undefined,
//       defaultStatus: undefined,
//       collateral: {
//         isCashCollateral: 'N',
//         isNonCashCollateral: 'N',
//         isLoanByFund: 'N'
//       }
//     },
//     {
//       type: 'EC',
//       fixedFloating: undefined,
//       issuer: 'AT&T, Inc.',
//       name: 'AT&T, Inc.',
//       typeOfIssuer: 'CORP',
//       issuerCountry: 'US',
//       originalBalance: '5937.00000000',
//       totalValue: '223349.94000000',
//       ltv: '0.695939138944',
//       maturityData: undefined,
//       couponRate: undefined,
//       defaultStatus: undefined,
//       collateral: {
//         isCashCollateral: 'N',
//         isNonCashCollateral: 'N',
//         isLoanByFund: 'N'
//       }
//     },
//     {
//       type: 'EC',
//       fixedFloating: undefined,
//       issuer: 'Koninklijke Philips NV',
//       name: 'Koninklijke Philips NV',
//       typeOfIssuer: 'CORP',
//       issuerCountry: 'NL',
//       originalBalance: '1365.00000000',
//       totalValue: '62483.62000000',
//       ltv: '0.194693567864',
//       maturityData: undefined,
//       couponRate: undefined,
//       defaultStatus: undefined,
//       collateral: {
//         isCashCollateral: 'N',
//         isNonCashCollateral: 'N',
//         isLoanByFund: 'N'
//       }
//     },
//     {
//       type: 'EC',
//       fixedFloating: undefined,
//       issuer: 'Verisk Analytics, Inc.',
//       name: 'Verisk Analytics, Inc.',
//       typeOfIssuer: 'CORP',
//       issuerCountry: 'US',
//       originalBalance: '600.00000000',
//       totalValue: '97482.00000000',
//       ltv: '0.303745499741',
//       maturityData: undefined,
//       couponRate: undefined,
//       defaultStatus: undefined,
//       collateral: {
//         isCashCollateral: 'N',
//         isNonCashCollateral: 'N',
//         isLoanByFund: 'N'
//       }
//     }
//   ]
// }

import * as exampleData from './exampleData.json';

export default class DataService {
  static getData() {
    return Promise.resolve(exampleData.default)
  }
}
