import { Shotgun } from './shotgun.model';

export interface Famille {
  id: number;
  name: string;
  shotgunsList: Array<Shotgun>;
}
