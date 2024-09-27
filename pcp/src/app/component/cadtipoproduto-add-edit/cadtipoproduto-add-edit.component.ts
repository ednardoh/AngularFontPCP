import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipoProdutoService } from 'src/app/service/tipoproduto.service';

@Component({
  selector: 'app-cadtipoproduto-add-edit',
  templateUrl: './cadtipoproduto-add-edit.component.html',
  styleUrls: ['./cadtipoproduto-add-edit.component.css']
})
export class CadtipoprodutoAddEditComponent implements OnInit {

  tipoprodutoForm: FormGroup;

  inputdata: any;
  editdata: any;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private TipoprodutoService: TipoProdutoService,
    private dialogRef: MatDialogRef<CadtipoprodutoAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog        
  ) {
    this.tipoprodutoForm = this.fb.group({
      codigo: '',                                                      
      nome: ''     
    });
  }


  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code!=""){
      this.setTipoProdutodata(this.inputdata.code)
    }
    else {
      this.tipoprodutoForm.patchValue(this.data);
    }
  }

  setTipoProdutodata(code: any) {
    this.TipoprodutoService.getTipoprodutobycode(code).subscribe(item => {
      this.editdata = item;
      this.tipoprodutoForm.setValue({codigo:this.editdata.codigo,
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
    if (this.tipoprodutoForm.valid) {
      if (this.data) {
          this.TipoprodutoService.updateTipoproduto(this.data.code, this.tipoprodutoForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.TipoprodutoService.createTipoproduto(this.tipoprodutoForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }  

}
