import { Injectable } from '@nestjs/common';

@Injectable()
export class InfoService {
  getGeneralInfo(): string {
    return 'Informations générales sur l\'application.';
  }
}
