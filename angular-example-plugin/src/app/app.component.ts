import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, map, filter, take, merge } from 'rxjs';
import { PluginMessageEvent } from '../model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    '[attr.data-theme]': 'theme()',
  },
})
export class AppComponent {
  public route = inject(ActivatedRoute);

  public messages$ = fromEvent<MessageEvent<PluginMessageEvent>>(
    window,
    'message'
  );

  public initialTheme$ = this.route.queryParamMap.pipe(
    map((params) => params.get('theme')),
    filter((theme) => !!theme),
    take(1)
  );

  public theme = toSignal(
    merge(
      this.initialTheme$,
      this.messages$.pipe(
        filter((event) => event.data.type === 'theme'),
        map((event) => {
          return event.data.content;
        })
      )
    )
  );
}
