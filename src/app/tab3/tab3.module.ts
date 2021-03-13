import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ProfileCardComponent } from '../component/profile-card/profile-card.component';
import { ProfileComponent } from '../component/profile/profile.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    RouterModule.forChild([{ path: ':id', component: ProfileComponent }]),
    Tab3PageRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    Tab3Page,
    ProfileCardComponent,
    ProfileComponent
  ]
})
export class Tab3PageModule { }
