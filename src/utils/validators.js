exports.validatePayload = (body) => {
  if (!body || typeof body !== 'object')
    return { ok: false, error: 'Body must be a JSON object.' };

  if (!('data' in body))
    return { ok: false, error: 'Missing "data" field.' };

  if (!Array.isArray(body.data))
    return { ok: false, error: '"data" must be an array.' };

  // Numbers must be returned as strings → ensure all inputs are strings by spec
  // The problem statement examples pass strings like "1", "334".
  // We accept anything, but we stringify internally. No hard failure here.
  return { ok: true };
};
