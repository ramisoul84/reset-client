import { Routes } from '@angular/router';


export const routes: Routes = [
    { 
        path: '',
        loadComponent: () => import('./pages/intro-page/intro-page.component').then(m => m.IntroPageComponent)
    },
    { 
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)
    },
    { 
        path: 'djerba',
        loadComponent: () => import('./pages/djerba-page/djerba-page.component').then(m => m.DjerbaPageComponent)
    },
    { 
        path: 'fashion',
        loadComponent: () => import('./pages/fashion-page/fashion-page.component').then(m => m.FashionPageComponent)
    },
    { 
        path: 'yadis-djerba',
        loadComponent: () => import('./pages/yadis-djerba/yadis-djerba.component').then(m => m.YadisDjerbaComponent)
    },
    { 
        path: 'festival-a-z',
        loadComponent: () => import('./pages/festival-a-z-page/festival-a-z-page.component').then(m => m.FestivalAZPageComponent)
    },
    { 
        path: 'tickets',
        loadComponent: () => import('./pages/tickets-page/tickets-page.component').then(m => m.TicketsPageComponent)
    },
    { 
        path: 'wellness',
        loadComponent: () => import('./pages/wellness/wellness.component').then(m => m.WellnessComponent)
    },
    { 
        path: 'admin',
        loadComponent: () => import('./pages/admin-page/admin-page.component').then(m => m.AdminPageComponent)
    },
    { 
        path: 'imprint',
        loadComponent: () => import('./pages/imprint/imprint.component').then(m => m.ImprintComponent)
    },
    { 
        path: 'ticket-terms',
        loadComponent: () => import('./pages/ticket-terms/ticket-terms.component').then(m => m.TicketTermsComponent)
    },
    { 
        path: 'awareness-sustainability',
        loadComponent: () => import('./pages/awareness-sustainability/awareness-sustainability.component').then(m => m.AwarenessSustainabilityComponent)
    },
    { 
        path: 'mission-values',
        loadComponent: () => import('./pages/mission-values/mission-values.component').then(m => m.MissionValuesComponent)
    },
    { path: '**', redirectTo: '' },
];
