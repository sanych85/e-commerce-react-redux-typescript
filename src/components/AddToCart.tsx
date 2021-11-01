
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '.';
import {
  decreaseCountInCart,
  increaseCountInCart,
  
} from '../store/actionCreators/cartActionsCreators';
import { ICart } from '../store/reducers/cartReducers/cartTypes';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';
import { RootState } from '../store/store';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

const AddToCart: React.FC<IProduct> = (product) => {

  const cart = useSelector<RootState, ICart>((state) => state.cart);

  const { products } = cart;


  const cartItem = products.find((item: IProduct) => item.id === product.id);

  let quantity = 0;
  if (cartItem && cartItem.quantity) {
    quantity = cartItem.quantity;
  }

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(increaseCountInCart(product));
  };

  const removeFromCart = () => {
    dispatch(decreaseCountInCart(product));
  };

  return (
    <Wrapper>
      {quantity > 0 && (
        <StyledSvgWrapper>
          <AiFillMinusSquare onClick={removeFromCart}></AiFillMinusSquare>{' '}
        </StyledSvgWrapper>
      )}

      {quantity > 0 ? (
        <QuantityWrapper> {quantity} </QuantityWrapper>
      ) : (
        <Button
          color="white"
          bgColor="#3b3b6c"
          hoverColor="#3b3b6c"
          hoverBgColor="white"
          marginBottom = "0rem" 
          onClick={addToCart}
          >
          add to cart
        </Button>
      )}

      {quantity > 0 && (
        <StyledSvgWrapper>
          <AiFillPlusSquare onClick={addToCart}></AiFillPlusSquare>
        </StyledSvgWrapper>
      )}
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  margin-top:1rem;
`;

const QuantityWrapper = styled.div`
display: flex;
height: 36px;
justify-content: center;
align-items: center;
width:35px;
font-size: 1.2rem;
background-color: white;
border-radius: 50%;
 `;

const StyledSvgWrapper = styled.div`
    width: 32px;
    height: 32px;
  svg {
    width: 32px;
    height: 32px;
    transition: all 0.3s ease;
    &:hover {
      color: red;
      transform: scale(1.02);
      cursor: pointer;
    }
  }
`;
