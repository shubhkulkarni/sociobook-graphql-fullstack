const validator = require("validator");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "name is required"], minLength: 2 },
    email: {
      type: String,
      required: [true, "email id is required"],
      unique: [true, "email id already exists"],
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "email id is invalid"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      trim: true,
      minLength: 8,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, "confirmPassword is required"],
      trim: true,
      minLength: 8,
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "passwords don't match",
      },
    },
    profileImage: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    city: {
      type: String,
    },
    profession: {
      type: String,
    },
    hobbies: {
      type: [String],
    },
    followers:[
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    following:[
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 8);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.matchPasswords = async function (reqPW, dbPW) {
  return await bcrypt.compare(reqPW, dbPW);
};
const User = model("User", userSchema);

module.exports = User;
