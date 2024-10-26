import { ReactNode } from "react";

export interface GeneralCard {
  title: string;
  imgSource: string;
  imgAlt: string;
  bodyText: string | ReactNode;
}

const GeneralCard = ({ title, imgSource, imgAlt, bodyText }: GeneralCard) => {
  return (
    <div style={{ marginTop: 0 }} className={"card-container"}>
      <div className={"row"}>
        <h3>{title}</h3>
        <hr />
      </div>
      <div className={"row"}>
        <div className={"col"}>{bodyText}</div>
      </div>
      <hr />
      <div className={"row"}>
        <div className={"col"}>
          <img src={imgSource} alt={imgAlt} title={imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default GeneralCard;
