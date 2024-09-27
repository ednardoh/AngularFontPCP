import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GrifesService } from 'src/app/service/grifes.service'; 

@Component({
  selector: 'app-cadgrifes-add-edit',
  templateUrl: './cadgrifes-add-edit.component.html',
  styleUrls: ['./cadgrifes-add-edit.component.css']
})
export class CadgrifesAddEditComponent implements OnInit {

  grifesForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private grifesService: GrifesService,
    private dialogRef: MatDialogRef<CadgrifesAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.grifesForm = this.fb.group({
      codigo: '0',                                                      
      nome: ''     
    });
  }

  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setGrifedata(this.inputdata.code)
    }
    else {
      this.grifesForm.patchValue(this.data);
    }
  }

  setGrifedata(code: any) {
    this.grifesService.getGrifebycode(code).subscribe(item => {
      this.editdata = item;
      this.grifesForm.setValue({codigo:this.editdata.codigo,
                                nome:this.editdata.nome
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
    if (this.grifesForm.valid) {
      if (this.data) {
          this.grifesService.updateGrife(this.data.code, this.grifesForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.grifesService.createGrife(this.grifesForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }   

}
