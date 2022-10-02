import { Fragment } from "react";

import "./header.styles.scss";

export default function Header(props) {
  return (
    <Fragment>
      <h1 className="header-title">{props.title}</h1>
      <h4 className="sub-title">{props.subTitle}</h4>
    </Fragment>
  );
}
