const { customAlphabet } = require('nanoid');
const { v4, v7 } = require('uuid');

// Excludes ambiguous characters: 0/O and 1/I
const uidAlphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
// Cache NanoID generators by length
const uidGenerators = new Map();
// Lazily creates and caches a NanoID generator per UID size
const getUidGenerator = (size) => {
  if (!uidGenerators.has(size)) {
    uidGenerators.set(size, customAlphabet(uidAlphabet, size));
  }
  return uidGenerators.get(size);
};

const identifier = {
  uid(size = 21) {
    const uidGenerator = getUidGenerator(size);
    return uidGenerator();
  },
  uuid(version = Number(process.env.UUID_VERSION) || 4) {
    if (version === 4) return v4();
    if (version === 7) return v7();
    throw new TypeError(`UUID version must be 4 or 7. Received: ${version}`);
  },
};

module.exports = identifier;

// UUID:
// v4 (random-based) is the most widely used and supported UUID version.
// v7 (time-ordered, random-based) is the newest UUID standard.
// v1 / v2 expose timestamp and hardware information (privacy concerns).
// v3 / v5 are name-based and deterministic, unsuitable for opaque IDs.
// v6 is an intermediate draft and largely superseded by v7.
