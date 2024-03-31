import Image from "next/image";

export default function Home() {
  return (
 <div>
<section
id="hero" className="text-gray-400 h-screen bg-gray-900 text-center flex">
  <h1 className="m-auto font-waterfall text-7xl text-white font-bold ">Hero</h1>
</section>
<section
id="blogs" className="text-gray-400 h-screen bg-gray-900 text-center flex">
  <h1 className="m-auto font-waterfall text-7xl text-white font-bold ">Blog</h1>
</section>
<section
id="contact" className="text-gray-400 h-screen bg-gray-900 text-center flex">
  <h1 className="m-auto font-waterfall text-7xl text-white font-bold ">Contact</h1>
</section>
<section
id="projects" className="text-gray-400 h-screen bg-gray-900 text-center flex">
  <h1 className="m-auto font-waterfall text-7xl text-white font-bold ">Projects</h1>
</section>

 </div>
  );
}
