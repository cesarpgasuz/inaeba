import Link from "next/link"
import Image from "next/image"

import ImagenOficina from '@/public/oficina.png'
import ImagenOficina2 from '@/public/oficina2.png'

function Prospectos() {
  return (
    <section className="container max-w-screen-xl mx-auto w-[90%] pt-10 pb-10">
        {/* <Link 
            href='/cita'
            className="border-2 border-gray-400 flex items-center gap-3 rounded-md p-4 hover:bg-slate-200 md:w-1/2"
        >
            <Image src='/pencil.svg' alt="lapiz" width={45} height={45} />Quiero sacar una cita para mi
        </Link>
        <Link 
            href='/cita-2'
            className="border-2 border-gray-400 flex items-center gap-3 rounded-md p-4 hover:bg-slate-200 md:w-1/2"
        >
            <Image src='/pencil.svg' alt="lapiz" width={45} height={45} />Quiero sacar una cita para un familiar
        </Link> */}

        <p>El periodo de visitas domiciliarias a terminado <strong>(28/11/2023)</strong> </p>
        <p className="mt-5 mb-10">Si realizaste una cita para el dia 28 de noviembre, Deberas presentarte en nuestras oficionas ubicadas en Calle León, S/N, Centro, Doctor Mora. en un <strong>Horario de 10:00 am a 3:00pm</strong></p>
        <Image src={ImagenOficina} width={900} height={550} alt="Oficina Inaeba" className="mb-10"/>
        <Image src={ImagenOficina2} width={900} height={550} alt="Oficina Inaeba" className="mb-10"/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2237.2991999861897!2d-100.32559056270281!3d21.143041832841714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2smx!4v1701265964914!5m2!1ses-419!2smx" 
        className="w-full h-96"
        allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </section>
  )
}
export default Prospectos