import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TamanhosService } from 'src/app/service/tamanhos.service'; 

@Component({
  selector: 'app-cadtamanhos-add-edit',
  templateUrl: './cadtamanhos-add-edit.component.html',
  styleUrls: ['./cadtamanhos-add-edit.component.css']
})
export class CadtamanhosAddEditComponent {

  tamanhosForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private tamanhosService: TamanhosService,
    private dialogRef: MatDialogRef<CadtamanhosAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.tamanhosForm = this.fb.group({
      codigo: '0',                                                      
      tamanho: '',
      descricao: ''     
    });
  }

  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setTamanhosdata(this.inputdata.code)
    }
    else {
      this.tamanhosForm.patchValue(this.data);
    }
  }

  setTamanhosdata(code: any) {
    this.tamanhosService.getTamanhosbycode(code).subscribe(item => {
      this.editdata = item;
      this.tamanhosForm.setValue({codigo:this.editdata.codigo,
                                tamanho:this.editdata.tamanho,
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
    if (this.tamanhosForm.valid) {
      if (this.data) {
          this.tamanhosService.updateTamanhos(this.data.code, this.tamanhosForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.tamanhosService.createTamanhos(this.tamanhosForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }  

}
