import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface CountryCardProps {
  Flag: string;
  FlagAlt: string;
  Name: string;
  Population: number;
  Region: string;
  Capital: string;
}

interface CountryProps {
  flags: {
    png: string,
    svg: string,
    alt: string
  },
  cca3: string,
  name: {
    common: string
  },
  population: number,
  region: string,
  capital: string,
}

function CountryCardComponent({
  Flag,
  FlagAlt,
  Name,
  Population,
  Region,
  Capital,
}: CountryCardProps) {
  return (
    <div className="flex flex-col drop-shadow-md transition hover:scale-105 hover:cursor-pointer">
      <Image
        className="rounded-t-md w-auto h-[200px] object-cover"
        src={Flag}
        alt={FlagAlt || Name}
        width={300}
        height={200}
      />
      <div className="bg-white dark:bg-very-dark-blue rounded-b-md p-8 gap-y-4 h-[225px]">
        <h2 className="font-bold text-xl mb-4 w-full">{Name}</h2>
        <p>
          <b className="font-semibold">Population: </b>
          {Population}
        </p>
        <p>
          <b className="font-semibold">Region: </b>
          {Region}
        </p>
        <p>
          <b className="font-semibold">Capital: </b>
          {Capital}
        </p>
      </div>
    </div>
  );
}

function LoadingCardComponent() {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-200 h-[200px] w-[300px] rounded-t-md"></div>
      <div className="bg-slate-100 h-[225px] w-[300px] rounded-b-md"></div>
    </div>
  );
}

export default function CountriesList({
  countries,
  loading,
  query,
  region,
}: {
  countries: [];
  loading: boolean;
  query: string;
  region: string;
}) {
  if (loading) return <h1>Loading</h1>;

  function FilterCountries() {
    return countries.filter((country: CountryProps) => {
      return (
        country.name.common.toLowerCase().includes(query.toLowerCase()) &&
        country.region.toLowerCase().includes(region.toLowerCase())
      );
    });
  }

  return (
    <div className="mt-8 px-8 grid place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {FilterCountries().map((index : CountryProps) => {
        const CountryProperties = {
          Flag: index.flags.svg,
          FlagAlt: index.flags.alt,
          Name: index.name.common,
          Population: index.population,
          Region: index.region,
          Capital: index.capital,
        };
        return (
          <Link
            href={{
              pathname: `/country/[country]`,
              query: { country: index.cca3 },
            }}
            key={index.name.common}
          >
            <CountryCardComponent {...CountryProperties} />
          </Link>
        );
      })}
    </div>
  );
}
