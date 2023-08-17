export const Brainstorm = () => {
    return (
        <section className="mt-16 mb-16 mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1-6_qXA48htfG1dpM7xDRBNnVHXKSGRi_mw3PMFu7Szc/view"
          className="group relative h-96 w-full cursor-pointer overflow-hidden rounded-xl "
        >
          img
          <div className="absolute inset-0 z-10 flex h-full w-full flex-col justify-between bg-black/50 transition-all group-hover:bg-black/70">
            <div className="p-4 font-bold">
              <p className="text-md text-gray-300">RESUMO</p>
              <p className="text-3xl ">View or Download Resume in PDF</p>
            </div>
            <div className="flex items-center justify-between gap-3  p-2 backdrop-blur-md">
              <div className="flex items-center gap-3 p-2">
                img
                <div className="w-full overflow-hidden">
                  <p className="font-bold">PDF RESUMO </p>
                  <p className="truncate text-sm">Google Drive External Link</p>
                </div>
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2  text-sm font-semibold">
                Visitar
              </div>
            </div>
          </div>
        </a>
        <div className="w-full rounded-xl border p-4 lg:col-span-2">
          <div className="font-bold">
            <p className="text-md text-white/75">APPS</p>
            <p className="text-3xl ">ULTIMOS LANÇAMENTOS</p>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            {[
              {
                name: "Memory",
                description: "Web Application",
                url: "/blog/memory",
                logo: "/images/memory-logo.png",
              },
              {
                name: "BusinessIT",
                description: "Redesign",
                logo: "/images/businessit-logo.png",
                url: "/blog/businessit",
              },
              {
                name: "Ubrand",
                description: "Web Application",
                logo: "/images/ubrand-logo.png",
                url: "/blog/ubrand",
              },
            ].map((item) => {
              return (
                <div className="flex items-center justify-between gap-3 rounded-lg p-2 hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    img
                    <div className="w-full overflow-hidden">
                      <p className="font-bold">{item.name}</p>
                      <p className="truncate text-sm">{item.description}</p>
                    </div>
                  </div>
                  <a
                    href={item.url}
                    className="rounded-full bg-white/10 px-4 py-2  text-sm font-semibold"
                  >
                    Visitar
                  </a>
                </div>
              )
            })}
          </div>

          <div className="mt-3 w-full text-center">
            link
          </div>
        </div>
        <div className="relative h-96 w-full overflow-hidden rounded-xl bg-[#23293C] ">
          <div
            className="p-4 font-bold"
            style={{
              zIndex: 14,
              position: "absolute",
              background: "linear-gradient(180deg, #23293c, transparent)",
              width: "100%",
            }}
          >
            <p className="text-md text-white/75">TECNOLOGIAS</p>
            <p className="text-3xl ">fERRAMENTAS e Frameworks</p>
          </div>
          img
        </div>
        <div className="grid  w-full grid-cols-1 gap-4 lg:col-span-2 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border">
            <p>TECNOLOGIAS</p>
            <p>fERRAMENTAS E Frameworks favoritos</p>
            img
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/community/file/1270173776891030529/Portfolio---React-NextJS"
            className="flex items-center rounded-xl border bg-white/10 p-4 font-bold hover:bg-white/20"
          >
            <div>
              <p className="text-lg text-white/75">FIGMA</p>
              <p className="text-3xl ">Visit Portfolio</p>
            </div>
          </a>
        </div>
      </section>
    )
}