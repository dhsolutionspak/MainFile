// pages/index.jsx

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/home',
      permanent: false, // Set to true if it's a permanent redirect (308)
    },
  };
}

const Index = () => {
  return null; // Optional: you can render a loading spinner or null here
};

export default Index;
