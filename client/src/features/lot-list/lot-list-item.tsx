import {LotListItemApiModel} from '../../api/interfaces/lot-list-item-api-model';

export function LotListItem(model : LotListItemApiModel) {
  return (
    <div>
      <p>{model.title}</p>
      <p>{model.currentBid}</p>
    </div>
  );
}
