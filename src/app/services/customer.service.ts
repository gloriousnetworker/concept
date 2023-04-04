import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { environment } from '../../environments/environment.dev'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private httpClient: HttpClient) { }

  // Methods to communicate with our backend APIs

 // getCustomers(){
  //   let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER_BASE_URL.GET_ALL_CUSTOMERS
  //   return this.httpClient.get(url);
  // }

  // viewCustomer(id){

  // }

  // editCustomer(id, customerObj) {

  // }

  // deleteCustomer(id){

  // }

  // searchCustomer(keyword){

  // }
}
