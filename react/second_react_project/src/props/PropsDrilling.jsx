import React from "react";

const GrandParent = () => {
  let property = "hyderabad";
  return (
    <>
      <div>GrandParent</div>
      <Parent property={property} />
    </>
  );
};
const Parent = ({ property }) => {
  return (
    <div>
      <div>Parent</div>
      <Child property={property} />
    </div>
  );
};
const Child = ({ property }) => {
  return (
    <>
      <div>Child</div>
      <GrandChild property={property} />
    </>
  );
};
const GrandChild = ({ property }) => {
  return (
    <>
      <div>GrandChild</div>
      <div>{property}</div>
    </>
  );
};

export default GrandParent;
