import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const toggleCardHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCardHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
