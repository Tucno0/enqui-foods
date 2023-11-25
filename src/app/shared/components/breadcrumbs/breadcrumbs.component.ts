import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'shared-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public title: string = '';
  public $tituloSubs: Subscription;

  constructor() {
    this.$tituloSubs = this.getArgumentosRuta()
      .subscribe({
        next: (title) => {
          this.title = title;
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  ngOnDestroy(): void {
    this.$tituloSubs.unsubscribe();
  }

  private getArgumentosRuta(): Observable<string> {
    return this.router.events
      .pipe(
        filter ( event => event instanceof ActivationEnd && event['snapshot'].firstChild === null ),
        map( (event: any) => {
          // Obtener el título que envié en la ruta
          const tapTitle: string = event['snapshot'].routeConfig?.title;
          // Solo me interesa el título que está después del guión
          return tapTitle.split(' - ')[1];
        })

      )
  }
}
