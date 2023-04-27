import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFinance } from '../redux/home/homeSlice';
import HomeItems from './HomeItems';
import Navbar from './Navbar';

const imgSrc = require('../img/download.jpg');

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinance());
  }, [dispatch]);
  const financeData = useSelector((store) => store.finance.financeData);
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = () => {
    const filteredArray = financeData.filter((item) => item.market_data.current_price.usd > 100);
    setFilteredData(filteredArray);
  };
  const viewAll = () => {
    setFilteredData(financeData);
  };

  return (
    <>
      <Navbar handleFilter={handleFilter} viewAll={viewAll} />

      <div className="crypto-head">
        <img src={imgSrc} alt="all cryptos" />
        <p>
          Crypto Data
          <br />
          {financeData.length}
          {' '}
          cryptos
        </p>
      </div>
      <ul className="items-grid">
        {filteredData.length > 0
          ? filteredData.map((item) => (
            <HomeItems
              data={item}
              key={item.id}
              financeData={financeData}
            />
          ))
          : financeData.map((item) => (
            <HomeItems
              data={item}
              key={item.id}
              financeData={financeData}
            />
          ))}
      </ul>
    </>
  );
}

export default Home;
