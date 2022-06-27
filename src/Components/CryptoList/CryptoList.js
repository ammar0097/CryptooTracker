import React, { useEffect, useState } from "react";
import "./CryptoList.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Axios from "axios";

const CryptoList = () => {
  const [data, setData] = useState();
  const [positive, setPositive] = useState(true);
  const [search,setSearch] = useState('');


  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  } 




  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((res) => (
      setData(res.data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
    ));
  }, [search]);

  console.log(data);

  return (
    <Container>
      <h1 className="title-header">Search for currency</h1>
      <Form className="list">
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="Search"
            onChange={handleSearchInput}
          />
        </InputGroup>
      </Form>
      <Table className="table" hover variant="dark">
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>symbol</th>
            <th>current_price</th>
            <th>market_cap</th>
            <th>market_cap_change_percentage_24h</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((res) => {
            if (res.market_cap_change_percentage_24h > 0) {
              return (
                <tr>
                  <td className="crypto-image">
                    <img alt="" src={res.image} width="30" height="30" />
                  </td>
                  <td>{res.name}</td>
                  <td>{res.symbol}</td>
                  <td>{res.current_price}</td>
                  <td>{res.market_cap}</td>
                  <td className="td_green">
                    {res.market_cap_change_percentage_24h.toFixed(2)}%
                  </td>
                </tr>
              );
            }
            return (
              <tr>
                <td className="crypto-image">
                  <img alt="" src={res.image} width="30" height="30" />
                </td>
                <td>{res.name}</td>
                <td>{res.symbol}</td>
                <td>{res.current_price}</td>
                <td>{res.market_cap}</td>
                <td className="td_red">
                  {res.market_cap_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default CryptoList;
