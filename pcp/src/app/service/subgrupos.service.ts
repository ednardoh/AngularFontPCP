import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Subgrupos } from '../Model/Subgrupos';

@Injectable({
    providedIn: 'root'
  })

  export class SubgruposService {

    constructor(private http: HttpClient) { }

    getSubgrupos(): Observable<Subgrupos[]> {
      const url = "http://localhost:8081/subgrupo";
      return this.http.get<Subgrupos[]>(url);
    }
  
    getSubgrupo(id: number): Observable<Subgrupos> {
      const url = `${"http://localhost:8081/subgrupo"}/${id}`;
      return this.http.get<Subgrupos>(url);
    }
  
    createSubgrupo(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/subgrupo", data);
    }  
  
    removeSubgrupo(id: number) {
      const url = `${"http://localhost:8081/subgrupo"}/${id}`;
      return this.http.delete(url);
    }
  
    updateSubgrupo(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/subgrupo"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getSubgrupobycode(id:any){
      return this.http.get("http://localhost:8081/subgrupo/"+id);
    } 

  }  