const cohuttaSprings = Object.create({}, {

    name: {
        value: "CohuttaSprings",
        enumerable: true,
        writeable: true
    },
    employmentStart: {
        value: "05-20-2005",
        enumerable: true,
        writeable: true
    },
    employmentEnd: {
        value: "08-20-2008",
        enumerable: true,
        writeable: true
    },
    funScore: {
        value: 8,
        enumerable: true,
        writeable: true
    },
    favoriteCoworker: {
        value: "Nardia",
        enumerable: true,
        writeable: true
    }

})

const JobMaker = (name, employmentStart, employmentEnd, funScore, favoriteCoworker) => {

    const obj = Object.create({}, {
        name: {
            value: name,
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
const unitedStatesNavy = JobMaker("UnitedStatesNavy", "01-01-2014", "06-20-2016", 6, "Suppo");
const lomaLinda = JobMaker("LomaLinda", "03-01-2008", "04-20-2012", 6, "Chuck");

const jobs = {
    sonicDriveIn,
    cohuttaSprings,
    unitedStatesNavy,
    lomaLinda
};

const myJobsArticle = document.createElement('article');

for (prp in jobs) {
    let mem = jobs[prp];
    if (typeof mem === 'object') {

        const jobArticle = document.createElement('article');
        jobArticle.id = mem.name;
        document.body.appendChild(jobArticle)

        const newHeader = document.createElement('H2');
        newHeader.innerHTML = prp;
        document.getElementById(jobArticle.id).appendChild(newHeader);

        const jobAttributeList = document.createElement('ul');
        
        const datesWorked = document.createElement('li');
        datesWorked.innerHTML = `Dates Worked: ${mem.employmentStart} - ${mem.employmentEnd}`;
        
        const funScore = document.createElement('li');
        funScore.innerHTML = `Fun Score: ${mem.funScore}`;
        
        const favoriteCoworker = document.createElement('li');
        favoriteCoworker.innerHTML = `Favorite Coworker: ${mem.favoriteCoworker}`;

        jobAttributeList.appendChild(datesWorked);
        jobAttributeList.appendChild(funScore);
        jobAttributeList.appendChild(favoriteCoworker);

        document.getElementById(jobArticle.id).appendChild(jobAttributeList);

        // for (cPrp in mem) {
        //     console.log(`The ${cPrp} property of ${prp} is ${mem[cPrp]} `)
        // }
    }
}

const secondHeader = document.createElement('LI');