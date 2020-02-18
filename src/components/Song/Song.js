import React from "react";
import TabTag from "../UI/TabTag/TabTag";

const Song = props => {
  return (
    <div key={props.data.id} className="panel">
      <div className="panel-heading">
        <div className="text-center">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="pull-left">Title: {props.data.title}</h3>
            </div>
            <div className="col-sm-12">
              <h4 className="pull-left">Artist: {props.data.artist.name}</h4>
            </div>
            <div className="col-sm-12">
              <a
                href={"http://www.songsterr.com/a/wa/song?id=" + props.data.id}
                className="pull-left"
              >
                <button className="btn btn-dark btn-lg">Open</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-footer">
        Available tabs:
        {props.data.tabTypes.map(tabType => (
          <TabTag value={tabType} />
        ))}
      </div>
    </div>
  );
};

export default Song;
