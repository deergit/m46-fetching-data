import { Wrapper } from "./Home.styles";

const Home = () => {
    return (
        <div className="Page">
            <Wrapper>
                <h1>Welcome to a test site for the Art Institute of Chicago's API</h1>
                <h3>it's very nice</h3>
                <p>Home to a collection of art that spans centuries and the globe, the Art Institute of Chicago is located in the heart of the city—and is one of TripAdvisor’s Top US Attractions of 2022.<br/><br/>Please visit the Gallery page to view some lovely art.</p>
            </Wrapper>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/20070622_Art_Institute_of_Chicago_Front_View.JPG/1920px-20070622_Art_Institute_of_Chicago_Front_View.JPG" alt="the chicago art institute building"></img>
        </div>
    )
}

export default Home;