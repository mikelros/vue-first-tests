import { mount } from 'vue-test-utils';
import CommentList from './../src/components/CommentList.vue';

describe('Comment List', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(CommentList, {
      propsData: {
        comments: []
      }
    });
  });

  it('has expected structure when no comments given', () => {
    expect(cmp.element).toMatchSnapshot();
  });

  it('has expected structure when some comments given', () => {
    cmp.vm.comments = ['this', 'is', 'a', 'test'];
    cmp.update();

    expect(cmp.element).toMatchSnapshot();
  });
});
