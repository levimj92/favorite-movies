import {Inject, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {FavoritesStore} from './favorites-store';
import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './movies.service';

const PROVIDERS = [
  FavoritesStore,
  MoviesService
];

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: PROVIDERS
    };
  }

  constructor(@Inject(CoreModule) @SkipSelf() @Optional() self: CoreModule) {
    if (self) {
      throw new Error(`Can't create a second instance of CoreModule. CoreModule should be created once.`);
    }
  }
}
