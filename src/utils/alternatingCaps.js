// Start Uppercase, then lowercase, alternating across the whole string.
exports.alternatingCaps = (s) => {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    // Force alpha normalization then alternate case
    const upper = ch.toUpperCase();
    out += (i % 2 === 0) ? upper : upper.toLowerCase();
  }
  return out;
};
