const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Onyx",
      breed: "Belgian Malinois",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Kitty",
      breed: "Domestic short hair",
    }),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Zoey",
      breed: "Husky mix",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
