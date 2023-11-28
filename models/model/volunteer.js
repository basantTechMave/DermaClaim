// models/volunteer.js
module.exports = function (db) {
  return db.define('volunteer', {
    id: { type: 'serial', key: true },
    name: { type: 'text', required: true },
    surname: { type: 'text', required: true },
    registry_date: { type: 'date', time: false },
    identification_number: { type: 'number', size: 11 },
    phone_number: { type: 'text', size: 15 },
    email: { type: 'text', required: true },
    street: { type: 'text' },
    postal_code: { type: 'text' },
    province: { type: 'text' },
    country: { type: 'text' },
    gender: { type: 'enum', values: ['Male', 'Female', 'Other'] },
    dob_date: { type: 'date', time: false },
    can_come_to_us: { type: 'enum', values: ['Social media', 'Friends', 'Neighbourhood', 'Other'] },
    status: { type: 'enum', values: ['Active', 'Removed'], defaultValue: 'Active' },
    type_of_skin: { type: 'enum', values: ['Normal', 'Sensitive'], defaultValue: 'Normal' },
    type_of_skin_hydration: { type: 'enum', values: ['Very Dry', 'Dry', 'Normal'] },
    type_of_skin_sebum: { type: 'enum', values: ['Dry', 'Combination / Oily'] },
    pathology: { type: 'enum', values: ['Psoriasis', 'Dermatitis', 'Vitiligo', 'Lentigo', 'Melasma', 'Acne'] },
    picture_img: { type: 'text' },
    terms_policies: { type: 'text' },
  });
};
