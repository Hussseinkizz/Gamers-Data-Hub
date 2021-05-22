import { getMortalities } from '../api/api'


export default class Mortalities {
    constructor (mortalities) { // Data from the mortalities API here
        this.mortalities = mortalities
        this.sickness = []
    }

    // Format of data obtained from running this method
    // [
    //     { label: 'Pneumonia', count: 3 },
    //     { label: 'Malaria', count: 7 },
    //     { label: 'Unknown', count: 3 },
    //     { label: 'Diarrhea', count: 4 }
    // ]
    sicknesses = () => {

        let p = 0, u = 0, m = 0, d = 0
        for (let mortality of this.mortalities) {
            if (mortality.sickness == "Pneumonia") p++
            else if (mortality.sickness == "Malaria") m++
            else if (mortality.sickness == "Unknown") u++
            else if (mortality.sickness == "Diarrhea") d++

            //console.log(mortality.sickness)
        }
        this.sickness.push({label: "Pneumonia", count: p})
        this.sickness.push({label: "Malaria", count: m})
        this.sickness.push({label: "Unknown", count: u})
        this.sickness.push({label: "Diarrhea", count: d})
        // console.log(`p: ${p}`)
        // console.log(`m: ${m}`)
        // console.log(`u: ${u}`)
        // console.log(`d: ${d}`)

    }

    // More formating of data for the visualisation here
    
}
