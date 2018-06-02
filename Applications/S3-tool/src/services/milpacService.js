import axios from 'axios';

export default class EligibilityService {
    
    constructor(){

    }

    GetRecords(user)
    {
        return new Promise((resolve, reject) => {
            axios.get('/user/' + user.user_id + '/records')
            .then(function (response) {
              resolve(response.data.data);
            })
            .catch(function (error) {
              console.log(error);
              reject(error);
            })
        })
    }

    CheckRequirements(records, requirements)
    {
        let result = {};
        result.notFound = [];
        
        // Loop through all requirements.
        requirements.forEach(requirement => {
            let reqMilpacName = requirement.MilpacEntryName; 
            let found = false;
            // Loop through every milpac entry.
            for (let i = 0; i < records.length; i++) {
                const record = records[i];
                // If milpac entry contains the requirement mark found.
                if(~record.details.indexOf(reqMilpacName))
                {
                    found = true;
                    break;
                }   
            }
            // If requirement is not found add message and fail user.
            if(!found)
            {
                result.isvalid = false;
                result.notFound.push("Is missing requirement: " + reqMilpacName);
            }
        });

        if(result.notFound.length === 0)
        {
            result.isValid = true;
        }
        return result;
    }
}