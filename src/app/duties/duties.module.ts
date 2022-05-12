import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/duties/components/header/header.component';
import { DutiesService } from './services/duty.service';
import { MainComponent } from './components/main/main.component';
import { DutiesComponent } from 'src/app/duties/components/duties/duties.component';
import { DutyComponent } from 'src/app/duties/components/duty/duty.component';

const routes: Routes = [
  {
    path:'',
    component: DutiesComponent,
  }
]

@NgModule({
  declarations: [
    DutiesComponent,
    HeaderComponent,
    MainComponent,
    DutyComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [DutiesService],
})
export class DutiesModule {}
