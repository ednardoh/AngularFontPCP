import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubgruposService } from 'src/app/service/subgrupos.service';

@Component({
  selector: 'app-cadsubgrupo-add-edit',
  templateUrl: './cadsubgrupo-add-edit.component.html',
  styleUrls: ['./cadsubgrupo-add-edit.component.css']
})
export class CadsubgrupoAddEditComponent implements OnInit {

  subgrupoForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private SubgrupoService: SubgruposService,
    private dialogRef: MatDialogRef<CadsubgrupoAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.subgrupoForm = this.fb.group({
      codigo: '0',                                                      
      descricao: ''     
    });
  }


  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setSubgrupodata(this.inputdata.code)
    }
    else {
      this.subgrupoForm.patchValue(this.data);
    }
  }

  setSubgrupodata(code: any) {
    this.SubgrupoService.getSubgrupobycode(code).subscribe(item => {
      this.editdata = item;
      this.subgrupoForm.setValue({codigo:this.editdata.codigo,
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
    if (this.subgrupoForm.valid) {
      if (this.data) {
          this.SubgrupoService.updateSubgrupo(this.data.code, this.subgrupoForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.SubgrupoService.createSubgrupo(this.subgrupoForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }   

}
