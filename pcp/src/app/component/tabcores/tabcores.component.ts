import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cores } from 'src/app/Model/Cores';
import { CoresService } from 'src/app/service/cores.service'; 
import { CadcoresAddEditComponent } from '../cadcores-add-edit/cadcores-add-edit.component'; 

@Component({
  selector: 'app-tabcores',
  templateUrl: './tabcores.component.html',
  styleUrls: ['./tabcores.component.css']
})
export class TabcoresComponent {

  coreslist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["Codigo", "Nome", "DescricaoCor", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: CoresService, 
    private dialog: MatDialog
  ) 
    {
      this.loadcores();
    }

    loadcores() {
    this.service.getCores().subscribe(res => {
      this.coreslist = res;
      this.dataSource = new MatTableDataSource<Cores>(this.coreslist);
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
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      this.loadcores();
    })
  }

  deleteCores(id: number) {
    this.service.removeCores(id).subscribe({
      next: (res) => {        
        this.loadcores();
      },
      error: console.log,
    });
  }

  atualizarCores(code: any) {
    this.Openpopup(code, 'Atualizar Cores',CadcoresAddEditComponent);
  }
 
  openAddEditCoresForm() {
    const dialogRef = this.dialog.open(CadcoresAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadcores();
        }
      },
    });
  }  

}
