import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Colecao } from '../Model/Colecao'; 

@Injectable({
    providedIn: 'root'
  })

  export class ColecaoService {

    constructor(private http: HttpClient) { }

    getColecoes(): Observable<Colecao[]> {
      const url = "http://localhost:8081/colecao";
      return this.http.get<Colecao[]>(url);
    }
  
    getColecao(id: number): Observable<Colecao> {
      const url = `${"http://localhost:8081/colecao"}/${id}`;
      return this.http.get<Colecao>(url);
    }
  
    createColecao(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/colecao", data);
    }  
  
    removeColecao(id: number) {
      const url = `${"http://localhost:8081/colecao"}/${id}`;
      return this.http.delete(url);
    }
  
    updateColecao(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/colecao"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getColecaobycode(id:any){
      return this.http.get("http://localhost:8081/colecao/"+id);
    } 

  } 