import React from "react";
import styled from "styled-components";

const StyleduserPage = styled.div`
  .userContainer {
    display: flex;
    justify-content: center;
  }

  .userData {
    margin: 1.8rem 0;
  }

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .userName {
    padding: 0.5rem 0;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }

  .creditCard {
    display: grid;
    grid-template-rows: repeat(4, 25%);
    height: 9.6rem;
    width: 17rem;
    background-image: url("/card.png");
    background-size: contain;
    background-repeat: no-repeat;
    color: var(--silver);
    font-family: "Rajdhani", sans-serif;
    font-weight: 500;
    animation: appearing 1s;
  }

  .avatar > img {
    height: 10rem;
    border-radius: 15%;
    animation: appearing 1s;
  }

  .userInfo {
    margin-top: 2rem;
    display: grid;
  }

  .addressInfo,
  .contactInfo,
  .billingInfo {
    border-bottom: 1px solid var(--gray);
    margin-bottom: 1.7rem;
  }

  .addressTitle,
  .contactTitle,
  .billingTitle {
    text-transform: uppercase;
    color: var(--gray);
    margin-bottom: 0.8rem;
    i {
      margin-right: 0.5rem;
    }
  }

  .address,
  .contact,
  .billing {
    margin-bottom: 0.8rem;
  }

  .phone,
  .email {
    i {
      margin-right: 1rem;
      color: var(--gray);
    }
  }

  .cardNumber {
    grid-row-start: 3;
    grid-row-end: 4;
    display: flex;
    justify-content: center;
    letter-spacing: 0.18rem;
  }

  .cardInfo {
    grid-row-start: 4;
    grid-row-end: 5;
    display: grid;
    grid-template-columns: repeat(2, 50%);

    div {
      display: flex;
      justify-content: center;
    }
  }
`;

function UserPage() {
  return (
    <StyleduserPage>
      <div className="userContainer">
        <div className="userData">
          <div className="user">
            <div className="avatar">
              <img src="/user/avatar.png" alt="avatar" />
            </div>
            <div className="userName">Geralt de Rivia</div>
          </div>
          <div className="userInfo">
            <div className="addressInfo">
              <div className="addressTitle">
                <i className="fas fa-map-marker-alt"></i>Address
              </div>
              <div className="address">
                Prospect Heights Brooklyn, Nueva York
              </div>
            </div>
            <div className="contactInfo">
              <div className="contactTitle">
                <i className="fas fa-id-card"></i>Contact
              </div>
              <div className="contact">
                <div className="phone">
                  <i className="fas fa-mobile-alt"></i> (+1) 518 555 0195
                </div>
                <div className="email">
                  <i className="fas fa-envelope"></i>geralt@dam.com
                </div>
              </div>
            </div>
            <div className="billingInfo">
              <div className="billingTitle">
                <i className="fas fa-credit-card"></i>Billing
              </div>
              <div className="billing">
                <div className="creditCard">
                  <div className="cardNumber">**** **** **** 3456</div>
                  <div className="cardInfo">
                    <div>Geralt de Rivia</div>
                    <div>01/22</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleduserPage>
  );
}

export default UserPage;
