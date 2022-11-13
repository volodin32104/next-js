import Head from "next/head";
import Heading from "../components/Heading";
import LinkComponent from "next/link";
import Contact from "./[id]";
import { GetStaticProps } from "next";
import { IContact } from "../../types";
import { FC } from "react";

type ContactsType = {
  contacts: [IContact];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<ContactsType> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <LinkComponent href={`/contacts/${id}`} key={id}>
              <li className="card">{name}</li>
            </LinkComponent>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
