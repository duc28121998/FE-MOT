// import '@testing-library/jest-dom/extend-expect';
// import {configure} from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// process.env.STORE_LOG_DISABLE = true;

// configure({adapter: new Adapter()});

// if (global.document) {
//   document.createRange = () => ({
//     setStart: () => {},
//     setEnd: () => {},
//     commonAncestorContainer: {
//       nodeName: 'BODY',
//       ownerDocument: document,
//     },
//   });
// }

import '@testing-library/jest-dom/extand-expect'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
process.env.STORE_LOG_DISABLE = true

configure({ adapter: new Adapter() })
if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    conmonAncestorContaine: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  })
}
