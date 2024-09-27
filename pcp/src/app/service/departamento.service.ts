import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Departamentos } from '../Model/departamentos';

@Injectable({
  providedIn: 'root'
})

export class departamentoService {

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamentos[]> {
    const url = "http://localhost:8081/departamento";
    return this.http.get<Departamentos[]>(url);
  }

  getDepartamento(id: number): Observable<Departamentos> {
    const url = `${"http://localhost:8081/departamento"}/${id}`;
    return this.http.get<Departamentos>(url);
  }

  createDepartamento(data: any) {
    console.log(data);
    return this.http.post("http://localhost:8081/departamento", data);
  }    

  removeDepartamento(id: number) {
    const url = `${"http://localhost:8081/departamento"}/${id}`;
    return this.http.delete(url);
  }

  updateDepartamento(id: any, Data: any): Observable<any> {
    const url = `${"http://localhost:8081/departamento"}/${id}`;
    return this.http.put<FormData>(url, Data);
  }  

  getDepartamentobycode(id:any){
    return this.http.get("http://localhost:8081/departamento/"+id);
  }  

}