import {requests} from '../http-service';
import {LotListItemApiModel} from '../interfaces/lot-list-item-api-model';

export const LotsService = {
  getLots: (): Promise<LotListItemApiModel[]> => requests.get(''),
  deleteLot: (id: number) => requests.delete(id.toString()),
}
