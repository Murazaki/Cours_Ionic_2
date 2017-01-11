import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,                                                          // Composants Web utilisés dans l'application
    HomePage                                                        // Composants Web utilisés dans l'application
  ],
  imports: [
    IonicModule.forRoot(MyApp)                                      // Modules supplémentaires (ici Ionic)
  ],
  bootstrap: [IonicApp],                                            // Composant de démarrage de l'application (ici l'application Ionic)
  entryComponents: [
    MyApp,                                                          // Composants Web utilisés comme pages
    HomePage                                                        // Composants Web utilisés comme pages
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}] // Les services de l'application
})
export class AppModule {}
