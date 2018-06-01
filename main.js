

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

const WriteJobArticles = (jobs) => {
    if (jobs.length > 0) {

        for (prp in jobs) {
            let mem = jobs[prp];
            if (typeof mem === 'object') {
        
                //Create the article Element
                
                document.body.appendChild(jobArticle = document.createElement('article'));
                jobArticle.id = mem.name;
                const art = document.getElementById(jobArticle.id);
        
                //Create header for article
                
                art.appendChild(newHeader = document.createElement('H2'));
                newHeader.innerHTML = mem.name;
        
                //Create list for job attributes
        
                art.appendChild(jobAttributeList = document.createElement('ul'));
                jobAttributeList.id = mem.name + "List";
                const list = art.getElementById(jobAttributeList.id);
        
                //Add list items to ul
        
                list.appendChild(datesWorked = document.createElement('li'));
                datesWorked.innerHTML = `Dates Worked: ${mem.employmentStart} - ${mem.employmentEnd}`;
        
                list.appendChild(funScore = document.createElement('li'));
                funScore.innerHTML = `Fun Score: ${mem.funScore}`;
        
                list.appendChild(favoriteCoworker = document.createElement('li'));
                favoriteCoworker.innerHTML = `Favorite Coworker: ${mem.favoriteCoworker}`;
            }
        }

    }
}

const jobs = {
    sonicDriveIn = JobMaker("Sonic DriveIn", "01-01-2008", "06-20-2012", 7, "Nola"),
    cohuttaSprings = JobMaker("Cohutta Springs", "05-01-2008", "09-20-2012", 8, "Nardia"),
    unitedStatesNavy = JobMaker("United States Navy", "01-01-2014", "06-20-2016", 6, "Suppo"),
    lomaLinda = JobMaker("Loma Linda", "03-01-2008", "04-20-2012", 6, "Chuck")
};

WriteJobArticles(jobs);



