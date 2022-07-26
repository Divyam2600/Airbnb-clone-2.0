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
      d: "M26 3a5 5 0 0 1 4.995 4.783L31 8v16a5 5 0 0 1-4.783 4.995L26 29H6a5 5 0 0 1-4.995-4.783L1 24V8a5 5 0 0 1 4.783-4.995L6 3zm0 2H6a3 3 0 0 0-2.995 2.824L3 8v16a3 3 0 0 0 2.824 2.995L6 27h20a3 3 0 0 0 2.995-2.824L29 24V8a3 3 0 0 0-2.824-2.995zm-7 4v4h4v6h-4v4h-6v-4.001L9 19v-6l4-.001V9zm-2.001 2h-2L15 14.999h-4.001V17L15 16.998 14.999 21h2L17 17h3.999v-2H17z",
    })
  );
}

const ForwardRef = forwardRef(Logo);
module.exports = ForwardRef;
