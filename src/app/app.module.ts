import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CryptoTopListCardComponent } from './components/crypto-top-list-card/crypto-top-list-card.component';


//pages
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { CryptoTopListPageComponent } from './pages/crypto-top-list-page/crypto-top-list-page.component';
import { CryptoChartPageComponent } from './pages/crypto-chart-page/crypto-chart-page.component';
import { CryptoNewsPageComponent } from './pages/crypto-news-page/crypto-news-page.component';
import { CryptoTopIncreasePageComponent } from './pages/crypto-top-increase-page/crypto-top-increase-page.component';

//services
import { AuthService } from './services/auth.service';
import { CryptoService } from './services/crypto.service';


// -- guards

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';


const routes: Routes = [
  { path: '',  component: IndexPageComponent, canActivate: [ InitAuthGuardService ]},
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ]},
  { path: 'signup',  component: SignUpPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'topcoins',  component: CryptoTopListPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'topcoins/:id',  component: CryptoChartPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'gainers-losers',  component: CryptoTopIncreasePageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'cryptocurrency-news',  component: CryptoNewsPageComponent, canActivate: [ InitAuthGuardService ] }
  
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    CryptoTopListPageComponent,
    CryptoTopListCardComponent,
    CryptoChartPageComponent,
    CryptoNewsPageComponent,
    CryptoTopIncreasePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    AuthService,
    CryptoService,
    RequireAnonGuardService,
    RequireUserGuardService,
    InitAuthGuardService
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
