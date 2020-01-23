import Ajv from 'ajv';

export const checkUserCreateRequest = (
  schema: object,
  data: object,
): boolean => {
  const ajv = new Ajv();
  const valid = ajv.validate(schema, data);

  if (valid) return true;
  throw new Error(ajv.errors?.toString());
};
