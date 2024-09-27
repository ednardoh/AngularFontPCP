import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Grupos } from '../Model/Grupos';

@Injectable({
    providedIn: 'root'
  })

  export class GruposService {

    constructor(private http: HttpClient) { }

    getGrupos(): Observable<Grupos[]> {
      const url = "http://localhost:8081/grupo";
      return this.http.get<Grupos[]>(url);
    }
  
    getGrupo(id: number): Observable<Grupos> {
      const url = `${"http://localhost:8081/grupo"}/${id}`;
      return this.http.get<Grupos>(url);
    }
  
    createGrupo(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/grupo", data);
    }  
  
    removeGrupo(id: number) {
      const url = `${"http://localhost:8081/grupo"}/${id}`;
      return this.http.delete(url);
    }
  
    updateGrupo(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/grupo"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getGrupobycode(id:any){
      return this.http.get("http://localhost:8081/grupo/"+id);
    } 

  }  