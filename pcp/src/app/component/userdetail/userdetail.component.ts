import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/service/usuarios.service'; 
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  inputdata: any;
  userdata: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<UserdetailComponent>,
    private service: UsuarioService) {


  }
  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.service.getUserbycode(this.inputdata.code).subscribe(item => {

        this.userdata = item;
      });
    }
  }

  closepopup(){
    this.ref.close('closing from detail');
  }


}
