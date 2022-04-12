import React, { useState, useEffect } from "react";

// const ArrowFunction = (_) => (
//   <div>
//     <h1>I am arrow function</h1>
//   </div>
// );

function CompA(allProps) {
  useEffect(() => {
    console.log("CompA useEffect!");
  }, [allProps.myProp1]);

  return (
    <>
      {/* <ArrowFunction /> */}

      <h1>CompA</h1>
    </>
  );
}

function CompB() {
  return (
    <>
      <h1>CompB</h1>
      <p>Hello Comp B</p>
    </>
  );
}

class CompC extends React.Component {
  constructor() {
    super();
    this.state = {
      myValue: 10,
    };
  }

  // state = {
  //   myValue: 10
  // }

  changeState(incrementor) {
    this.setState({
      myValue: incrementor,
    });
  }

  render() {
    const { myValue } = this.state;
    const { myProp1, myProp2: MyNewComponent } = this.props;

    return (
      <>
        <h1>Hello CompC</h1>
        Current Value: <h1>{myValue}</h1>
        <button onClick={() => this.changeState(myValue + 1)}>+</button>
        <button onClick={() => this.changeState(myValue - 1)}>-</button>
        <h2>{myProp1}</h2>
        <MyNewComponent />
      </>
    );
  }
}

function MyComponent() {
  return <h1>My Component!</h1>;
}

export default function Home() {
  const [myValue, setValue] = useState(10);
  const [myOtherValue, setOtherValue] = useState(100);

  useEffect(() => {}, [myValue, myOtherValue]);
  console.log("I am called initialy and when state is changed!");

  return (
    <>
      Current Value: <h1>{myValue}</h1>
      <button onClick={() => setValue(myValue + 1)}>+</button>
      <button onClick={() => setValue(myValue - 1)}>-</button>
      <hr></hr>
      Other Value: <h1>{myOtherValue}</h1>
      <button onClick={() => setOtherValue(myOtherValue + 1)}>+</button>
      <button onClick={() => setOtherValue(myOtherValue - 1)}>-</button>
      {/* <CompA myProp1={myValue} myProp2="My Custom Value" /> */}
      <CompC
        myProp1={myValue}
        myProp2={() => <CompA myProp1={myValue} myProp2="My Custom Value" />}
      />
    </>
  );
}
