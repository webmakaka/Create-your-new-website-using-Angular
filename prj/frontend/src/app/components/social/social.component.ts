import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [],
  templateUrl: './social.component.html',
  styleUrl: './social.component.css',
})
export class SocialComponent {
  social!: ConfigItem | undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    this.configService
      .getPageById(9)
      .subscribe((response) => (this.social = response));
  }
}
