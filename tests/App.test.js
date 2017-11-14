import { shallow } from 'vue-test-utils';
import App from './../src/App.vue';

describe('Commenter', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(App);
  });

  it('starts with an empty list', () => {
    expect(cmp.vm.comments).toEqual([]);
  });

  it('adds comments', () => {
    cmp.vm.addComment('test');

    expect(cmp.vm.comments).toContain('test');
  });
});
