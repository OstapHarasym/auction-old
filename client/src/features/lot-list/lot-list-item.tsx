import {LotListItemApiModel} from '../../api/interfaces/lot-list-item-api-model';
import {LotsService} from '../../api/services/lots.service';

export function LotListItem(model : LotListItemApiModel) {
  function handleDelete(id: number) {
    LotsService.deleteLot(id);
  }

  return (
    <div className='bg-orange-400 mt-3 rounded-lg ml-20 mr-20 p-5'>
      <p>{model.title}</p>
      <p>{model.description}</p>
      <p>{model.start.toString()}</p>
      <p>{model.end.toString()}</p>
      <p>{model.startPrice}</p>
      <p>{model.step}</p>
      <button className='bg-white' onClick={() => handleDelete(model.id)}>Click</button>
    </div>
  );
}
