import styled from "styled-components";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const PriceList = ({ cryptoData }) => {
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://coinranking1.p.rapidapi.com/coins",
  //     params: {
  //       referenceCurrencyUuid: "yhjMzLPhuIDl",
  //       timePeriod: "24h",
  //       "tiers[0]": "1",
  //       orderBy: "marketCap",
  //       orderDirection: "desc",
  //       limit: "50",
  //       offset: "0",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "8d8908de03msh7356cf60c110270p13f72fjsn82b8e57957fc",
  //       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //     },
  //   };

  //   async function cryptoAPI() {
  //     try {
  //       const response = await axios.request(options);
  //       setCryptoData(response.data.data.coins);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   cryptoAPI();
  // }, []);

  return (
    <Pricing>
      <>
        <Link to={"/"} className="crypto-info">
          {cryptoData.map((data, index) => (
              <div key={index} className="all-cryto">
                <img src={data?.iconUrl} alt="" />
                <span className="name">{data?.name}</span>
                <span className="price">{`$${Number(
                  data?.price.toLocaleString("en-US")
                ).toFixed(2)}`}</span>
                {data?.change < 0 ? (
                  <span className="red" style={{ color: "red" }}>
                    <FiArrowDownLeft />
                    {data?.change}%
                  </span>
                ) : (
                  <span className="green" style={{ color: "green" }}>
                    <FiArrowUpRight />
                    {data?.change}%
                  </span>
                )}{" "}
                ||
              </div>
            ))
            .slice(0, 10)}
          {cryptoData
            .map((data, index) => (
              <div key={index} className="all-cryto">
                <img src={data.iconUrl} alt="" />
                <span className="name">{data.name}</span>
                <span className="price">{`$${Number(
                  data.price.toLocaleString("en-US")
                ).toFixed(2)}`}</span>
                {data.change < 0 ? (
                  <span className="red" style={{ color: "red" }}>
                    <FiArrowDownLeft />
                    {data.change}%
                  </span>
                ) : (
                  <span className="green" style={{ color: "green" }}>
                    <FiArrowUpRight />
                    {data.change}%
                  </span>
                )}{" "}
                ||
              </div>
            ))
            .slice(0, 5)}
        </Link>
      </>
    </Pricing>
  );
};

const Pricing = styled.div`
  width: 100%;
  height: 3vh;
  background: #b5b2b2;
  display: flex;
  overflow: hidden;
  position: relative;
 
  overflow: hidden;
  a {
    text-decoration: none;
    color: black;
  }
  .all-cryto img {
    width: 1rem;
    margin-right: 0.5rem;
  }
  .crypto-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    white-space: nowrap;
    animation: animate 45s linear infinite;
    .name,
    .price,
    .red,
    .green {
      margin-right: 1rem;
      letter-spacing: 1px;
    }
    /* -webkit-animation: scroll 10s linear infinite;
    animation: scroll 10s linear infinite; */
    width: 100%;
  }
  .all-cryto {
    display: inline-flex;
    margin: 10px;
    font-weight: 500;
  }
  @keyframes animate {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10vh;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;
  }
`;

export default PriceList;
