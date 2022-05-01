class Contact {

  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNo = params[6];
    this.email = params[7];
  }

  get firstName() {return this._firstName;}
  set firstName(firstName) { 
      const nameRegexPattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (nameRegexPattern.test(firstName)) this._firstName = firstName;
      else throw "Invalid First Name";
  }
  
  get lastName() {return this._lastName;}
  set lastName(lastName) {
      const nameRegexPattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (nameRegexPattern.test(lastName)) this._lastName = lastName;
      else throw "Invalid Last Name";
  }
  
  get address() {return this._address;}
  set address(address) {
      const locationRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
      if(locationRegex.test(address))this._address = address; 
      else throw "Invalid Address";
  }
  
  get city() {return this._city;}
  set city(city) {
      const locationRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
      if(locationRegex.test(city))this._city = city; 
      else throw "Invalid City";
  }
  
  get state() {return this._state;}
  set state(state) {
      const locationRegex = RegExp("^[A-Z]{1}[a-zA-Z ]{3,}$");
      if(locationRegex.test(state))this._state = state; 
      else throw "Invalid State";
  }
  
  get zip() {return this._zip;}
  set zip(zip) {
      const pinRegex = RegExp("^[0-9]{6}$");
      if(pinRegex.test(zip))this._zip = zip;
      else throw "Zip is Invalid";
  }
  
  get phoneNo() {return this._phoneNo;}
  set phoneNo(phoneNo) {
      const phoneRegex = RegExp("^([+][0-9]{2})?[0-9]{10}$");
      if(phoneRegex.test(phoneNo)) this._phoneNo = phoneNo;
      else throw "Invalid Phone No";
  }
  
  get email() {return this._email;}
  set email(email) {
      const emailRegex = RegExp("^[A-Za-z0-9.+-]{1,}[a-zA-Z0-9]@[a-z0-9]{1,}.(co|org|com|in|us|net|au|com.com|com.au)$");
      if(emailRegex.test(email)) this._email = email;
      else throw "Invalid Email";
  }

  toString(){
      return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : "+ this.address + 
      ", city : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone No : "+ this.phoneNo + ", Email : "+ this.email;
  }
} 

let addressBookArr = new Array();
function contactExists(fName, lName){
  return addressBookArr.some(u => u.firstName == fName && u.lastName == lName);
}

function editContact(fName, lName, property, value){
  if(contactExists(fName, lName)){
  switch(property){
      case "address":
          addressBookArr.find((contact) => contact.firstName == fName).address = value;
          break;
      case "city":
          addressBookArr.find((contact) => contact.firstName == fName).city = value;
          break;
      case "state":
          addressBookArr.find((contact) => contact.firstName == fName).state = value;
          break;
      case "zip":
          addressBookArr.find((contact) => contact.firstName == fName).zip = value;
          break;
      case "phone":
          addressBookArr.find((contact) => contact.firstName == fName).phoneNo = value;
          break;
      case "email":
          addressBookArr.find((contact) => contact.firstName == fName).email = value;
          break;
      default:
          console.log("Enter valid property");
  }
}else{
    console.log("Contact Does Not Exist");
}
}

function deleteContact(fName,lName){
    let deleteContact = contactExists(fName,lName);
    if(contactExists(fName,lName)){
        addressBookArr.pop(contactExists(fName,lName));
     console.log("Contact "+fName+" "+lName+" removed successfully!!");
 }  else{
     console.log("Contact "+fName+" "+lName+" does not exist!");
 }
}
try{
addressBookArr.push(new Contact("Harsha", "Lohar", "Meeranagar", "Mumbai", "Maharastra", "500849", "+919100887766", "Harsha@gmail.com"));
}catch(e){
   console.error(e);
}
try{
  addressBookArr.push(new Contact("Sanjay", "Sah", "County", "Hyderabad", "Telangana", "500049", "9080706050", "mahesh@gmail.com"));
}catch(e){
  console.error(e);
}
console.log(addressBookArr);

editContact("Sanjay", "Sah", "address", "Bihar");
console.log(addressBookArr);

deleteContact("Sanjay", "Sah");
console.log(addressBookArr);
