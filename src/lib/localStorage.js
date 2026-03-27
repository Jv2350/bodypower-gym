const isBrowser = typeof window !== 'undefined';

const readCollection = (key) => {
  if (!isBrowser) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error(`Failed to read local storage key "${key}"`, error);
    return [];
  }
};

const writeCollection = (key, items) => {
  if (!isBrowser) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(items));
};

const createRecord = (payload) => ({
  id: crypto.randomUUID(),
  created_at: new Date().toISOString(),
  ...payload
});

export const saveContactInquiry = (inquiry) => {
  const key = 'bodypower_contact_inquiries';
  const items = readCollection(key);
  const record = createRecord({ ...inquiry, status: 'pending' });
  items.unshift(record);
  writeCollection(key, items);
  return record;
};

export const saveMembershipApplication = (application) => {
  const key = 'bodypower_membership_applications';
  const items = readCollection(key);
  const record = createRecord({ ...application, status: 'pending' });
  items.unshift(record);
  writeCollection(key, items);
  return record;
};
