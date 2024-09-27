import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GruposService } from 'src/app/service/grupos.service';

@Component({
  selector: 'app-cadgrupo-add-edit',
  templateUrl: './cadgrupo-add-edit.component.html',
  styleUrls: ['./cadgrupo-add-edit.component.css']
})

export class CadgrupoAddEditComponent implements OnInit {
  grupoForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private grupoService: GruposService,
    private dialogRef: MatDialogRef<CadgrupoAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.grupoForm = this.fb.group({
      codigo: '0',                                                      
      descricao: ''     
    });
  }


  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setGrupodata(this.inputdata.code)
    }
    else {
      this.grupoForm.patchValue(this.data);
    }
  }

  setGrupodata(code: any) {
    this.grupoService.getGrupobycode(code).subscribe(item => {
      this.editdata = item;
      this.grupoForm.setValue({codigo:this.editdata.codigo,
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
    if (this.grupoForm.valid) {
      if (this.data) {
          this.grupoService.updateGrupo(this.data.code, this.grupoForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.grupoService.createGrupo(this.grupoForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }  

}
