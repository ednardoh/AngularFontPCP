import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Tipoproduto } from '../Model/TipoProduto'; 

@Injectable({
    providedIn: 'root'
  })

  export class TipoProdutoService {

    constructor(private http: HttpClient) { }

    getTipoprodutos(): Observable<Tipoproduto[]> {
      const url = "http://localhost:8081/tipoproduto";
      return this.http.get<Tipoproduto[]>(url);
    }
  
    getTipoproduto(id: number): Observable<Tipoproduto> {
      const url = `${"http://localhost:8081/tipoproduto"}/${id}`;
      return this.http.get<Tipoproduto>(url);
    }
  
    createTipoproduto(data: any) {
      console.log(data);
      return this.http.post("http://localhost:8081/tipoproduto", data);
    }  
  
    removeTipoproduto(id: number) {
      const url = `${"http://localhost:8081/tipoproduto"}/${id}`;
      return this.http.delete(url);
    }
  
    updateTipoproduto(id: any, Data: any): Observable<any> {
      const url = `${"http://localhost:8081/tipoproduto"}/${id}`;
      return this.http.put<FormData>(url, Data);
    }  
  
    getTipoprodutobycode(id:any){
      return this.http.get("http://localhost:8081/tipoproduto/"+id);
    } 

  } 