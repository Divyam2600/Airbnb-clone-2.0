import { createElement, forwardRef } from "react";

function Logo(props, svgRef) {
  return /*#__PURE__*/ createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 30 35",
        fill: "currentColor",
        strokeWidth: 0,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
      },
      props
    ),
    /*#__PURE__*/ createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z",
    })
  );
}

const ForwardRef = forwardRef(Logo);
module.exports = ForwardRef;
