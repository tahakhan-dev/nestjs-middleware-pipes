import { Injectable, Scope } from '@nestjs/common';


//this service here is going to be a singleton and it's going to be shared for the whole application
// right now it's not safe  
// if we have multiple request coming in they all gonna be using same service and this user id here might get overwritten so to 
// overcome this problem

// nest provide ability to provide injection scope which means we can actually say we want to scope this service to the request 
// and each request that comes into the system will get a new request service where we can set a unique user id 

@Injectable({ scope: Scope.REQUEST }) 
export class RequestService {
  private userId: string;

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
