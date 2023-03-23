import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebookSlice';
import { selectFilterValue } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);

  const dispatch = useDispatch();

  return (
    <div className="filter">
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Type to search ..."
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
