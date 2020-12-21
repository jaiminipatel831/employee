import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  url = 'http://localhost:27017';
  constructor(private http:HttpClient) { 
  }
  getdata(){
    return this.http.get('${this.url}/myemployees');
  }

  getDataById(id){
    return this.http.get('${this.url}/myemployees/${id}');
  }

  adddata(firstname,lastname,phone) {
    const Employee = {
      firstname: firstname,
      lastname: lastname,
      phone: phone
    };
    return this.http.post('${this.url}/myemployees/add', Employee);
  }
  updatedata(id,firstname,lastname,phone) {
    const Employee = {
      firstname: firstname,
      lastname: lastname,
      phone: phone
    };
    return this.http.post('${this.url}/myemployees/update/${id}', Employee);
  }

  deletedata(id){
    return this.http.get('${this.url}/myemployees/delete/${id}');
  }
}
