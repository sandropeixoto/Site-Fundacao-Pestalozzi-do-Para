/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import HowWeHelp from './sections/HowWeHelp';
import Programs from './sections/Programs';
import Differentials from './sections/Differentials';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <HowWeHelp />
        <Programs />
        <Differentials />
      </main>
      <Footer />
    </div>
  );
}
