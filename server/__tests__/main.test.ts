import { port } from '../src/main.js';

describe('app', () => {

  // Assert greeter result
  it('is listening on a valid port', () => {
    expect(port).toBeTruthy();
  });
});
