import * as React from 'react';
import sampleReducer from 'modules/sample';
import { injectAsyncReducers } from 'store';

import Menu from '../Menu';
import Accordion from "../Accordion";

injectAsyncReducers({
  sample: sampleReducer,
});
//
// componentDidMount() {
//   fetch('https://api.mydomain.com')
//     .then(response => response.json())
// //     .then(data => this.setState({ data }));
// const node = {
//   title: "howdy",
//     childNodes: [
//     {title: "bobby"},
//     {title: "suzie", childNodes: [
//         {title: "puppy", childNodes: [
//             {title: "dog house"}
//           ]},
//         {title: "cherry tree"}
//       ]}
//   ]
// };
// }

// const SampleContainer = () => (
//   <section>
//     <Menu node={node}/>
//   </section>
// );

export default class SampleContainer extends React.Component {
  state = {
    data: {},
    cat: {},
    subcat: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/v1/subcategoriesSecondMethod/1')
      .then(response => response.json())
      .then(data => {this.setState({ data: data })})
  }

  render() {
    return (
      <div>
        {/*{this.state.data.categories ? this.state.data.categories.map((item, index) => <Accordion*/}
          {/*key={index}*/}
          {/*open={false}*/}
          {/*backgroundColor={'#696969'}*/}
          {/*categories={item}*/}
          {/*subcategories={item.subset}/>) : null}*/}
        {this.state.data.categories ? this.state.data.categories.map((item, index) =>
          <Menu key={index} node={item} />
        ) : null}
      </div>
    );
  }
};

