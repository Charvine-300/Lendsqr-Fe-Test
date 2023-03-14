import Filter from "./Filter";
import { useState, useRef, useEffect } from "react";
import '../../assets/styles/dashboard.scss'
import FilterImg from '../../assets/images/filter.svg'
import { userTableHeads } from '../../utils/constants'



const TableHeader = () => {

  //Stateful variable for filter form toggle
  const [filterToggle, setFilterToggle] = useState<boolean>(false);
  const [ID, setID] = useState<number>(1);

  //Ref for modal
  const modalRef = useRef<HTMLTableRowElement>(null);

  function openModal(id: number): void {
    setID(id);
    setFilterToggle(true);
  }

  function closeModal(): void {
    setFilterToggle(false);
  }

  function handleOutsideClick(event: MouseEvent): void {
    if (modalRef.current) {
      // Check if the click occurred outside the modal
      if (!modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
      // Check if the click occurred inside the modal but outside the modal content
      else if (!modalRef.current.querySelector('.modal-content')?.contains(event.target as Node)) {
        event.stopPropagation();
      }
    }
  }
  

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  return (  
    <>
      <tr ref={modalRef}>
        {userTableHeads.map(head => (
          <th key={head.id}> 
            {head.title}
            <img src={FilterImg} alt={`${head.title} Filter`} onClick={() => openModal(head.id)} />
            <Filter filterToggle={filterToggle} setFilterToggle={setFilterToggle} ID={ID} headID={head.id} />
          </th>
        ))}
      </tr>
    
    </>
  );
}
 
export default TableHeader;