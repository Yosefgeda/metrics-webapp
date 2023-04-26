/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFinance } from '../redux/home/homeSlice';
import HomeItems from './HomeItems';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getFinance());
        
    }, [dispatch]);
    const financeData = useSelector((store) => store.finance.financeData)
  
    return (
      <ul className='items-grid'>
        {financeData.map((item) => <HomeItems data={item} key={item.id} />)}
      </ul>
    );
}

export default Home;
