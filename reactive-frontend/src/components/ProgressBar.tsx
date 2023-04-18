import * as React from "react"
import "./ProgressBar.css"



const ProgressBar = ({progress}) => {
  	const state = `${progress}%`;

	return (
      <div className={"unfinished"}>
        <div className={"finished"} style={{ width: state}}/>
      </div>
    );
};

export default ProgressBar;