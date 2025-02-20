import React from "react";

import { Wrapper, Content } from "./progress.styles";

//data
import { progressData } from "../../Data/data";

const Progres = () => (
  <Wrapper>
    <Content>
      <h1>Experience in group working</h1>
      <div id="content">
        <div className="left">
          {progressData.map((curr, index) => (
            <React.Fragment key={curr.name}>
              <div
                className={
                  index === 0
                    ? "left-box-first"
                    : index === progressData.length - 1
                    ? "left-box-last"
                    : "left-box"
                }
                key={curr.name}
              >
                {index !== 0 || index === progressData.length - 1 ? (
                  <div className="progress-line-mark"></div>
                ) : (
                  <></>
                )}
                <div className="progress-mark"></div>
                {index === progressData.length - 1 ? (
                  <></>
                ) : (
                  <div className="progress-line-mark"></div>
                )}
              </div>
              <div className="left-box-blank">
                {index === progressData.length - 1 ? (
                  <></>
                ) : (
                  <div className="progress-line"></div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="right">
          {progressData.map((curr) => (
            <React.Fragment key={curr.name}>
              <div className="right-box" key={curr.name}>
                <h2>{curr.name}</h2>
                <h3>{curr.nameInfo}</h3>
                <p>{curr.info}</p>
              </div>
              <div className="right-box-blank"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Content>
  </Wrapper>
);

export default Progres;
