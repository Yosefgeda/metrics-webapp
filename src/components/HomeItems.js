/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { getDetails } from '../redux/details/detailsSlice';
import { getFinance } from '../redux/home/homeSlice';
import Navbar from './Navbar';

function HomeItems({ data, financeData }) {
  if (!data || !data.id) {
    return null;
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(data.id));
  }, [dispatch]);
  
  const handleClick = () => {
    dispatch(getDetails(data.id));
  };
  
  return (
    <>
      <li className="items" key={data.id}>
        <Link to="/details" onClick={handleClick}>
          <div className="list-wrapper">
            <img src={data.image.large} alt="crypto-currency" />
            <div className="icon-pos">
              <div>
                <div className="data-name">{data.name}</div>
                <div>
                  Current Price:
                  {data.market_data.current_price.usd}
                </div>
              </div>
              <FaArrowRight className="icon" />
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default HomeItems;
