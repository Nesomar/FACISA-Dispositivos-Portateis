import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from "./app.component";
import { UserLogin } from "../pages/user-login/user-login";
import { UserSignup } from "../pages/user-signup/user-signup";
import { UserForgotpassword } from "../pages/user-forgotpassword/user-forgotpassword";
import { Dashboard } from "../pages/dashboard/dashboard";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { IonicModule, IonicApp, IonicErrorHandler } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { ErrorHandler, NgModule } from "@angular/core";
import { AuthData } from "../providers/auth/auth";
import { AngularFireModule } from 'angularfire2';
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    MyApp,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData
  ]
})
export class AppModule {}


