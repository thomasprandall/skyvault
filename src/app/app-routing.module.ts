import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { OptionsComponent } from './options/options.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'pricing', component: OptionsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
