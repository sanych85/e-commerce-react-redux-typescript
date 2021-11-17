
import styled from 'styled-components';
import { IProduct } from '../store/reducers/productsReducers/ProductsTypes';

interface IPaginationItem {
currentPage:number,
item: number,
showPaginationItems:(item:number)=>void
}

interface IStyledPaginationItem {
    currentPage:number,
    item: number,
}

const PaginationItem:React.FC<IPaginationItem> = ({item,showPaginationItems,currentPage}) => {


    return (
        <StyledPaginationItem currentPage = {currentPage} item ={item} onClick = {()=>showPaginationItems(item)}>
            {item}
        </StyledPaginationItem>
    )
}

export default PaginationItem


const StyledPaginationItem = styled.div<IStyledPaginationItem> `
padding: 0.2rem 0.5rem;
border: 1px solid #00000024;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;
background-color:${({currentPage, item})=>item===currentPage?"#ccd9fb ":" #e8e8f3"};
&:hover {
    background-color: #8a909b;
    color:white
    
}
`