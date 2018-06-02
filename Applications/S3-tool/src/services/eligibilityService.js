export default class EligibilityService {
    
    test(){
      alert('test works');
    }

    async hasRequirements(user, requirements)
    {
      let milpac = await this.retrieveMilpac(user);
        
      
      console.log(milpac.user_id)
      //No requirements? --> always valid
      if(requirements.length === 0)
      {
        console.log("skipping")
        return true
      }
      let valids = []
      //Loop through requirements
      requirements.forEach(req => {
        //loop through user milpacs
        milpac.entries.forEach(record => {
        //if requirement is met
        if(record.details.includes(req.MilpacEntryName))
        {
          valids.push(true)
          //TODO: implement break + for loop for better performance.
        }
        })
      }) 
      return valids.length == requirements.length;
    };
}