import { Fragment } from "react";

import "./header.styles.scss";

export default function Header(props) {
  return (
    <Fragment>
      <div className={`${props.align}`}>
        <h1 className="header-title">{props.title}</h1>
        <h4 className="sub-title">{props.subTitle}</h4>
        <h6>{props.span}</h6>
      </div>
    </Fragment>
  );
}
