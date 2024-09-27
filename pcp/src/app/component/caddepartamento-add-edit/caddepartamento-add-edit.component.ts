import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { departamentoService } from 'src/app/service/departamento.service';

@Component({
  selector: 'app-caddepartamento-add-edit',
  templateUrl: './caddepartamento-add-edit.component.html',
  styleUrls: ['./caddepartamento-add-edit.component.css']
})
export class CaddepartamentoAddEditComponent {
  DepartamentoForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private departamentoService: departamentoService,
    private dialogRef: MatDialogRef<CaddepartamentoAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.DepartamentoForm = this.fb.group({
      id: '0',                                                      
      descricao: ''     
    });
  }


  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code!=""){
      this.setDepartamentodata(this.inputdata.code)
    }
    else {
      this.DepartamentoForm.patchValue(this.data);
    }
  }

  setDepartamentodata(code: any) {
    this.departamentoService.getDepartamentobycode(code).subscribe(item => {
      this.editdata = item;
      this.DepartamentoForm.setValue({id:this.editdata.id,
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

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  onFormSubmit() {
    if (this.DepartamentoForm.valid) {
      if (this.data) {
          this.departamentoService.updateDepartamento(this.data.code, this.DepartamentoForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.departamentoService.createDepartamento(this.DepartamentoForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }
}
