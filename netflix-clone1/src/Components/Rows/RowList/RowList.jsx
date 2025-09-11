import Row from "../Row/Row"
import requests from "../../../Utils/requests"

const RowList = () => {
  return (
    <>
      <Row  title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}
      />
      <Row title="Tranding Now"
           fetchUrl={requests.fetchTrending} 
      />
      <Row title="Top Rated Movies"
            fetchUrl={requests.fetchTopRatedMovies}
      />
      <Row title="Action Movies"
            fetchUrl={requests.fetchActionMovies}  
      />
      <Row title="Comedy Movies" 
            fetchUrl={requests.fetchComedyMovies}/> 
      <Row title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}/> 
       <Row title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}/> 
    <Row  title="Documentaries"
           fetchUrl={requests.fetchDocumentaries}/>
           <Row  title="Animations"
                fetchUrl={requests.fetchAnimation}/>
        <Row title="Drama"
              fetchUrl={requests.fetchDrama}/>
        <Row  title="Family Movies"
              fetchUrl={requests.fetchFamily}/>
    </>
  )
}

export default RowList
