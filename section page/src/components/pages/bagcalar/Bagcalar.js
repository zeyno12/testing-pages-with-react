import React from "react";
import Navbar from "../../layout/navbar/Navbar";
import district from "../../Mock/data";
import kindergarden from "../../Mock/kindergarde";
import lang from "../../Mock/lang";
import otherservice from "../../Mock/otherservice";
import prices from "../../Mock/price";

const Bagcalar = () => {
  return (
    <section id="bagca">
      <Navbar />

      <div className="container bagca_head">
        <div className="row">
          <div className="col-lg-3">
            <h1>Bagcalar</h1>
          </div>
          <div className="col-lg-6">
            <div className="search_input">
              <input placeholder="Axtar" />
              <i className="bi bi-search"></i>
            </div>
          </div>
        </div>

        <div id="selected_kinder_garden">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4">
                  <h4>Rayonu seçin</h4>
                  {district &&
                    district.map((disctrict, id) => (
                      <div key={id} className="chek_kindergarden">
                        <input type="checkbox" />
                        <p>{disctrict.name}</p>
                      </div>
                    ))}
                </div>
                <div className="col-lg-4">
                  <h4>Tədris ediləcək dilləri seçin</h4>
                  {lang &&
                    lang.map((disctrict, id) => (
                      <div key={id} className="chek_kindergarden">
                        <input type="checkbox" />
                        <p>{disctrict.name}</p>
                      </div>
                    ))}
                  <div className="kindeergarden_prices">
                    <h4>Qiymətlər</h4>

                    {prices &&
                      prices.map((price, id) => (
                        <div key={id} className="chek_kindergarden">
                          <input type="checkbox" />
                          <p>{price.price} AZN</p>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-lg-4">
                  <h4>Digər seçimlər</h4>
                  {otherservice &&
                    otherservice.map((service, id) => (
                      <div key={id} className="chek_kindergarden">
                        <input type="checkbox" />
                        <p>{service.name} </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="kindergarden_cards">
        <div className="container">
          <div className="row">
         
              {kindergarden &&
                kindergarden.map((data, id) => (
                  <div key={id} className="col-lg-4 col-6 mt-3">
                  <div  className="kinderdarden_card_data">
                    <img src={data.image} />
                    <p>{data.name}</p>
                    <p>{data.Ünvan}</p>
                    </div>
                  </div>
                ))}
       
          </div>
        </div>
      </section>
    </section>
  );
};

export default Bagcalar;
