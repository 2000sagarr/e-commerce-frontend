import React from "react";

const AddressCard = ({address}) => {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">firstname lastname</p>

        <p>
          {/* {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`} */}
          streetAddress city state 458745
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>1258745874</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
