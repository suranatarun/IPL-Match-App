import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StrikerateVisualizeComponent } from './strikerate-visualize/strikerate-visualize.component';
import { StrikerateComponent } from './strikerate/strikerate.component';
import { TeamWiseComponent } from './team-wise/team-wise.component';
import { TeamWiseVisualizeComponent } from './team-wise-visualize/team-wise-visualize.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    DeliveriesComponent,
    MatchesComponent,
    StrikerateComponent,
    PlayersComponent,
    TeamWiseComponent,
    StrikerateVisualizeComponent,
    TeamWiseVisualizeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    NgxPaginationModule,
    HttpClientModule,
    ChartsModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'teams', component: TeamComponent },
      { path: '', redirectTo: 'teams', pathMatch: 'full' },
      { path: 'Players-deliveries', component: DeliveriesComponent },
      { path: 'IPL-matches', component: MatchesComponent },
      { path: 'Players-Strikerate', component: StrikerateComponent },
      { path: 'IPL-Players', component: PlayersComponent },
      { path: 'IPL-TeamWise-Venues', component: TeamWiseComponent },
      { path: '*', component: NotFoundComponent },
      { path: '**', component: NotFoundComponent },
      { path: '***', component: NotFoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
