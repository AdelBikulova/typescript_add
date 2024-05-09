import { HomeComponent } from "./styles";

function Home (){
    return (
      <HomeComponent>
        <video autoPlay muted loop id="myVideo">
          <source src="https://cdn.pixabay.com/video/2023/10/01/183107-870151708_large.mp4" type="video/mp4" />
        </video>
        </HomeComponent>
    );
}

export default Home;