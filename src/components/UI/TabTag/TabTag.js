import React from "react";

const TabTag = props => {
  return (
    <div className="tab-tag">
      <span className="label btn-danger">{props.value}</span>
    </div>
  );
};

export default TabTag;
