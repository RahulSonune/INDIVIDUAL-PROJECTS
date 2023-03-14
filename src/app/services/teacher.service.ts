import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {}

  add(body: any) {
    return this.http.post(`http://localhost:3000/teacher`, body);
  }

  get() {
    return this.http.get(`http://localhost:3000/teacher`);
  }
  delete(id: any) {
    return this.http.delete(`http://localhost:3000/teacher/${id}`);
  }
  getbyId(id: any) {
    return this.http.get(`http://localhost:3000/teacher/${id}`);
  }

  put(id:   any,body:any){
    return this.http.put(`http://localhost:3000/teacher/${id}`,body);
  
  }
}
