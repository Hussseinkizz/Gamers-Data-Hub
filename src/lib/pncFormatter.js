// ⚠ Breaking change: changed const pnc to const pncFormatter, just to be descriptive...

export const pncFormatter = (data = { PNC: [] }) => {
  // let a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, a7 = 0, a8 = 0
  let pnc_status = {};
  let total_pncs = 0;
  let all_pncs = [];

  for (let i = 1; i <= 3; i++) {
    pnc_status[`pnc${i}Status`] = 0;
    all_pncs[`pnc${i}`] = [];
  }

  data.PNC.forEach((d) => {
    for (let k of Object.keys(pnc_status)) {
      d[k] === 'complete' ? pnc_status[k]++ : (pnc_status[k] += 0);
    }

    total_pncs++;
  });

  // 🤔 thought this data was more suit to tables than bar charts, so made some modifications to the code block below...

  for (let i in Object.keys(all_pncs)) {
    ++i;
    // all_pncs[`pnc${i}`].push({
      
    all_pncs.push({
      pncNumber: i,
      MothersOnPnc: pnc_status[`pnc${i}Status`],
      MothersNotOnPnc: total_pncs - pnc_status[`pnc${i}Status`],
      TotalTrackedMothers:
        pnc_status[`pnc${i}Status`] +
        (total_pncs - pnc_status[`pnc${i}Status`]),
    });
  }

//🤦 This might be not be the right way to do this, 
// but it works and i really don't know why!
// it removes empty arrays...and that's what I wanted for now!

const result = [...new Set(all_pncs)];
  // console.log(all_pncs) vs console.log(result)

  return result;
};

//* 😦 this is what we're getting now...

// {
//     "pnc1": [
//         {
//             "pncNumber": 1,
//             "MothersOnPnc": 27,
//             "MothersNotOnPnc": 3,
//             "TotalTrackedMothers": 30
//         }
//     ],
//     "pnc2": [
//         {
//             "pncNumber": 2,
//             "MothersOnPnc": 1,
//             "MothersNotOnPnc": 29,
//             "TotalTrackedMothers": 30
//         }
//     ],
//     "pnc3": [
//         {
//             "pncNumber": 3,
//             "MothersOnPnc": 1,
//             "MothersNotOnPnc": 29,
//             "TotalTrackedMothers": 30
//         }
//     ]
// }

//* 😓 this is what we need...

// [
//   {
//       "pncNumber": 1,
//       "MothersOnPnc": 27,
//       "MothersNotOnPnc": 3,
//       "TotalTrackedMothers": 30
//   },
//   {
//       "pncNumber": 2,
//       "MothersOnPnc": 1,
//       "MothersNotOnPnc": 29,
//       "TotalTrackedMothers": 30
//   },
//   {
//       "pncNumber": 3,
//       "MothersOnPnc": 1,
//       "MothersNotOnPnc": 29,
//       "TotalTrackedMothers": 30
//   }
// ]
