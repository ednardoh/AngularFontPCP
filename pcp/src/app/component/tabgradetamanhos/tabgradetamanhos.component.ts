import { Component, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GradeTamanhos } from 'src/app/Model/GradeTamanhos'; 
import { GradeTamanhosService } from 'src/app/service/gradetamanhos.service'; 
import { CadgradetamanhosAddEditComponent } from '../cadgradetamanhos-add-edit/cadgradetamanhos-add-edit.component'; 
import { TabgradelistaComponent } from '../tabgradelista/tabgradelista.component';
import { GradeLista } from 'src/app/Model/GradeLista';

@Component({
  selector: 'app-tabgradetamanhos',
  templateUrl: './tabgradetamanhos.component.html',
  styleUrls: ['./tabgradetamanhos.component.css']
})

export class TabgradetamanhosComponent {
  gradeslist !: any; 
  gradelista !: any;
  dataSource: any;  
  displayedColumns: string[] = ["Codigo", "Descricao", "Ação"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private service: GradeTamanhosService, 
    private dialog: MatDialog
  ) 
    {
      this.loadgrades();
    }

    loadgrades() {
    this.service.getGrades().subscribe(res => {
      this.gradeslist = res;
      this.dataSource = new MatTableDataSource<GradeTamanhos>(this.gradeslist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  loadgradelista(code: any) {
    this.service.getGradeListabycode(code).subscribe(res => {
      this.gradelista = res;
      this.dataSource = new MatTableDataSource<GradeLista>(this.gradelista);
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
      this.loadgrades();
    })
  }

  deleteGrade(id: number) {
    this.service.removeGrade(id).subscribe({
      next: (res) => {        
        this.loadgrades();
      },
      error: console.log,
    });
  }

  atualizarGrade(code: any) {
    this.Openpopup(code, 'Atualizar Grade de Tamanhos',CadgradetamanhosAddEditComponent);
  }

  OpenGradeListaForm(code: any) {    
    const dialogRef = this.dialog.open(TabgradelistaComponent, {
      width: '1000px',
      height: '800px', 
      data: {
        code: code
      }      
    }); 
    this.loadgrades();   
  }
 
  openAddEditGradeForm() {
    const dialogRef = this.dialog.open(CadgradetamanhosAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadgrades();
        }
      },
    });
  }  

}
