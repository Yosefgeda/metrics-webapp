import React from 'react';
import { useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';

function Details() {
  const detailData = useSelector((store) => store.details.detailData);
  const isLoading = useSelector((store) => store.details);

  const obj = detailData.market_data.current_price;

  if (isLoading === true) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details">

      <div className="last-update">
        <img src={detailData.image.large} alt="crypto-currency" />
        <div>
          <p>
            name:
            {detailData.name}
          </p>
          <p>
            Last Updated:
            {detailData.last_updated}
          </p>
        </div>
      </div>

      <p className="details-para">
        Description:
        {detailData.description.en}
      </p>
      <p className="details-para">
        Coingecko Rank:
        {detailData.coingecko_rank}
      </p>
      <p className="details-para">
        Community Score:
        {detailData.community_score}
      </p>
      <ul className="current-price">
        <p>Current Price</p>
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            <p>
              {key}
              :
            </p>
            {' '}
            <div className="detail-icon">
              <p>{value}</p>
              {' '}
              <FaArrowRight />
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Details;
