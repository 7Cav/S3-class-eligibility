import axios from 'axios';
import MilpacService from './milpacService';

export default class EligibilityService {
    
    milpacService = null;

    constructor(){
      this.milpacService = new MilpacService();
    }

    checkUserRequirements(users, requirements){
      
      users.forEach(async user => {
        if(requirements && requirements.length > 0)
        {
          let milpac = await this.milpacService.getMilpac(user);
          console.log(milpac);
          let testje = "s";
        }
        else{
          user.isValid = true;
          user.ValidationMessage = "Class does not have any requirements";
        }
      });
      
      return users;
    }
}