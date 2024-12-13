

export default function Home() {
  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Kontakt</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Hier können Sie mich kontaktieren.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a href="mailto:mail@ubejdullah-gashi.ch">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">mail@ubejdullah-gashi.ch</p>
                    </div>
                </a>
                <a href="tel:0779694627">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-phone fa-2x" />
                        <p className="font-semibold text-xl">077 969 46 27</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}