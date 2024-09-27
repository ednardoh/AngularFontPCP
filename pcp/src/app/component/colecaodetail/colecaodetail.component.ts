import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColecaoDetailService } from 'src/app/service/colecaodetail.service'; 

@Component({
  selector: 'app-colecaodetail',
  templateUrl: './colecaodetail.component.html',
  styleUrls: ['./colecaodetail.component.css']
})
export class ColecaodetailComponent {

  colecaoDetailForm: FormGroup;
  inputdata: any;
  colecaodata: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ColecaodetailComponent>,
    private service: ColecaoDetailService, private fb: FormBuilder) {
      this.colecaoDetailForm = this.fb.group({
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
    this.service.getColecaobycode(this.inputdata.code).subscribe(item => {
      this.inputdata = item;
      this.colecaoDetailForm.setValue({codigo:this.inputdata.codigo,
                                  nome:this.inputdata.nome,
                                  periodoIni:this.inputdata.periodoIni, 
                                  periodoFim:this.inputdata.periodoFim,
                                  pecasMeta:this.inputdata.pecasMeta,
                                  qtdeModelos:this.inputdata.qtdeModelos,
                                  valorMeta:this.inputdata.valorMeta,
                                  status:this.inputdata.status
                              }
                            )
    });
  }

  setColecaodata(code: any) {
    this.service.getColecaobycode(code).subscribe(item => {
      this.inputdata = item;
      this.colecaoDetailForm.setValue({codigo:this.inputdata.codigo,
                                  nome:this.inputdata.nome,                                  
                                  periodoIni:this.inputdata.periodoIni, 
                                  periodoFim:this.inputdata.periodoFim,
                                  pecasMeta:this.inputdata.pecasMeta,
                                  qtdeModelos:this.inputdata.qtdeModelos,
                                  valorMeta:this.inputdata.valorMeta,
                                  status:this.inputdata.status
                              }
                            )
    });
  }  

  closepopup(){
    this.ref.close('closing from detail');
  }


}
