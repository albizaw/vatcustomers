const firstNameRules = {
  required: { value: true, message: 'First name is required' },
  minLength: { value: 2, message: 'First name must be at least 2 characters' },
  maxLength: { value: 30, message: 'First name must not exceed 30 characters' },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: 'First name must only contain letters',
  },
};

const lastNameRules = {
  required: { value: true, message: 'Last name is required' },
  minLength: { value: 2, message: 'Last name must be at least 2 characters' },
  maxLength: { value: 30, message: 'First name must not exceed 30 characters' },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: 'Last name must only contain letters',
  },
};

const addressRules = {
  required: { value: true, message: 'Address is required' },
  minLength: { value: 3, message: 'Address must be at least 5 characters' },
};

const zipCodeRules = {
  required: { value: true, message: 'Zip code is required' },
  pattern: {
    value: /^\d{5}(?:[-\s]\d{4})?$/,
    message: 'Zip code must be valid',
  },
};

const cityRules = {
  required: { value: true, message: 'City is required' },
  minLength: { value: 2, message: 'City must be at least 2 characters' },
  maxLength: { value: 20, message: 'City must not exceed 20 characters' },
};

const vatRules = {
  required: { value: true, message: 'NIP is required' },
  pattern: {
    value: /^[0-9]{10}$/,
    message: 'NIP must be a 10-digit number',
  },
};

export {
  firstNameRules,
  lastNameRules,
  addressRules,
  zipCodeRules,
  cityRules,
  vatRules,
};
