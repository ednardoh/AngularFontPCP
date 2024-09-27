import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { GradeTamanhos } from '../Model/GradeTamanhos'; 
import { GradeLista } from '../Model/GradeLista';

@Injectable({
    providedIn: 'root'
  })

  export class GradeTamanhosService {

    constructor(private http: HttpClient) { }

    getGrades(): Observable<GradeTamanhos[]> {
      const url = "http://localhost:8081/grades";
      return this.http.get<GradeTamanhos[]>(url);
    }
  
    getGrade(id: number): Observable<GradeTamanhos> {
      const url = `${"http://localhost:8081/grades"}/${id}`;
      return this.http.get<GradeTamanhos>(url);
    }
  
    createGrade(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/grades", data);
    }  
  
    removeGrade(id: number) {
      const url = `${"http://localhost:8081/grades"}/${id}`;
      return this.http.delete(url);
    }
  
    updateGrade(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/grades"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getGradebycode(id:any){
      return this.http.get("http://localhost:8081/grades/"+id);
    }
    
    //----- URLs usada pela GradeLista//////////////////////////////////////////////////////

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