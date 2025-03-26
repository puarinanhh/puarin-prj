import { NgModule } from '@angular/core';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './app.reducer';
import { AppEffects } from './app.effects';

@NgModule({
  imports: [
    NgRxStoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not focused
      trace: false, //  If you set trace to true, you can trace the source of an action
      traceLimit: 75, // Maximum stack trace frames to be stored (in case trace option was provided as true)
    })
  ],
  exports: [NgRxStoreModule, EffectsModule]
})
export class StoreModule { }
