import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppService } from './contact/contact.service';
import { AgmCoreModule } from '@agm/core';
import { MaininfoComponent } from './maininfo/maininfo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ContactComponent,
    MaininfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8z66cBJMYOtR0wrMrlGE8iesigeIXz5o'
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
