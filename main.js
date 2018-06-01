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
            value: business
        },
        employmentStart: {
            value: employmentStart
        },
        employmentEnd: {
            value: employmentEnd
        },
        funScore: {
            value: funScore
        },
        favoriteCoworker: {
            value: favoriteCoworker
        }
    })

    return obj;
}

const sonicDriveIn = JobMaker("SonicDriveIn", "01-01-2008", "06-20-2012", 7, "Nola");

console.log(cohuttaSprings);
console.log(JobMaker);