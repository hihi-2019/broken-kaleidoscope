import React from "react";
import Pixel from "./Pixel";

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return Array.from({ length: 1000 }, (_, i) => <Pixel key={i} />);
  }
}


export default App;



// render() {
//   return (
//     <div>
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel /> <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel /> <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel /> <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel /> <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel /> <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel /> <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel /> <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel /> <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//       <Pixel />
//     </div>
//   );
// }