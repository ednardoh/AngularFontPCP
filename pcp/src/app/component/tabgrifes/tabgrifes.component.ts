import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Grifes } from 'src/app/Model/Grifes';
import { GrifesService } from 'src/app/service/grifes.service'; 
import { CadgrifesAddEditComponent } from '../cadgrifes-add-edit/cadgrifes-add-edit.component';

@Component({
  selector: 'app-tabgrifes',
  templateUrl: './tabgrifes.component.html',
  styleUrls: ['./tabgrifes.component.css']
})
export class TabgrifesComponent {

  grifeslist !: any; 
  dataSource: any;
  displayedColumns: string[] = ["Codigo", "Nome", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: GrifesService, 
    private dialog: MatDialog
  ) 
    {
      this.loadgrifes();
    }

    loadgrifes() {
    this.service.getGrifes().subscribe(res => {
      this.grifeslist = res;
      this.dataSource = new MatTableDataSource<Grifes>(this.grifeslist);
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
      this.loadgrifes();
    })
  }

  deleteGrife(id: number) {
    this.service.removeGrife(id).subscribe({
      next: (res) => {        
        this.loadgrifes();
      },
      error: console.log,
    });
  }

  atualizarGrife(code: any) {
    this.Openpopup(code, 'Atualizar Grifes',CadgrifesAddEditComponent);
  }
 
  openAddEditGrifeForm() {
    const dialogRef = this.dialog.open(CadgrifesAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadgrifes();
        }
      },
    });
  } 

}
