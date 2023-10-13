import Link from "next/link"
import Image from "next/image"

function Prospectos() {
  return (
    <section className="flex flex-col gap-5 container max-w-screen-xl mx-auto w-[90%] pt-10 pb-10">
        <Link 
            href='/cita'
            className="border-2 border-gray-400 flex items-center gap-3 rounded-md p-4 hover:bg-slate-200"
        >
            <Image src='/pencil.svg' alt="lapiz" width={45} height={45} />Quiero sacar una cita para mi
        </Link>
        <Link 
            href='/cita-2'
            className="border-2 border-gray-400 flex items-center gap-3 rounded-md p-4 hover:bg-slate-200"
        >
            <Image src='/pencil.svg' alt="lapiz" width={45} height={45} />Quiero sacar una cita para un familiar
        </Link>
    </section>
  )
}
export default Prospectos