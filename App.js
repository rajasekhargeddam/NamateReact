const div = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "first child"),
    React.createElement("h2", {}, "first child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "second child"),
    React.createElement("h2", {}, "second child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
