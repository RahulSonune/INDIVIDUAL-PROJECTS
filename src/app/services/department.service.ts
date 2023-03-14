import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {}

  add(body: any) {
    return this.http.post(`http://localhost:3000/department`, body);
  }

  get() {
    return this.http.get(`http://localhost:3000/department`);
  }
  delete(id: any) {
    return this.http.delete(`http://localhost:3000/department/${id}`);
  }
  getbyId(id: any) {
    return this.http.get(`http://localhost:3000/department/${id}`);
  }

  put(id:   any,body:any){
    return this.http.put(`http://localhost:3000/department/${id}`,body);
  
  }
}
