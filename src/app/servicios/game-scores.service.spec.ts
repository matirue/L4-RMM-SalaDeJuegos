import { TestBed } from '@angular/core/testing';

import { GameScoresService } from './game-scores.service';

describe('GameScoresService', () => {
  let service: GameScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
