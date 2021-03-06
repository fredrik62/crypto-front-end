import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


//components
import { AppComponent } from './app.component';
import { CryptoTopListCardComponent } from './components/crypto-top-list-card/crypto-top-list-card.component';
import { IndexCoinComponent } from './components/index-coin/index-coin.component';


//pages
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { CryptoTopListPageComponent } from './pages/crypto-top-list-page/crypto-top-list-page.component';
import { CryptoChartPageComponent } from './pages/crypto-chart-page/crypto-chart-page.component';
import { CryptoNewsPageComponent } from './pages/crypto-news-page/crypto-news-page.component';
import { CryptoTopIncreasePageComponent } from './pages/crypto-top-increase-page/crypto-top-increase-page.component';
import { IncreaseDetailPageComponent } from './pages/increase-detail-page/increase-detail-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

//services
import { AuthService } from './services/auth.service';
import { CryptoService } from './services/crypto.service';
import { NewsService } from './services/news.service';
import { CryptoChartService } from './services/crypto-chart.service';


// -- guards

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { DonutCanvasComponent } from './components/donut-canvas/donut-canvas.component';


const routes: Routes = [
  { path: '',  component: IndexPageComponent, canActivate: [ InitAuthGuardService ]},
  { path: 'login',  component: LoginPageComponent, canActivate: [ RequireAnonGuardService ]},
  { path: 'signup',  component: SignUpPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'topcoins',  component: CryptoTopListPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'topcoins/:id',  component: CryptoChartPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'gainers',  component: CryptoTopIncreasePageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'gainers/:id',  component: IncreaseDetailPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'cryptocurrency-news',  component: CryptoNewsPageComponent, canActivate: [ InitAuthGuardService ] },
  { path: 'portfolio',  component: PortfolioPageComponent, canActivate: [ InitAuthGuardService ] }
  
  
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
    CryptoTopIncreasePageComponent,
    IncreaseDetailPageComponent,
    PortfolioPageComponent,
    IndexCoinComponent,
    DonutCanvasComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    AuthService,
    CryptoService,
    NewsService,
    CryptoChartService,
    RequireAnonGuardService,
    RequireUserGuardService,
    InitAuthGuardService
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
