import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/Model/Usuarios'; 
import { UserAddEditComponent } from '../user-add-edit/user-add-edit.component';
import { UsuarioService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-tabuser',
  templateUrl: './tabuser.component.html',
  styleUrls: ['./tabuser.component.css']
})
export class TabuserComponent {

  usuarioslist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["id", "departamentodto.descricao", "userName", "bloquear", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: UsuarioService, 
    private dialog: MatDialog
  ) 
    {
      this.loadusuarios();
    }

  loadusuarios() {
    this.service.getUsuarios().subscribe(res => {
      this.usuarioslist = res;
      this.dataSource = new MatTableDataSource<Usuarios>(this.usuarioslist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '25%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
       console.log(item)
      this.loadusuarios();
    })
  }

  deleteUser(id: number) {
    this.service.removeUsuario(id).subscribe({
      next: (res) => {        
        this.loadusuarios();
      },
      error: console.log,
    });
  }

  atualizarUsuario(code: any) {
    this.Openpopup(code, 'Atualizar Usuário',UserAddEditComponent);
  }
 
  openAddEditUserForm() {
    const dialogRef = this.dialog.open(UserAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadusuarios();
        }
      },
    });
  }  

}

