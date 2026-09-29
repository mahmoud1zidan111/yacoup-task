export default class Client {
  constructor(id, firstName, lastName, email, password, phone) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }

  validate() {
    const errors = {};

    if (!/^[A-Za-z ]{2,}$/.test(this.firstName)) {
      errors.firstName = "Invalid first name";
    }

    if (!/^[A-Za-z ]{2,}$/.test(this.lastName)) {
      errors.lastName = "Invalid last name";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      errors.email = "Invalid email";
    }

    if (this.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!/^(010|011|012)\d{8}$/.test(this.phone)) {
      errors.phone = "Invalid phone number";
    }

    return errors;
  }
}
