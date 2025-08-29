const { validatePayload } = require('../utils/validators');
const { parseData } = require('../services/parser.service');
const { userMeta } = require('../config/user');

exports.postBfhl = (req, res, next) => {
  try {
    const validation = validatePayload(req.body);
    if (!validation.ok) {
      return res.status(200).json({
        is_success: false,
        ...userMeta(),
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: "",
        error: validation.error
      });
    }

    const result = parseData(req.body.data);
    return res.status(200).json({
      is_success: true,
      ...userMeta(),
      ...result
    });
  } catch (err) {
    next(err);
  }
};
