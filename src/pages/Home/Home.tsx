import { HomeComponent, HomePageVideo, HomeTitle } from "./styles";

function Home() {
  return (
    <HomeComponent>
      <HomeTitle>Technology Park</HomeTitle>
      <HomePageVideo autoPlay muted loop id="homePageVideo">
        <source
          src="https://cdn.pixabay.com/video/2023/10/01/183107-870151708_large.mp4"
          type="video/mp4"
        />
      </HomePageVideo>
    </HomeComponent>
  );
}

export default Home;
