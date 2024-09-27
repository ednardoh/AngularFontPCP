import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubgruposService } from 'src/app/service/subgrupos.service';
import { Subgrupos } from 'src/app/Model/Subgrupos';
import { CadsubgrupoAddEditComponent } from '../cadsubgrupo-add-edit/cadsubgrupo-add-edit.component';

@Component({
  selector: 'app-tabsubgrupo',
  templateUrl: './tabsubgrupo.component.html',
  styleUrls: ['./tabsubgrupo.component.css']
})
export class TabsubgrupoComponent {

  subgruposlist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["Codigo", "Descricao", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: SubgruposService, 
    private dialog: MatDialog
  ) 
    {
      this.loadsubgrupos();
    }

    loadsubgrupos() {
    this.service.getSubgrupos().subscribe(res => {
      this.subgruposlist = res;
      this.dataSource = new MatTableDataSource<Subgrupos>(this.subgruposlist);
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
      this.loadsubgrupos();
    })
  }

  deleteSubgrupo(id: number) {
    this.service.removeSubgrupo(id).subscribe({
      next: (res) => {        
        this.loadsubgrupos();
      },
      error: console.log,
    });
  }

  atualizarSubgrupo(code: any) {
    this.Openpopup(code, 'Atualizar Sub Grupos',CadsubgrupoAddEditComponent);
  }
 
  openAddEditSubGrupoForm() {
    const dialogRef = this.dialog.open(CadsubgrupoAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadsubgrupos();
        }
      },
    });
  }  

}
