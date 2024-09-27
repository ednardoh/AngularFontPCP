import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/service/usuarios.service'; 


@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
             
export class UserAddEditComponent implements OnInit {
  userForm: FormGroup;

  inputdata: any;
  editdata: any;  
  departamento: any[] = [{id: '', descricao: ''}];
  departamentos: any = [];

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(
    private fb: FormBuilder,
    private userService: UsuarioService,
    private dialogRef: MatDialogRef<UserAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {
    this.userForm = this.fb.group({  
      id: '0',                                                     
      "departamentodto.id": 0,                                                    
      email: '',
      senha: '',
      userName: '',
      bloquear: false, 
      permissaocadclientes: false, 
      permissaocadendereco: false,  
      permissaocadproduto: false, 
      permissaopedidocompra: false, 
      permissaopedidovenda: false 
    });

  }

  
  ngOnInit(): void {
 
      this.inputdata = this.data;
      this.FindAllDepartamento();

      if(this.inputdata.code>0){        
        this.setUsuariodata(this.inputdata.code)
      }
      else {
        this.userForm.patchValue(this.data);
      } 

  }


  FindAllDepartamento():void {
    this.userService.getDepartamentos().subscribe((resposta) => {
       this.departamento = resposta;
    })      
  }

  setUsuariodata(code: any) {
    this.userService.getUserbycode(code).subscribe(item => {
      this.editdata = item;
      this.userForm.setValue({id:this.editdata.id, 
                              "departamentodto.id":this.editdata.departamentodto.id,                             
                              email:this.editdata.email,
                              senha:this.editdata.senha,
                              userName:this.editdata.userName,
                              bloquear:this.editdata.bloquear,                              
                              permissaocadclientes:this.editdata.permissaocadclientes,
                              permissaocadendereco:this.editdata.permissaocadendereco,
                              permissaocadproduto:this.editdata.permissaocadproduto,
                              permissaopedidocompra:this.editdata.permissaopedidocompra,
                              permissaopedidovenda:this.editdata.permissaopedidovenda

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
    if (this.userForm.valid) {
      if (this.data) {
          this.userService.updateUsuario(this.data.code, this.userForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      } else {
          this.userService.createUsuario(this.userForm.value)
            .subscribe(res => {
            this.closepopup();            
          });
      }
    }
  }

}
