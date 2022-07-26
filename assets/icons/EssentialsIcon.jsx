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
      d: "M11 1v7l1.898 20.819.007.174c-.025 1.069-.804 1.907-1.818 1.999a2 2 0 0 1-.181.008h-7.81l-.174-.008C1.86 30.87 1.096 30.018 1.096 29l.002-.09 1.907-21L3.001 1zm6 0l.15.005a2 2 0 0 1 1.844 1.838L19 3v7.123l-2 8V31h-2V18.123l.007-.163.02-.162.033-.16L16.719 11H13V1zm11 0a2 2 0 0 1 1.995 1.85L30 3v26a2 2 0 0 1-1.85 1.995L28 31h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7V9h7V7h-7V5h7V3h-7V1zM9.088 9h-4.18L3.096 29l.058.002L10.906 29l-.004-.058zM17 3h-2v6h2zM9.002 3H5L5 7h4.004z",
    })
  );
}

const ForwardRef = forwardRef(Logo);
module.exports = ForwardRef;
