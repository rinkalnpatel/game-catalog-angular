// Angular modules
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

// External modules
import { TranslateService } from '@ngx-translate/core';
import { FavoriteService } from '@services/favorite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private favoriteService: FavoriteService
  ) {
    // NOTE This language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');
    // NOTE The lang to use, if the lang isn't available, it will use the current loader to get them
    // let userLanguage = StorageHelper.getLanguage();
    // if (!userLanguage)
    let userLanguage = 'en';
    this.translateService.use(userLanguage);
    // initialize fav list
    this.favoriteService.initialize();
  }

  public ngOnInit(): void {}
}
