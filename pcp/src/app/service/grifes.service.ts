import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Grifes } from '../Model/Grifes'; 

@Injectable({
    providedIn: 'root'
  })

  export class GrifesService {

    constructor(private http: HttpClient) { }

    getGrifes(): Observable<Grifes[]> {
      const url = "http://localhost:8081/grifes";
      return this.http.get<Grifes[]>(url);
    }
  
    getGrife(id: number): Observable<Grifes> {
      const url = `${"http://localhost:8081/grifes"}/${id}`;
      return this.http.get<Grifes>(url);
    }
  
    createGrife(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/grifes", data);
    }  
  
    removeGrife(id: number) {
      const url = `${"http://localhost:8081/grifes"}/${id}`;
      return this.http.delete(url);
    }
  
    updateGrife(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/grifes"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getGrifebycode(id:any){
      return this.http.get("http://localhost:8081/grifes/"+id);
    } 

  }  