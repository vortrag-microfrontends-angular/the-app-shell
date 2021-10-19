import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { JokesService } from '../../services/jokes.service';
import * as JokeActions from './joke.actions';

@Injectable()
export class JokeEffects {
  public readonly loadRandomJokes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JokeActions.loadJokes),
      concatMap(({ num }) =>
        this.service.getRandomJokes(num).pipe(
          map((data) => JokeActions.loadJokesSuccess({ data })),
          catchError((error) => of(JokeActions.loadJokesFailure({ error })))
        )
      )
    );
  });

  public readonly loadRandomJoke$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JokeActions.loadJoke),
      concatMap(() =>
        this.service.getRandomJoke().pipe(
          map((data) => JokeActions.loadJokeSuccess({ data })),
          catchError((error) => of(JokeActions.loadJokeFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private readonly service: JokesService) {}
}
