import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys"
import Response from "../Response";
import { useRouter } from "next/dist/client/router";
import SearchResults from "../components/SearchResults";

function search({ results }) {
    const router = useRouter();

    console.log(results);
    return (
        <div>
            <Head>
               <title>{router.query.term} - Google Search</title>
               <link rel="icon" href="/favicon.ico" />        
            </Head>

            {/* Header */}
            <Header />

            {/* Search Results */}
            <SearchResults results={results} />

        </div>
    )
}

export default search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    // const startIndex = context.query.start || "0";

    const data = useDummyData 
      ? Response 
      : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
    ).then(response => response.json());

    // After the SERVER has rendered... Pass the results to the client..
    return {
        props: {
            results: data,
        },
    };
}
// &start=${startIndex}