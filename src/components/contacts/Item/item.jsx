import {Wrapper,Contact,Tel} from "./item.styled"
import { AiFillDelete } from 'react-icons/ai';
import { FcBusinessContact } from 'react-icons/fc';
import { BsTelephoneOutbound } from 'react-icons/bs';

const ItemContact = ({contact,number,onDelete}) => {

 return (
   
    <>
<Wrapper>
  <FcBusinessContact size={20} />
  <Contact> {contact}</Contact>
</Wrapper>
<Wrapper>
  <BsTelephoneOutbound size={20} />
  <Tel>{number}</Tel>
</Wrapper>
<div role="button" aria-label="Delete" onClick={onDelete}>
  <AiFillDelete size={20} />
</div>
</>
)
}


export default ItemContact;