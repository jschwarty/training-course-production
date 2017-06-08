import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutlineComponent } from './outline/outline.component';
import { ScriptComponent } from './script/script.component';
import { VideoComponent } from './video/video.component';

import data from '../data.json';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './core/state/root.reducer';
import { FormsModule } from '@angular/forms';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    OutlineComponent,
    ScriptComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.provideStore(rootReducer, data),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
