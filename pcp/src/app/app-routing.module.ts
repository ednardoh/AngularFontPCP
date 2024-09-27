import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { PcpComponent } from './component/pcp/pcp.component';
import { ConfigComponent } from './component/config/config.component';
import { TabuserComponent } from './component/tabuser/tabuser.component'; 
import { UserAddEditComponent } from './component/user-add-edit/user-add-edit.component';
import { CadgrupoAddEditComponent } from './component/cadgrupo-add-edit/cadgrupo-add-edit.component';
import { TabgrupoComponent } from './component/tabgrupo/tabgrupo.component';
import { TabsubgrupoComponent } from './component/tabsubgrupo/tabsubgrupo.component';
import { CadsubgrupoAddEditComponent } from './component/cadsubgrupo-add-edit/cadsubgrupo-add-edit.component';
import { TabtipoprodutoComponent } from './component/tabtipoproduto/tabtipoproduto.component';
import { CadtipoprodutoAddEditComponent } from './component/cadtipoproduto-add-edit/cadtipoproduto-add-edit.component';
import { TabgrifesComponent } from './component/tabgrifes/tabgrifes.component';
import { CadgrifesAddEditComponent } from './component/cadgrifes-add-edit/cadgrifes-add-edit.component';
import { TabcolecaoComponent } from './component/tabcolecao/tabcolecao.component';
import { CadcolecaoAddEditComponent } from './component/cadcolecao-add-edit/cadcolecao-add-edit.component';
import { TabcoresComponent } from './component/tabcores/tabcores.component';
import { CadcoresAddEditComponent } from './component/cadcores-add-edit/cadcores-add-edit.component';
import { TabtamanhosComponent } from './component/tabtamanhos/tabtamanhos.component';
import { CadtamanhosAddEditComponent } from './component/cadtamanhos-add-edit/cadtamanhos-add-edit.component';
import { CadgradetamanhosAddEditComponent } from './component/cadgradetamanhos-add-edit/cadgradetamanhos-add-edit.component';
import { TabgradetamanhosComponent } from './component/tabgradetamanhos/tabgradetamanhos.component';
import { CadgradelistaAddEditComponent } from './component/cadgradelista-add-edit/cadgradelista-add-edit.component';
import { TabgradelistaComponent } from './component/tabgradelista/tabgradelista.component';
import { TabdepartamentoComponent } from './component/tabdepartamento/tabdepartamento.component';
import { CaddepartamentoAddEditComponent } from './component/caddepartamento-add-edit/caddepartamento-add-edit.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'card',component:CardComponent},
  {path:'pcp',component:PcpComponent},
  {path:'config',component:ConfigComponent},
  {path:'tabuser',component:TabuserComponent},  
  {path:'user-add-edit',component:UserAddEditComponent},
  {path:'tabgrupo',component:TabgrupoComponent},
  {path:'grupo-add-edit',component:CadgrupoAddEditComponent},
  {path:'tabsubgrupo',component:TabsubgrupoComponent},
  {path:'subgrupo-add-edit',component:CadsubgrupoAddEditComponent},
  {path:'tabtipoproduto',component:TabtipoprodutoComponent},
  {path:'tipoproduto-add-edit',component:CadtipoprodutoAddEditComponent},
  {path:'tabgrifes',component:TabgrifesComponent},
  {path:'grifes-add-edit',component:CadgrifesAddEditComponent},
  {path:'tabcolecao',component:TabcolecaoComponent},
  {path:'colecao-add-edit',component:CadcolecaoAddEditComponent},
  {path:'tabcores',component:TabcoresComponent},
  {path:'cores-add-edit',component:CadcoresAddEditComponent},
  {path:'tabtamanhos',component:TabtamanhosComponent},
  {path:'cadtamanhos-add-edit',component:CadtamanhosAddEditComponent},
  {path:'tabgradetamanhos',component:TabgradetamanhosComponent},
  {path:'cadgradetamanhos-add-edit',component:CadgradetamanhosAddEditComponent},
  {path:'tabgradelista',component:TabgradelistaComponent},
  {path:'cadgradelista-add-edit',component:CadgradelistaAddEditComponent},
  {path:'tabdepartamento',component:TabdepartamentoComponent},
  {path:'caddepartamento-add-edit',component:CaddepartamentoAddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
