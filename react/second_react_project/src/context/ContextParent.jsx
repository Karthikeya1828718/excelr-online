import React, { useContext } from "react";
import { PropertyContext } from "./PropertyContext";

// provider -GrandParentContext
//consumer -GrandChild
const GrandParentContext = () => {
  let property = "hyderabad";
  return (
    <>
      <div>GrandParent</div>
      <PropertyContext.Provider value={property}>
      <Parent  />
      </PropertyContext.Provider>
    </>
  );
};
const Parent = () => {
  return (
    <div>
      <div>Parent</div>
      <Child  />
    </div>
  );
};
const Child = () => {
  return (
    <>
      <div>Child</div>
      <GrandChild  />
    </>
  );
};
const GrandChild = () => {
  let data = useContext(PropertyContext);
  return (
    <>
    <div>{data} from GrandChild</div>
      <div>GrandChild</div>
    </>
  );
};

export default GrandParentContext;
