import React from "react";
import ReactDOM from "react-dom";
import Upload from "./";
import * as Exports from "./";

it("exports <Upload /> as default", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Upload />, div);
  expect(Upload.displayName).toBe("WithStyles(Upload)");
});

it("has correct named exports", () => {
  expect(Object.keys(Exports)).toEqual([
    "propTypes",
    "defaultProps",
    "TusContext",
    "FilePreview",
    "withTus",
    "default"
  ]);
});
