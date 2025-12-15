import '../styles/globals.css';
import ThemeToggleButton from '../components/ThemeToggleButton';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Book from '@/sections/Book';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Book />
    </>
  );
}
