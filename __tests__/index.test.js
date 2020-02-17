import ReactDOM from 'react-dom';
import renderToDOM from '../src/index';
import '../__mocks__/window';

ReactDOM.render = jest.fn();
describe('test index', () => {
  it('should call ReactDOM.render', () => {
    renderToDOM();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
