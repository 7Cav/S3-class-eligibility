import axios from 'axios';
import MilpacService from './milpacService';

export default class EligibilityService {
    
    milpacService = null;

    constructor(){
      this.milpacService = new MilpacService();
    }

    CheckUserRequirements(userIds, requirements){
      let users = [];
      userIds.forEach(async userId => {
        let user = {};
        user.user_id = userId;
        if(requirements && requirements.length > 0)
        {
          let milpac = await this.milpacService.GetRecords(userId);
          // Check milpac against requirements.
          let result = this.milpacService.CheckRequirements(milpac, requirements);
          
          // Process result
          if(result.isValid)
          {
            user.isValid = true;
          }
          else{
            user.isValid = false;
            user.missingRequirements = result.notFound;
          }
        }
        else{
          // Class has no requirements
          user.isValid = true;
          user.validationMessage = "Class does not have any requirements";
        }
        users.push(user);
      });
      return users;
    }
}