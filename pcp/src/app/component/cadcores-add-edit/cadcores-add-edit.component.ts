import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoresService } from 'src/app/service/cores.service'; 

@Component({
  selector: 'app-cadcores-add-edit',
  templateUrl: './cadcores-add-edit.component.html',
  styleUrls: ['./cadcores-add-edit.component.css']
})
export class CadcoresAddEditComponent implements OnInit {

  coresForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private coresService: CoresService,
    private dialogRef: MatDialogRef<CadcoresAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.coresForm = this.fb.group({
      codigo: '0',                                                      
      nome: '',
      descricaoCor: ''     
    });
  }

  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setCoresdata(this.inputdata.code)
    }
    else {
      this.coresForm.patchValue(this.data);
    }
  }

  setCoresdata(code: any) {
    this.coresService.getCoresbycode(code).subscribe(item => {
      this.editdata = item;
      this.coresForm.setValue({codigo:this.editdata.codigo,
                                nome:this.editdata.nome,
                                descricaoCor:this.editdata.descricaoCor
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
    if (this.coresForm.valid) {
      if (this.data) {
          this.coresService.updateCores(this.data.code, this.coresForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.coresService.createCores(this.coresForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }  

}
