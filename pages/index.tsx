import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState, FormEvent, ChangeEvent } from "react";
import { FormDescription, FormField } from "../data/type";

type Props = {
  name?: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const name = context.query.name as string ?? null;

  return {
    props: {
      name,
    },
  };
};

export const getFormDescription = (serviceName: string): FormDescription | undefined => {
  const formsData: FormDescription[] = require('../data/form.json');
  const form = formsData.find((form: FormDescription) => form.services.includes(serviceName));
  const defaultForm = formsData.find((form: FormDescription) => form.services.includes('*'))
  return (form === undefined && serviceName !== '') ? defaultForm : form
};

// récupérer les descriptions de tous les services
export const getServiceDescriptions = (): string[] => {
  const servicesData = require('../data/services.json');

  return servicesData;
};

const HomePage = ({ name = "" }: Props) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [selectedService, setSelectedService] = useState<string>('');
  const serviceDescriptions: string[] = getServiceDescriptions();
  const formDescription: FormDescription | undefined = getFormDescription(selectedService);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
    setSelectedService('');
  };

  const handleServiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };
  return (
    <>
      <Head>
        <title>Appointment Form</title>
      </Head>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="service">DESIRED REVIEW</label>
            <select id="service" name="service" value={selectedService} onChange={handleServiceChange}>
              <option value="">Select a review</option>
              {serviceDescriptions.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
          {formDescription && (
            <div>
              <h2>{formDescription.title}</h2>
              {formDescription.fields.map((input) => (
                <div key={input.name}>
                  <label htmlFor={input.name}>{input.label}:</label>
                  <input type={input.type} id={input.name} name={input.name} onChange={(event) => setFormValues({ ...formValues, [event.target.name]: event.target.value })} />
                </div>
              ))}
              <button type="submit">SEND THE REQUEST</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default HomePage;
