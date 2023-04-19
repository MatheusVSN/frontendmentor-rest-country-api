import { useRouter } from "next/router";
import Head from "next/head";

export default function CountryPage() {
  const router = useRouter();

  const countryInformation = router.query.information
    ? JSON.parse(router.query.information)
    : {};

  console.log(typeof router, router);
  return (
    <>
      <Head>
        <title>{countryInformation.name.common} - Information</title>
      </Head>
    </>
  );
}
