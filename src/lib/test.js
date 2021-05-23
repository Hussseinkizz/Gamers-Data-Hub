// import { getMortalities } from '../api/api';

// Format of data obtained from running this method
// [
//     { label: 'Pneumonia', count: 3 },
//     { label: 'Malaria', count: 7 },
//     { label: 'Unknown', count: 3 },
//     { label: 'Diarrhea', count: 4 }
// ]

// export default function test() {
//   const mortalities = getMortalities(); // Data from the mortalities API here
//   let p = 0,
//     u = 0,
//     m = 0,
//     d = 0;

//   let sickness;

//   for (let mortality in mortalities) {
//     switch (mortality.sickness) {
//       case 'Pneumonia':
//         return p++;

//       case 'Malaria':
//         return m++;

//       case 'Unknown':
//         return u++;

//       case 'Diarrhea':
//         return d++;

//       default:
//         console.log(mortality.sickness);
//     }
//   }

//   sickness.push({ label: 'Pneumonia', count: p });
//   sickness.push({ label: 'Malaria', count: m });
//   sickness.push({ label: 'Unknown', count: u });
//   sickness.push({ label: 'Diarrhea', count: d });

// console.log(`p: ${p}`)
// console.log(`m: ${m}`)
// console.log(`u: ${u}`)
// console.log(`d: ${d}`)

// for(let i=0;i<arr.length;i++) {
//   for(item in arr) {
//     //do foo
//   }
// }

export default function test() {
  const myArray = { key1: 2, key2: 5, key3: 14 };

  /* iterates through an associative array, calculates each percentage and 
    adds it to a similar associative array 
    
    The percentages are not rounded
 */
  /* returns the sum given from an 'associative' array */

  function getSum(myArray) {
    let sum = 0;
    for (let key in myArray) {
      sum += myArray[key];
    }
    return sum;
  }


  function getPercentagePerKey(myArray) {
    let sum = getSum(myArray);
    let arrayWithPercentages = [];
    for (let key in myArray) {
      let val = myArray[key];
      let percentage = Math.floor((val / sum) * 100);
      arrayWithPercentages.push({ key, percentage });
    }
    return arrayWithPercentages;
  }

  const percentageArray = getPercentagePerKey(myArray);
  console.log(percentageArray)
  return <div>foo</div>;
};


// More formating of data for the visualization here
// Basically, get sum of all items and get a fraction of each, then make it a percentage and produce a new array.
