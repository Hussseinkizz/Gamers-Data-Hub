
export default class Mortalities {
    constructor (mortalities) {
        this.mortalities = mortalities
        this.sickness = []
    }

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