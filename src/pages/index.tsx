import Navbar from "@/components/header/navbar"
import Main from "@/components/main/main"
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
      <title>Rest Country API</title>
    </Head>
      <Navbar />
      <Main /> 
    </>
  )
}
