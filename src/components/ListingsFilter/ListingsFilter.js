import React, {useContext, useState, useEffect} from 'react';
import {ListingContext} from '../../Context';
import {FaMinus, FaPlus} from 'react-icons/fa';
import './ListingsFilter.scss';

const getUnique = (items, value)=>{
  return [...new Set (items.map(item=>item[value]))]
};
export default function ListingsFilter({listings}) {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ListingContext);
  const {
    handleChange, 
    surface, 
    capacity, 
    price,
    sort, 
    minPrice, 
    maxPrice
  } = context;
  useEffect(() => {
    let handler = event =>{
      if(event.target.innerWidth > 776 && isOpen === true){
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('resize', handler)
    return()=> window.removeEventListener('resize', handler)
  });
  let sorts = ['Not Sorted', 'Price Ascending', 'Price Descending']
  sorts = sorts.map((item, index)=> <option value={item} key={index}>{item}</option>)
  let surfaces = getUnique(listings, 'surface').sort((a, b)=>a.replace(/\D/g, "")-b.replace(/\D/g, ""));
  surfaces = ['All', ...surfaces];
  surfaces = surfaces.map((item, index)=> <option value={item} key={index}>{item}</option>);
  let rooms = getUnique(listings, 'capacity').sort((a, b)=>a.replace(/\D/g, "")-b.replace(/\D/g, ""));
  rooms = ['Up to...', ...rooms];
  rooms = rooms.map((item, index)=> <option value={item} key={index}>{item}</option>);
  return (
    <section className={isOpen?"filter-container show-filters-container":"filter-container"}>
      <div type="button" className="filterBtn" onClick={()=>setIsOpen(!isOpen)}>
        Filters
        {
          isOpen
          ?
          <FaMinus className="filterBtn_icon"  />
          :
          <FaPlus className="filterBtn_icon"  />
        } 
      </div>
      <form className={isOpen?"filter-form show-filters":"filter-form"}>
        <div className="form-group select1">
          <label htmlFor="surface">Sort by</label>
          <select 
          name="sort" 
          id="sort" 
          value={sort} 
          className="form-control"
          onChange = {handleChange}
          >
          {sorts}
          </select>
        </div>
        <div className="form-group range">
          <label htmlFor="room price">
            price €{price}
          </label>
          <input 
          type="range" 
          name="price" 
          min={minPrice}
          max={maxPrice}
          id="price"
          value={price}
          onChange={handleChange}
          step="50"
          className="form-control"
          />
        </div>
        <div className="form-group select1">
          <label htmlFor="surface">surface</label>
          <select 
          name="surface" 
          id="surface" 
          value={surface} 
          className="form-control"
          onChange = {handleChange}
          >
          {surfaces}
          </select>
        </div>
        <div className="form-group select2">
          <label htmlFor="capacity">rooms</label>
          <select 
          name="capacity" 
          id="capacity" 
          value={capacity} 
          className="form-control"
          onChange = {handleChange}
          >
          {rooms}
          </select>
        </div>
      </form>
    </section>
  );
}
