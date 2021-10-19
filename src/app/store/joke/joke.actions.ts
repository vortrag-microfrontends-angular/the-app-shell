import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { Joke } from '../../models/joke.interface';

export const loadJokes = createAction('[Joke] Load Jokes', props<{ num: number }>());
export const loadJokesSuccess = createAction('[Joke] Load Jokes Success', props<{ data: Array<Joke> }>());
export const loadJokesFailure = createAction('[Joke] Load Jokes Failure', props<{ error: HttpErrorResponse }>());

export const loadJoke = createAction('[Joke] Load Joke');
export const loadJokeSuccess = createAction('[Joke] Load Joke Success', props<{ data: Joke }>());
export const loadJokeFailure = createAction('[Joke] Load Joke Failure', props<{ error: HttpErrorResponse }>());
