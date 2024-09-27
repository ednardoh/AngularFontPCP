import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Colecao } from 'src/app/Model/Colecao'; 
import { ColecaoService } from 'src/app/service/colecao.service'; 
import { CadcolecaoAddEditComponent } from '../cadcolecao-add-edit/cadcolecao-add-edit.component'; 
import { ColecaodetailComponent } from '../colecaodetail/colecaodetail.component';

@Component({
  selector: 'app-tabcolecao',
  templateUrl: './tabcolecao.component.html',
  styleUrls: ['./tabcolecao.component.css']
})
export class TabcolecaoComponent {

  colecoeslist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["Codigo", "Nome", "PeriodoIni", "PeriodoFim",  "Ação"];  

  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: ColecaoService, 
    private dialog: MatDialog
  ) 
    {
      this.loadcolecoes();
    }

    loadcolecoes() {
    this.service.getColecoes().subscribe(res => {
      this.colecoeslist = res;
      this.dataSource = new MatTableDataSource<Colecao>(this.colecoeslist);
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
      this.loadcolecoes();
    })
  }

  detailColecao(id: number) {
    this.Openpopup(id, 'Detalhe da Coleção',ColecaodetailComponent);
  }

  deleteColecao(id: number) {
    this.service.removeColecao(id).subscribe({
      next: (res) => {        
        this.loadcolecoes();
      },
      error: console.log,
    });
  }

  atualizarColecao(code: any) {
    this.Openpopup(code, 'Atualizar Colecao',CadcolecaoAddEditComponent);
  }
 
  openAddEditColecaoForm() {
    const dialogRef = this.dialog.open(CadcolecaoAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadcolecoes();
        }
      },
    });
  }


}
