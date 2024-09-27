import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tamanhos } from 'src/app/Model/Tamanhos'; 
import { TamanhosService } from 'src/app/service/tamanhos.service';  
import { CadtamanhosAddEditComponent } from '../cadtamanhos-add-edit/cadtamanhos-add-edit.component';  

@Component({
  selector: 'app-tabtamanhos',
  templateUrl: './tabtamanhos.component.html',
  styleUrls: ['./tabtamanhos.component.css']
})
export class TabtamanhosComponent {

  coreslist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["Codigo", "Tamanho", "Descricao", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: TamanhosService, 
    private dialog: MatDialog
  ) 
    {
      this.loadtamanhos();
    }

    loadtamanhos() {
    this.service.getTamanhos().subscribe(res => {
      this.coreslist = res;
      this.dataSource = new MatTableDataSource<Tamanhos>(this.coreslist);
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
      this.loadtamanhos();
    })
  }

  deleteTamanhos(id: number) {
    this.service.removeTamanhos(id).subscribe({
      next: (res) => {        
        this.loadtamanhos();
      },
      error: console.log,
    });
  }

  atualizarTamanhos(code: any) {
    this.Openpopup(code, 'Atualizar Tamanhos',CadtamanhosAddEditComponent);
  }
 
  openAddEditTamanhosForm() {
    const dialogRef = this.dialog.open(CadtamanhosAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadtamanhos();
        }
      },
    });
  }  

}
