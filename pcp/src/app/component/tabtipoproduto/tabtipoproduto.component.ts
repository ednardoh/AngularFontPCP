import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subgrupos } from 'src/app/Model/Subgrupos';
import { TipoProdutoService } from 'src/app/service/tipoproduto.service';
import { CadtipoprodutoAddEditComponent } from '../cadtipoproduto-add-edit/cadtipoproduto-add-edit.component';

@Component({
  selector: 'app-tabtipoproduto',
  templateUrl: './tabtipoproduto.component.html',
  styleUrls: ['./tabtipoproduto.component.css']
})
export class TabtipoprodutoComponent {

  tipoprodutolist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["codigo", "nome", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: TipoProdutoService, 
    private dialog: MatDialog
  ) 
    {
      this.loadtipoproduto();
    }

    loadtipoproduto() {
    this.service.getTipoprodutos().subscribe(res => {
      this.tipoprodutolist = res;
      this.dataSource = new MatTableDataSource<Subgrupos>(this.tipoprodutolist);
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
      this.loadtipoproduto();
    })
  }

  deleteTipoProduto(id: number) {
    this.service.removeTipoproduto(id).subscribe({
      next: (res) => {        
        this.loadtipoproduto();
      },
      error: console.log,
    });
  }

  atualizarTipoProduto(code: any) {
    this.Openpopup(code, 'Atualizar Tipo Produtos',CadtipoprodutoAddEditComponent);
  }
 
  openAddEditTipoProdutoForm() {
    const dialogRef = this.dialog.open(CadtipoprodutoAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadtipoproduto();
        }
      },
    });
  }  

}
