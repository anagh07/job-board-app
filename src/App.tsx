import Hero from './components/Hero';
import Navbar from './components/Navbar';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobsButton from './components/ViewAllJobsButton';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobsButton />
    </>
  );
};

export default App;
