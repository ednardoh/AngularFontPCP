import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GradeTamanhosService } from 'src/app/service/gradetamanhos.service'; 
import { CadgradelistaAddEditComponent } from '../cadgradelista-add-edit/cadgradelista-add-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { GradeLista } from 'src/app/Model/GradeLista';

@Component({
  selector: 'app-tabgradelista',
  templateUrl: './tabgradelista.component.html',
  styleUrls: ['./tabgradelista.component.css']
})
export class TabgradelistaComponent {

  gradeForm: FormGroup;
  inputdata: any;
  editdata: any;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  dataSource: any;
  gradelistalist !: any; 
  displayedColumns: string[] = ["id", "gradedto.codigo", "ordem", "descricao", "tamanho", "Ação"];  

  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;  

  constructor(
    private fb: FormBuilder,
    private gradeTamanhosService: GradeTamanhosService,
    private dialogRef: MatDialogRef<TabgradelistaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.gradeForm = this.fb.group({
      codigo: '0',                                                      
      descricao: ''     
    });
  }


  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setGradedata(this.inputdata.code)
      this.loadgradelist(this.inputdata.code);
    }
    else {
      this.gradeForm.patchValue(this.data);
    }
    
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }  

  loadgradelista() {
    this.gradeTamanhosService.getGradeListas().subscribe(res => {
      this.gradelistalist = res;
      this.dataSource = new MatTableDataSource<GradeLista>(this.gradelistalist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  } 
  
  loadgradelist(codigo: any) {
    this.gradeTamanhosService.getGradeLista(codigo).subscribe(res => {
      this.gradelistalist = res;
      this.dataSource = new MatTableDataSource<GradeLista>(this.gradelistalist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;      
    });
}   

  setGradedata(code: any) {
    this.gradeTamanhosService.getGradebycode(code).subscribe(item => {
      this.editdata = item;
      this.gradeForm.setValue({codigo:this.editdata.codigo,
                              descricao:this.editdata.descricao
                              }
                            )
    });
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
  } 
  
  onFormSubmit() {
    if (this.gradeForm.valid) {
      if (this.data) {
          this.gradeTamanhosService.updateGrade(this.data.code, this.gradeForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.gradeTamanhosService.createGrade(this.gradeForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  } 
  
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  
  openAddEditGradeListaForm() {
    const dialogRef = this.dialog.open(CadgradelistaAddEditComponent);

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadgradelista();
        }
      },
    });
  } 
  
  deleteGradeLista(id: number) {
    this.gradeTamanhosService.removeGradeLista(id).subscribe({
      next: (res) => {        
        this.loadgradelista();
      },
      error: console.log,
    });
  }

  atualizarGradeLista(code: any) {
    this.Openpopup(code, 'Atualizar GradeLista',CadgradelistaAddEditComponent);
  }  

}
