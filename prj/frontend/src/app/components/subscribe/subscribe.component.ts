import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css',
})
export class SubscribeComponent {
  configService: ConfigService = inject(ConfigService);

  subscribeForm = new FormGroup({
    email: new FormControl(null, Validators.email),
  });

  constructor(private router: Router) {}

  cancel() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }

  subscribe() {
    let email: string = this.subscribeForm.value.email ?? '';
    console.log('email');
    console.log(email);

    this.configService
      .saveSubscriber(email)
      .subscribe((response) => console.log(response));

    setTimeout(() => {
      this.cancel();
    }, 1000);
  }
}
