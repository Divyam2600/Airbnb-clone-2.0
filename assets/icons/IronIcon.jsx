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
      d: "M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.027 3l.308.004a12.493 12.493 0 0 1 11.817 9.48l.07.3 1.73 7.782.027.144a2 2 0 0 1-1.83 2.285L28 23H2.247l-.15-.005a2 2 0 0 1-1.844-1.838L.247 21v-7l.004-.217a5 5 0 0 1 4.773-4.778L5.247 9h9V5h-14V3zm11.528 16H2.245l.002 2H28zM16.247 5.002V11h-11l-.177.005a3 3 0 0 0-2.818 2.819L2.247 14l-.001 3H27.11l-.84-3.783-.067-.28a10.494 10.494 0 0 0-9.596-7.921l-.292-.012z",
    })
  );
}

const ForwardRef = forwardRef(Logo);
module.exports = ForwardRef;
