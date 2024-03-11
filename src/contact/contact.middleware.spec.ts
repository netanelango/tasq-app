import { ContactMiddleware } from './contact.middleware';

describe('ContactMiddleware', () => {
  it('should be defined', () => {
    expect(new ContactMiddleware()).toBeDefined();
  });
});
