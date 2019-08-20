import { Injectable } from '@angular/core';

import { ApiService } from '@services/api/api.service';

@Injectable()
export class TablesService {
  constructor(
    private apiService: ApiService
  ) {}
}
