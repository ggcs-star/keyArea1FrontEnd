import React from 'react';

const contactInfo = {
  heading: "GET IN TOUCH",
  address: "PO Box 97845 State st. 557, Los Angeles, California, US.",
  emails: [
    { label: "hello@ed.com", icon: "fas fa-envelope" },
    { label: "apply@ed.com", icon: "far fa-paper-plane" },
  ],
  phoneNumbers: [
    { number: "(+554) 31 85 409", icon: "fas fa-phone-alt" },
    { number: "(+554) 31 85 409", icon: "fas fa-phone-alt" },
    { number: "(+554) 31 85 409", icon: "fas fa-phone-alt" },
  ],
};

const Contact = () => {
  return (
    <div className="">
      {/* Heading Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white">{contactInfo.heading}</h2>
      </div>

      {/* Main Section: 2 columns for address and emails / phone numbers */}
      <section className="grid grid-cols-1 md:grid-cols-1 lg:w-[25vw] gap-8">
        {/* Left Column: Address & Emails */}
        <div>
          {/* Address */}
          <ul className="space-y-4">
            <li className="flex items-center text-gray-300 hover:text-white">
              <i className="fas fa-map-marker-alt text-primary mr-2"></i>
              <span>{contactInfo.address}</span>
            </li>
          </ul>

          {/* Emails */}
          <ul className="space-y-4 mt-6">
            {contactInfo.emails.map((email, index) => (
              <li key={index} className="flex items-center text-gray-300 hover:text-white">
                <i className={`${email.icon} text-primary mr-2`}></i>
                <span>{email.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Phone Numbers */}
        <div>
          <ul className="space-y-4">
            {contactInfo.phoneNumbers.map((phone, index) => (
              <li key={index} className="flex items-center text-gray-300 hover:text-white">
                <i className={`${phone.icon} text-primary mr-2`}></i>
                <span>{phone.number}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
