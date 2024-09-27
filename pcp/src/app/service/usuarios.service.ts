import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Usuarios } from '../Model/Usuarios';
import { Departamentos } from '../Model/departamentos';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuarios[]> {
    const url = "http://localhost:8081/usuarios";
    return this.http.get<Usuarios[]>(url);
  }

  getUsuario(id: number): Observable<Usuarios> {
    const url = `${"http://localhost:8081/usuarios"}/${id}`;
    return this.http.get<Usuarios>(url);
  }

  createUsuario(data: any) {
    console.log(data);
    return this.http.post("http://localhost:8081/usuarios", data);
  }  

  removeUsuario(id: number) {
    const url = `${"http://localhost:8081/usuarios"}/${id}`;
    return this.http.delete(url);
  }

  updateUsuario(id: any, Data: any): Observable<any> {
    const url = `${"http://localhost:8081/usuarios"}/${id}`;
    return this.http.put<FormData>(url, Data);
  }  

  getUserbycode(id:any){
    return this.http.get("http://localhost:8081/usuarios/"+id);
  }  

  //*************Departamentos***************** */
  getDepartamentos(): Observable<Departamentos[]> {
    const url = "http://localhost:8081/departamento";
    return this.http.get<Departamentos[]>(url);
  }

}
