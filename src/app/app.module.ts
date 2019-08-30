import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'main', component: MainComponent },
  { path: 'work_experience', component: WorkExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
