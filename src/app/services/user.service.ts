import { User } from "../models/User.model";
import { Subject } from "rxjs";

export class UserService{
    private users : User[]=
        [
            /*{
                firstName : 'HR',
                lastName : 'MB',
                email:'hrmb@gmail.com',
                drinkPreference:'Ciprine',
                hobbies: [
                  'coder ',
                  'déguster du café'
                ]
            }*/   
    ]; 
    userSubject= new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }
    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }
}