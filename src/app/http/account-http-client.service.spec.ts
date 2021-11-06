import { TestBed } from '@angular/core/testing';
import { AccountHttpClient } from './account-http-client.service';

describe('http client', () => {
  let service: AccountHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountHttpClient],
    });
    service = TestBed.inject(AccountHttpClient);
  });
  it('should return accountEvents', (done) => {
    service.getAccountEvents$().subscribe((val) => {
      expect(val.data.length).toEqual(11);
      done();
    });
  });
});
