/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDetails } from '../redux/details/detailsSlice';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

function HomeItems(props) {
    const {data} = props
    if (!data || !data.id) {
        return null;
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(data.id));    
    }, [dispatch]);
    
    const handleClick = () => {
        dispatch(getDetails(data.id));
    }

    return (
    <li className='items'>
            <Link to="/details" onClick={handleClick}>
                <div  className='list-wrapper'>
                    <img src={data.image.large} />
                    <div className='icon-pos'>
                        
                        <div>
                            <div className='data-name'>{data.name}</div>
                            <div>Current Price: {data.market_data.current_price.usd}</div>
                        </div>
                        <FaArrowRight className='icon'/>
                    </div> 
                </div>
            </Link>       
    </li> 
  )
}

export default HomeItems