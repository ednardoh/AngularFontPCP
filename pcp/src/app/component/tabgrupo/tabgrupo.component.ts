import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Grupos } from 'src/app/Model/Grupos';
import { GruposService } from 'src/app/service/grupos.service';
import { CadgrupoAddEditComponent } from '../cadgrupo-add-edit/cadgrupo-add-edit.component';

@Component({
  selector: 'app-tabgrupo',
  templateUrl: './tabgrupo.component.html',
  styleUrls: ['./tabgrupo.component.css']
})
export class TabgrupoComponent {

  gruposlist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["Codigo", "Descricao", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: GruposService, 
    private dialog: MatDialog
  ) 
    {
      this.loadgrupos();
    }

    loadgrupos() {
    this.service.getGrupos().subscribe(res => {
      this.gruposlist = res;
      this.dataSource = new MatTableDataSource<Grupos>(this.gruposlist);
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
      this.loadgrupos();
    })
  }

  deleteGrupo(id: number) {
    this.service.removeGrupo(id).subscribe({
      next: (res) => {        
        this.loadgrupos();
      },
      error: console.log,
    });
  }

  atualizarGrupo(code: any) {
    this.Openpopup(code, 'Atualizar Grupos',CadgrupoAddEditComponent);
  }
 
  openAddEditGrupoForm() {
    const dialogRef = this.dialog.open(CadgrupoAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadgrupos();
        }
      },
    });
  }  

}
