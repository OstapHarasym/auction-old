import {useEffect, useState} from 'react';
import {LotsService} from '../../api/services/lots.service';
import {LotListItemApiModel} from '../../api/interfaces/lot-list-item-api-model';
import {LotListItem} from './lot-list-item';

export function LotList() {
  const [lots, setLots] = useState<LotListItemApiModel[]>();

  useEffect(() => {
    LotsService.getLots().then(data => setLots(data))
  }, []);

  return (
    <div>
      <p>sort, filter...</p>
      {
        lots?.map(x => <LotListItem
          title={x.title}
          currentBid={x.currentBid}
        />)
      }
    </div>
  );
}
