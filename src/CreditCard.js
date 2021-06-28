import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div>
      <div>**** **** **** {number.substring(12, 16)}</div>
      <div>
        {type === 'Visa' ? (
          <img src="../public/img/visa.png" />
        ) : (
          <img src="../public/img/master-card.svg" />
        )}
      </div>
      <div>
        <p>
          Expires {expirationMonth} /{expirationYear} {bank} <br />
          {owner}
        </p>
      </div>
    </div>
  );
}

export default CreditCard;
