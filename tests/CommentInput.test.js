import { shallow } from 'vue-test-utils';
import CommentInput from '../src/components/CommentInput.vue';

describe('Comment Input', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(CommentInput);
  });

  it('calls addComment when pressing enter', () => {
    const spy = jest.spyOn(cmp.vm, 'addComment');
    cmp.vm.comment = 'test';

    cmp.find('.creator').trigger('keyup.enter');

    expect(spy).toBeCalled();
  });

  it('emits "add" with the comment when calling addComment and clears comment', () => {
    const stub = jest.fn();
    cmp.vm.$on('add', stub);
    cmp.vm.comment = 'test';

    cmp.vm.addComment();

    expect(stub).toBeCalledWith('test');
    expect(cmp.vm.comment).toBe('');
  });

  it('reverses the input', () => {
    cmp.vm.comment = 'test';

    expect(cmp.vm.reversedInput).toBe('tset');
  });

  it('logs comments while being written', done => {
    const spy = jest.spyOn(console, 'log');

    cmp.vm.comment = 'vue!';

    cmp.vm.$nextTick(() => {
      expect(spy).toBeCalledWith('vue!');
      done();
    })
  });
});
