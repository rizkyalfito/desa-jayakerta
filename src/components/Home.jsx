import Hero from './Hero';
import News from './News';
import Gallery from './Gallery';

const homeContent = [
  { info: "Desa Jayakerta terletak di Karawang, Jawa Barat, Indonesia. Desa ini dikenal dengan keindahan alam dan keramahan penduduknya." },
  { info: "Desa Jayakerta memiliki berbagai fasilitas umum seperti balai desa, tempat ibadah, dan fasilitas kesehatan yang menunjang kehidupan warganya." },
  { info: "Berbagai kegiatan sosial dan budaya secara rutin diadakan di desa ini, termasuk pesta rakyat, gotong royong, dan festival budaya." },
];

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto p-4">
        <section id="home">
          <h2 className="text-2xl font-bold">Tentang Desa Jayakerta</h2>
          {homeContent.map((item, index) => (
            <p key={index} className="mt-2 text-justify">{item.info}</p>
          ))}
        </section>
        <News />
        <Gallery />
      </div>
    </>
  );
};

export default Home;
