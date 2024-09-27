import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PcpComponent } from './component/pcp/pcp.component';
import { ConfigComponent } from './component/config/config.component';
import { TabuserComponent } from './component/tabuser/tabuser.component'; 
import { UserdetailComponent } from './component/userdetail/userdetail.component';
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
import { ColecaodetailComponent } from './component/colecaodetail/colecaodetail.component';
import { CadcoresAddEditComponent } from './component/cadcores-add-edit/cadcores-add-edit.component';
import { TabcoresComponent } from './component/tabcores/tabcores.component';
import { TabtamanhosComponent } from './component/tabtamanhos/tabtamanhos.component';
import { CadtamanhosAddEditComponent } from './component/cadtamanhos-add-edit/cadtamanhos-add-edit.component';
import { TabgradetamanhosComponent } from './component/tabgradetamanhos/tabgradetamanhos.component';
import { CadgradetamanhosAddEditComponent } from './component/cadgradetamanhos-add-edit/cadgradetamanhos-add-edit.component';
import { CadgradelistaAddEditComponent } from './component/cadgradelista-add-edit/cadgradelista-add-edit.component';
import { TabgradelistaComponent } from './component/tabgradelista/tabgradelista.component';
import { CaddepartamentoAddEditComponent } from './component/caddepartamento-add-edit/caddepartamento-add-edit.component';
import { TabdepartamentoComponent } from './component/tabdepartamento/tabdepartamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    PcpComponent,
    ConfigComponent,
    TabuserComponent,
    UserAddEditComponent,    
    TabgrupoComponent,
    CadgrupoAddEditComponent,
    TabsubgrupoComponent,
    CadsubgrupoAddEditComponent,
    TabtipoprodutoComponent,
    CadtipoprodutoAddEditComponent,
    TabgrifesComponent,
    CadgrifesAddEditComponent,
    TabcolecaoComponent,
    CadcolecaoAddEditComponent,
    ColecaodetailComponent,
    CadcoresAddEditComponent,
    TabcoresComponent,
    TabtamanhosComponent,
    CadtamanhosAddEditComponent,
    TabgradetamanhosComponent,
    CadgradetamanhosAddEditComponent,
    CadgradelistaAddEditComponent,
    TabgradelistaComponent,
    CaddepartamentoAddEditComponent,
    TabdepartamentoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
