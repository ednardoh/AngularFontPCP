import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { GradeLista } from '../Model/GradeLista'; 

@Injectable({
    providedIn: 'root'
  })

  export class GradeListaService {

    constructor(private http: HttpClient) { }

    getGradeListas(): Observable<GradeLista[]> {
      const url = "http://localhost:8081/gradelista";
      return this.http.get<GradeLista[]>(url);
    }
  
    getGradeLista(id: number): Observable<GradeLista> {
      const url = `${"http://localhost:8081/gradelista"}/${id}`;
      return this.http.get<GradeLista>(url);
    }
  
    createGradeLista(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/gradelista", data);
    }  
  
    removeGradeLista(id: number) {
      const url = `${"http://localhost:8081/gradelista"}/${id}`;
      return this.http.delete(url);
    }
  
    updateGradeLista(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/gradelista"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getGradeListabycode(id:any){
      return this.http.get("http://localhost:8081/gradelista/"+id);
    }

}