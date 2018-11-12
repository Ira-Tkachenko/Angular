import { TestBed } from '@angular/core/testing';

import { UserForAdminService } from './user-for-admin.service';

describe('UserForAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserForAdminService = TestBed.get(UserForAdminService);
    expect(service).toBeTruthy();
  });
});
