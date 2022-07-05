import Hero from '../components/Hero';
import { Navbar, Sidebar, Footer, PageContents } from '../components';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PageContents />
      {/* <Sidebar /> */}
      <Footer />
    </div>
  );
};
export default Landing;
