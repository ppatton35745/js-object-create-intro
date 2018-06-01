

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
                
                const jobArticle = document.createElement('article')
                jobArticle.id = mem.name.replace(/\s/g,'');
                jobArticle.className = "jobArticle";
                document.body.appendChild(jobArticle);
                const art = document.getElementById(jobArticle.id);
        
                //Create header for article
                
                const newHeader = document.createElement('H2');
                newHeader.innerHTML = mem.name;
                art.appendChild(newHeader);
               
                //Create list for job attributes
        
                const jobAttributeList = document.createElement('ul');
                jobAttributeList.id = (mem.name + "List").replace(/\s/g,'');
                jobAttributeList.className = "jobArticle jobAttributeList";
                art.appendChild(jobAttributeList);
                const list = document.getElementById(jobAttributeList.id);
        
                //Add list items to ul
        
                const datesWorked = document.createElement('li');
                datesWorked.innerHTML = `Dates Worked: ${mem.employmentStart} - ${mem.employmentEnd}`;
                datesWorked.className = "jobArticle jobAttributeList datesWorked";
                list.appendChild(datesWorked);
                
                const funScore = document.createElement('li');
                funScore.innerHTML = `Fun Score: ${mem.funScore}`;
                funScore.className = "jobArticle jobAttributeList funScore";
                list.appendChild(funScore);
                
                const favoriteCoworker = document.createElement('li');
                favoriteCoworker.innerHTML = `Favorite Coworker: ${mem.favoriteCoworker}`;
                favoriteCoworker.className = "jobArticle jobAttributeList favoriteCoworker";
                list.appendChild(favoriteCoworker);
                
            }
        }

    }
}

const StyleJobArticlesPage = () => {
    const body = document.querySelectorAll("body")[0];
    body.style.color = blue;
}

const jobs = [
    JobMaker("Sonic DriveIn", "01-01-2008", "06-20-2012", 7, "Nola"),
    JobMaker("Cohutta Springs", "05-01-2008", "09-20-2012", 8, "Nardia"),
    JobMaker("United States Navy", "01-01-2014", "06-20-2016", 6, "Suppo"),
    JobMaker("Loma Linda", "03-01-2008", "04-20-2012", 6, "Chuck")
];

WriteJobArticles(jobs);
jobArticle = "now I'm this";
console.log(jobArticle);


