import { checkUserCreateRequest } from './user-create.lib';

import inputSchema from './user-create.request.json';

test('should validate data', () => {
  const data = {
    email: 'myemail@gmail.com',
    password: '!23awy',
  };

  const result = checkUserCreateRequest(inputSchema, data);
  expect(result).toBe(true);
});

test('should not validate data', () => {
  const data = {
    email: 'tadaaaaaa',
    password: 'oyo?!!!',
  };

  try {
    checkUserCreateRequest(inputSchema, data);
    throw new Error('should not go here');
  } catch (e) {
    expect(e).toBeDefined();
  }
});
