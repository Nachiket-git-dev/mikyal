export class Customer {
    id: number;
    client_id:number;
    imageSrc: string;
    first_name: string;
    last_name: string;
    street: string;
    zip: number;
    city: string;
    phone: string;
    email: string;
    labels: any;
  
    constructor(customer) {
      this.id = customer.client_id;
      this.imageSrc = customer.imageSrc;
      this.first_name = customer.first_name;
      this.last_name = customer.last_name;
      this.street = customer.street;
      this.zip = customer.zip;
      this.city = customer.city;
      this.phone = customer.phone;
      this.email = customer.email;
      this.labels = customer.labels;
    }
  
    get name() {
      let name = '';
  
      if (this.first_name && this.last_name) {
        name = this.first_name + ' ' + this.last_name;
      } else if (this.first_name) {
        name = this.first_name;
      } else if (this.last_name) {
        name = this.last_name;
      }
  
      return name;
    }
  
    set name(value) {
    }
  
    get address() {
      return `${this.street}, ${this.zip} ${this.city}`;
    }
  
    set address(value) {
    }
  }