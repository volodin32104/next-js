import { FC } from "react";
import { IContact } from "../../types";
import Heading from "./Heading";

type ContactInfoProps = {
  contact: IContact;
};

const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
  const { name, email, phone, address } = contact || {};
  const { suite, city, zipcode } = address || {};

  if (!contact) {
    return <Heading tag="h3" text="Contact is empty" />;
  }
  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Phone: </strong>
        {phone}
      </div>
      <div>
        <strong>Address:</strong>
        {`${suite}, ${city}, ${zipcode} `}
      </div>
    </>
  );
};

export default ContactInfo;
