import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

export const routes: Routes = [
  { title: 'Administer Studios | Home', path: '', component: HeaderComponent },
  {
    title: 'Administer Studios | Home',
    path: 'home',
    component: HeaderComponent,
  },
  {
    title: 'Administer Studios | About',
    path: 'about',
    component: AboutComponent,
  },
  {
    title: 'Administer Studios | Clients',
    path: 'clients',
    component: ClientsComponent,
  },
  {
    title: 'Administer Studios | Pricing',
    path: 'pricing',
    component: PricingComponent,
  },
  {
    title: 'Administer Studios | Testimonials',
    path: 'testimonials',
    component: TestimonialsComponent,
  },
  {
    title: 'Administer Studios | Gallery',
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    title: 'Administer Studios | Services',
    path: 'services',
    component: ServicesComponent,
  },
  {
    title: 'Administer Studios | Not Found',
    path: '**',
    component: NotfoundComponent,
  },
];
