import Image from "next/image";
import Link from "next/link";

export default function Nosotros() {
  return (
    <div className="py-20 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Sobre Nosotros</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos un equipo de profesionales de la salud apasionados por la enseñanza y la prevención. Creemos que la capacitación adecuada en Primeros Auxilios, RCP y manejo de DEA en los lugares de trabajo marca la diferencia entre la vida y la muerte ante una emergencia súbita.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabajamos bajo las últimas guías y normativas internacionales (AHA/ERC), asegurando que los conocimientos que transmitimos estén completamente actualizados y respaldados por la evidencia científica más reciente.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h4 className="text-xl font-bold text-red-800 mb-2">Nuestra Misión</h4>
              <p className="text-red-700">Democratizar el acceso al conocimiento para salvar vidas en entornos laborales e instituciones, capacitando a cada individuo para que pueda actuar de manera eficaz y segura en situaciones críticas.</p>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 bg-gray-200 rounded-2xl bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
              <div className="h-40 bg-red-100 rounded-2xl bg-[url('https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-40 bg-red-100 rounded-2xl bg-[url('https://images.unsplash.com/photo-1605663738914-419b457884ff?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
              <div className="h-64 bg-gray-200 rounded-2xl bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
