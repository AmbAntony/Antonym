"use client";

export default function Projects() {
  return (
    <section className="px-6 py-5">

      <div className="flex gap-6">
        {/* Image Link 1 */}
        <a
          href="https://marini-shop.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="/image1.png" 
            alt="Project 1"
            className="w-[200px] h-[300px] rounded-xl shadow-md
                       transition-transform duration-300
                       group-hover:-translate-y-2 group-hover:scale-105"
          />
          <p className="mt-2 text-center font-serif text-blue-100">Marini Shop</p>
        </a>

        {/* Image Link 2 */}
        <a
          href="https://tikohub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="/image2.png" 
            alt="Project 2"
            className="w-[200px] h-[300px] rounded-xl shadow-md
                       transition-transform duration-300
                       group-hover:-translate-y-2 group-hover:scale-105"
          />
          <p className="mt-2 text-center font-serif text-blue-100">Ticket Hub</p>
        </a>
      </div>
    </section>
  )
}
