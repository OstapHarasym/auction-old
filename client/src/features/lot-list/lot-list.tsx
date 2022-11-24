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
          id={x.id}
          title={x.title}
          description={x.description}
          start={x.start}
          end={x.end}
          startPrice={x.startPrice}
          step={x.step}
        />)
      }
    </div>
  );
}
