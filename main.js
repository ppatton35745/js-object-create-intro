const cohuttaSprings = Object.create({}, {

    business: {
        value: "cohuttaSprings"
    },
    employmentStart: {
        value: "05-20-2005"
    },
    employmentEnd: {
        value: "08-20-2008"
    },
    funScore: {
        value: 8
    },
    favoriteCoworker: {
        value: "Nardia"
    }

})

const JobMaker = (business, employmentStart, employmentEnd, funScore, favoriteCoworker) => {
    
    const obj = Object.create({}, {
        business: {
            value: business,
            enumerable: true,
            writeable: true
        },
        employmentStart: {
            value: employmentStart,
            enumerable: true,
            writeable: true
        },
        employmentEnd: {
            value: employmentEnd,
            enumerable: true,
            writeable: true
        },
        funScore: {
            value: funScore,
            enumerable: true,
            writeable: true
        },
        favoriteCoworker: {
            value: favoriteCoworker,
            enumerable: true,
            writeable: true
        }
    })

    return obj;
}

const sonicDriveIn = JobMaker("SonicDriveIn", "01-01-2008", "06-20-2012", 7, "Nola");
const UnitedStatesNavy = JobMaker("UnitedStatesNavy", "01-01-2014", "06-20-2016", 6, "Suppo");
const LomaLinda = JobMaker("LomaLinda", "03-01-2008", "04-20-2012", 6, "Chuck");

const jobs = {sonicDriveIn, cohuttaSprings, UnitedStatesNavy, LomaLinda};

for (prp in jobs) {
    let mem = jobs[prp];
    if (typeof mem === 'object') {
        for (cPrp in mem) {
            console.log(`The ${cPrp} property of ${prp} is ${mem[cPrp]} `)
        }
    }
}