import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColecaoService } from 'src/app/service/colecao.service'; 

@Component({
  selector: 'app-cadcolecao-add-edit',
  templateUrl: './cadcolecao-add-edit.component.html',
  styleUrls: ['./cadcolecao-add-edit.component.css']
})
export class CadcolecaoAddEditComponent {

  colecoesForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private colecaoService: ColecaoService,
    private dialogRef: MatDialogRef<CadcolecaoAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.colecoesForm = this.fb.group({
      codigo: '0',                                                      
      nome: '',
      periodoIni: '',
      periodoFim: '',
      pecasMeta:  0,
      qtdeModelos: 0,
      valorMeta: 0.0,
      status: ''          
    });
  }

  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setColecaodata(this.inputdata.code)
    }
    else {
      this.colecoesForm.patchValue(this.data);
    }
  }

  setColecaodata(code: any) {
    this.colecaoService.getColecaobycode(code).subscribe(item => {
      this.editdata = item;
      this.colecoesForm.setValue({codigo:this.editdata.codigo,
                                  nome:this.editdata.nome,
                                  periodoIni:this.editdata.periodoIni, 
                                  periodoFim:this.editdata.periodoFim,                                  
                                  pecasMeta:this.editdata.pecasMeta,
                                  qtdeModelos:this.editdata.qtdeModelos,
                                  valorMeta:this.editdata.valorMeta,
                                  status:this.editdata.status
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
    if (this.colecoesForm.valid) {
      if (this.data) {
          this.colecaoService.updateColecao(this.data.code, this.colecoesForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.colecaoService.createColecao(this.colecoesForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }   

}
