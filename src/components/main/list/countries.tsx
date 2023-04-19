import Image from "next/image";
import CallCountriesAPI from "@/hooks/request-countries"

interface CountryCardProps {
    Flag: string;
    FlagAlt: string;
    Name: string;
    Population: number;
    Region: string;
    Capital: string[];
}

function CountryCardComponent({Flag, FlagAlt, Name, Population, Region, Capital} : CountryCardProps) {
    return (
        <div className="flex flex-col">
            <Image className="rounded-t-md w-full h-[200px] object-cover" src={Flag} alt={FlagAlt} width={300} height={200} />
            <div className="bg-white dark:bg-very-dark-blue rounded-b-md p-8 gap-y-4">
                <h2 className="font-bold text-xl mb-4 w-full">{Name}</h2>
                <p><b className="font-semibold">Population: </b>{Population}</p>
                <p><b className="font-semibold">Region: </b>{Region}</p>
                <p><b className="font-semibold">Capital: </b>{Capital}</p>
            </div>
        </div>
    )
}

export default function CountriesList() {
    const { countries, loading } = CallCountriesAPI();

    if(loading) return <h1>Loading...</h1>

    console.log(countries);

    return (
        <div className="mt-8 px-8 grid place-content-center md:grid-cols-4 gap-8">
            {countries.slice(0, 8).map(index => {
                const CountryProperties = {
                    Flag: index.flags.svg,
                    FlagAlt: index.flags.alt,
                    Name: index.name.official,
                    Population: index.population,
                    Region: index.region,
                    Capital: index.capital
                }
                return <CountryCardComponent key={index.name.official} {...CountryProperties}/>
            })}
        </div>
    )
}