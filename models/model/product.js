import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('volunteer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registry_date: {
      type: DataTypes.DATEONLY,
    },
    identification_number: {
        type: DataTypes.INTEGER(11),
    },
    phone_number: {
        type: DataTypes.STRING(15),
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    street:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    postal_code:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    province :{
        type: DataTypes.STRING,
        allowNull: true,
    },
    country:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female', 'Other'),
    },
    dob_date: {
        type: DataTypes.DATEONLY,
    },
    can_come_to_us :{
        type: DataTypes.ENUM('Social media', 'Friends', 'Neightbourhood', 'Other'),
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Active', 'Removed'),
        default:'Active'
    },
    type_of_skin:{
        type: DataTypes.ENUM('Normal', 'Sensitive'),
        default:'Normal'
    },
    type_of_skin_hydration:{
        type: DataTypes.ENUM('Very Dry', 'Dry', 'Normal'),
        allowNull: true,
    },
    type_of_skin_sebum:{
        type: DataTypes.ENUM('Dry', 'Combination / Oily'),
        allowNull: true,
    },
    pathology:{
        type: DataTypes.ENUM('Psoriasis', 'Dermatitis', 'Vitiligo', 'Lentigo', 'Melasma', 'Acne'),
        allowNull: true,
    },
    picture_img:{
        type: DataTypes.STRING,
        allowNull:true
    },
    terms_policies:{
        type: DataTypes.STRING,
        allowNull:true
    }
  });
};