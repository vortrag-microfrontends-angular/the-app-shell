import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';

import { Joke } from '../../models/joke.interface';
import * as JokeActions from './joke.actions';

export const jokeFeatureKey = 'joke';

export interface State {
  collection: Array<Joke>;
  randomJoke: Joke | undefined;
  error: HttpErrorResponse | undefined;
}

export const initialState: State = {
  collection: [],
  randomJoke: undefined,
  error: undefined,
};

export const reducer = createReducer(
  initialState,

  on(JokeActions.loadJokes, (state): State => ({ ...state, error: undefined })),
  on(JokeActions.loadJokesSuccess, (state, { data }): State => ({ ...state, collection: data })),
  on(JokeActions.loadJokesFailure, (state, { error }): State => ({ ...state, collection: [], error })),

  on(JokeActions.loadJoke, (state): State => ({ ...state, error: undefined })),
  on(JokeActions.loadJokeSuccess, (state, { data }): State => ({ ...state, randomJoke: data })),
  on(JokeActions.loadJokeFailure, (state, { error }): State => ({ ...state, collection: [], error }))
);
