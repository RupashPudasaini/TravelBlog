
import Layout from '../app/layout';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import '../app/globals.css';

const Map = dynamic(() => import('./map'), { ssr: false });

const Home: React.FC = () => {
  return (
    <Layout>
      <Map />
      <div className="overlay">
      <Image
      id='profilePhoto'
      src="/rupash.jpg"
      width={100}
      height={100}
      alt='rupashPhoto'
      />
      </div>
    </Layout>
  );
};

export default Home;
