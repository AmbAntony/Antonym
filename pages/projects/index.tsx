"use client";

export default function Projects() {
  return (
    <section className="px-6 py-10">

      <div className="flex gap-6">
        {/* Image Link 1 */}
        <a
          href="https://marini-shop.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="/image1.png" // <-- replace with your actual image
            alt="Project 1"
            className="w-[300px] h-[390px] rounded-xl shadow-md
                       transition-transform duration-300
                       group-hover:-translate-y-2 group-hover:scale-105"
          />
        </a>

        {/* Image Link 2 */}
        <a
          href="https://tikohub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="/image2.png" // <-- replace with your actual image
            alt="Project 2"
            className="w-[300px] h-[400px] rounded-xl shadow-md
                       transition-transform duration-300
                       group-hover:-translate-y-2 group-hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
}
