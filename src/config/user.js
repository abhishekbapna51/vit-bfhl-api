const toSnake = (s) => s.trim().toLowerCase().replace(/\s+/g, '_');

exports.userMeta = () => {
  const fullName = process.env.FULL_NAME || 'john doe';
  const dob = process.env.DOB_DDMMYYYY || '17091999';
  const email = process.env.EMAIL || 'john@xyz.com';
  const roll = process.env.ROLL_NUMBER || 'ABCD123';

  return {
    user_id: `${toSnake(fullName)}_${dob}`,
    email,
    roll_number: roll
  };
};
