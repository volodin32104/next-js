import Head from "next/head";
import ContactInfo from "../components/ContactInfo";
import { GetServerSideProps } from "next";
import { IContact } from "../../types";
import { FC } from "react";

type ContactProps = {
  contact: IContact;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact: FC<ContactProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>`Contact name : ${contact.name}`</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};
export default Contact;
