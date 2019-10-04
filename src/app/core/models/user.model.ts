
interface UserLink {
  self: {
    href: string;
  };
  edit: {
    href: string;
  };
  avatar: {
    href: string;
  };
}
export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  status: string;
  _links: UserLink;
}

export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public dob: string;
  public email: string;
  public phone: string;
  public website: string;
  public address: string;
  public status: string;
  public links: UserLink;

  constructor(
    id,
    firstName,
    lastName,
    gender,
    dob,
    email,
    phone,
    website,
    address,
    status,
    links
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.dob = dob;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = address;
    this.status = status;
    this.links = links;
  }

  static fromJson(json: UserData) {
    const {
      id = null,
      first_name = null,
      last_name = null,
      gender = null,
      dob = null,
      email = null,
      phone = null,
      website = null,
      address = null,
      status = null,
    _links = null,
    } = json;

    return new User(id, first_name, last_name, gender, dob, email, phone, website, address, status, _links);
  }
}
