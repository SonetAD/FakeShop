import Collectionitem from '../Collection_item/Collectionitem.component';
import './Collectionpreview.style.scss';

export default function Collectionpreview({ title, items }) {
  return (
    <div className='collectionpreview'>
      <h1 className='itemName'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index <= 3)
          .map(({ id, ...otherProps }) => {
            return (
              <div className='preview-item' key={id}>
                <Collectionitem {...otherProps} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
