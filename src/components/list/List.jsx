import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { applayFilter } from '../../redux/selectors';
import css from './listStyle.module.css';

export const List = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(applayFilter);

  return (
    <ul className={css.list}>
      {contactsList.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          <p>
            {name}: {phone}
          </p>
          <button
            className={css.list_btn}
            onClick={event => dispatch(deleteContact(event.target.id))}
            id={id}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
