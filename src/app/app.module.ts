
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductionItemComponent } from './components/products/production-item/production-item.component';
import { ProductionDescriptionComponent } from './components/products/production-description/production-description.component';
import { SidenavService } from './services/sidenav.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductionItemComponent,
    ProductionDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgbModule,
    BrowserAnimationsModule
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: httpTranslateLoader,
    //     deps: [HttpClient]
    //   }
    // }),
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// // AOT compilation support
// export function httpTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

