import {shallow} from 'vue-test-utils';
import Randomizer from './../src/components/Randomizer.vue';

describe('Randomizer', () => {
  let randomizer;

  beforeEach(() => {
    randomizer = shallow(Randomizer);
  });

  it('calls fetchRandomWord when is clicked', () => {
    const stub = jest.fn();
    randomizer.setMethods({
      fetchRandomWord: stub
    });

    randomizer.find('button').trigger('click');

    expect(stub).toBeCalled();
  });

  it('fetches a random word', done => {
    global.fetch = jest.fn(() => Promise.resolve({json: () => ({id: 1, word: 'lime'})}));

    const randomWordPromise = randomizer.vm.fetchRandomWord();

    randomWordPromise.then(word => {
      expect(word).toEqual('lime');
      done();
    });
  });

  it('emits add when word fetched', done => {
    const stub = jest.fn();
    randomizer.vm.$on('add', stub);
    global.fetch = jest.fn(() => Promise.resolve({json: () => ({id: 1, word: 'lime'})}));

    const randomWordPromise = randomizer.vm.fetchRandomWord();

    randomWordPromise.then(() => {
      expect(stub).toBeCalledWith('lime');
      done();
    });
  });
});
