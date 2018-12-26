import hello from '../hello'
import {expect} from 'chai'

describe('hello', () => {
  it('should give hello words to given name', () => {
    const words = hello('typescript');
    expect(words).to.equal('Hello, typescript!')
  });
});

