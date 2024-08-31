import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'multi-language';
  message: string = '';

  constructor(
    private translateService: TranslateService
  ) {
    translateService.setDefaultLang('en');
    translateService.use(window.localStorage.getItem('lang') || 'en');
  }


  ngOnInit() {
    this.translateService.onLangChange.subscribe(() => {
      this.message = this.translateService.instant('message');
    });
  }


  switchLang(lang: string) {
    window.localStorage.setItem('lang', lang);
    this.translateService.use(lang);
  }

}
