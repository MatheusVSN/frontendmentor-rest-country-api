import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

import { BsArrowLeft } from "react-icons/bs";

import Navbar from "@/components/header/navbar";

interface ContextType {
  params: {
    id: string;
  };
}

interface CountryProperties {
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  name: {
    common: string;
  };
  altSpellings: string[];
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  currencies: Object;
  languages: string[];
  borders: string[];
}

function TextComponent({
  Information,
  Value,
}: {
  Information: string;
  Value: string | number;
}) {
  return (
    <p className="text-xl">
      <b className="font-bold">{Information}: </b>
      {Value}
    </p>
  );
}

function MultipleTextComponent({
  Information,
  Value,
}: {
  Information: string;
  Value: Object;
}) {
  return (
    <p className="text-xl">
      <b className="font-bold">{Information}: </b>
      {Object.values(Value).join(", ")}
    </p>
  );
}

function BorderCountryComponent({ Name }: { Name: string }) {
  return (
    <Link
      className="h-12 w-32 px-4 flex items-center gap-4 bg-white dark:bg-very-dark-blue rounded-sm drop-shadow-md"
      href={`/country/${Name}`}
    >
      <button className="h-full w-full">{Name}</button>
    </Link>
  );
}

export default function CountryPage(props: { country: any[] }) {
  const country: CountryProperties = props.country[0];

  return (
    <>
      <Head>
        <title>{country.name.common} - Information</title>
      </Head>
      <Navbar />
      <div className="mt-8 px-8">
        <Link href={"/"}>
          <button className="h-12 w-32 px-4 flex items-center gap-4 bg-white dark:bg-very-dark-blue rounded-sm drop-shadow-md">
            <BsArrowLeft />
            Go back
          </button>
        </Link>
        <div className="grid place-content-center">
          <div className="mt-8 px-8 flex flex-col gap-y-4">
            <Image
              className="max-md:w-full"
              src={country.flags.svg}
              alt={country.flags.alt}
              width={500}
              height={300}
            />
            <p className="font-bold text-3xl mb-4">{country.name.common}</p>
            <TextComponent
              Information="Native name"
              Value={country.altSpellings[1]}
            />
            <TextComponent
              Information="Population"
              Value={country.population}
            />
            <TextComponent Information="Region" Value={country.region} />
            <TextComponent Information="Sub Region" Value={country.subregion} />
            <TextComponent Information="Capital" Value={country.capital} />
            <div className="mt-4"></div>
            <TextComponent
              Information="Top Level Domain"
              Value={country.tld[0]}
            />
            <TextComponent
              Information="Currencies"
              Value={Object.values(country.currencies)[0].name}
            />
            <MultipleTextComponent
              Information="Languages"
              Value={country.languages}
            />
            <div className="mt-4"></div>
            <p className="font-bold text-2xl mb-4">Border Countries:</p>

            <div className="flex flex-row flex-wrap items-center gap-4 w-full">
              {country.borders ? (
                country.borders.map((border: string) => {
                  return <BorderCountryComponent key={border} Name={border} />;
                })
              ) : (
                <p className="text-xl">No border countries</p>
              )}
            </div>

            <div className="mt-8"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: ContextType) {
  const { id } = context.params;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  const country = await res.json();

  return { props: { country } };
}
