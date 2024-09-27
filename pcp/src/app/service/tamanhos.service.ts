import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Tamanhos } from '../Model/Tamanhos'; 

@Injectable({
    providedIn: 'root'
  })

  export class TamanhosService {

    constructor(private http: HttpClient) { }

    getTamanhos(): Observable<Tamanhos[]> {
      const url = "http://localhost:8081/tamanhos";
      return this.http.get<Tamanhos[]>(url);
    }
  
    getTamanho(id: number): Observable<Tamanhos> {
      const url = `${"http://localhost:8081/tamanhos"}/${id}`;
      return this.http.get<Tamanhos>(url);
    }
  
    createTamanhos(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/tamanhos", data);
    }  
  
    removeTamanhos(id: number) {
      const url = `${"http://localhost:8081/tamanhos"}/${id}`;
      return this.http.delete(url);
    }
  
    updateTamanhos(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/tamanhos"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getTamanhosbycode(id:any){
      return this.http.get("http://localhost:8081/tamanhos/"+id);
    } 

  }