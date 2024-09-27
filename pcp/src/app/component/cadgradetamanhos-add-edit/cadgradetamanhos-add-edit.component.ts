import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GradeTamanhosService } from 'src/app/service/gradetamanhos.service'; 

@Component({
  selector: 'app-cadgradetamanhos-add-edit',
  templateUrl: './cadgradetamanhos-add-edit.component.html',
  styleUrls: ['./cadgradetamanhos-add-edit.component.css']
})
export class CadgradetamanhosAddEditComponent {

  gradeForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private gradeTamanhosService: GradeTamanhosService,
    private dialogRef: MatDialogRef<CadgradetamanhosAddEditComponent>,
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
    }
    else {
      this.gradeForm.patchValue(this.data);
    }
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
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

}
