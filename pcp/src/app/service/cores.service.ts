import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Cores } from '../Model/Cores'; 

@Injectable({
    providedIn: 'root'
  })

  export class CoresService {

    constructor(private http: HttpClient) { }

    getCores(): Observable<Cores[]> {
      const url = "http://localhost:8081/cores";
      return this.http.get<Cores[]>(url);
    }
  
    getCor(id: number): Observable<Cores> {
      const url = `${"http://localhost:8081/cores"}/${id}`;
      return this.http.get<Cores>(url);
    }
  
    createCores(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/cores", data);
    }  
  
    removeCores(id: number) {
      const url = `${"http://localhost:8081/cores"}/${id}`;
      return this.http.delete(url);
    }
  
    updateCores(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/cores"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getCoresbycode(id:any){
      return this.http.get("http://localhost:8081/cores/"+id);
    } 

  }