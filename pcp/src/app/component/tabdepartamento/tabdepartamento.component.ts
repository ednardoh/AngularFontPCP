import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { departamentoService } from 'src/app/service/departamento.service';
import { CaddepartamentoAddEditComponent } from '../caddepartamento-add-edit/caddepartamento-add-edit.component';
import { Departamentos } from 'src/app/Model/departamentos';

@Component({
  selector: 'app-tabdepartamento',
  templateUrl: './tabdepartamento.component.html',
  styleUrls: ['./tabdepartamento.component.css']
})
export class TabdepartamentoComponent {
  departamentolist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["id", "descricao", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: departamentoService, 
    private dialog: MatDialog
  ) 
    {
      this.LoadDepartamento();
    }

    LoadDepartamento() {
    this.service.getDepartamentos().subscribe(res => {
      this.departamentolist = res;
      this.dataSource = new MatTableDataSource<Departamentos>(this.departamentolist);
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
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      this.LoadDepartamento();
    })
  }

  deleteDepartamento(id: number) {
    this.service.removeDepartamento(id).subscribe({
      next: (res) => {        
        this.LoadDepartamento();
      },
      error: console.log,
    });
  }

  atualizarDepartamento(code: any) {
    this.Openpopup(code, 'Atualizar Tipo Produtos',CaddepartamentoAddEditComponent);
  }
 
  openAddEditDepartamentoForm() {
    const dialogRef = this.dialog.open(CaddepartamentoAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.LoadDepartamento();
        }
      },
    });
  }   

}
