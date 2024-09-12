import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import APP_MOVIL from '../../../public/images/APP_MOVIL.png';
import PSI from '../../../public/images/PSI.png';
import ACCESS from '../../../public/images/ACCESS.png';
import { RiFlutterFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { SiMicrosoftaccess, SiMicrosoftazure, SiMicrosoftsharepoint, SiVisualbasic, SiMicrosoftexcel } from "react-icons/si";
import { Button } from "@nextui-org/react";
import ReactCardFlip from 'react-card-flip';

const CARD_DATA = [
  {
    title: 'PSI',
    image: PSI,
    github: '#',
    category: 'web',
    description: 'Aplicación Web con consumo de APIs, autenticación y roles, conexión con servicios en la nube de Azure y almacenamiento en gestor documental Sharepoint.',
    tecnologies: [<FaReact key="react" />, <RiNextjsFill key="nextjs" />, <RiTailwindCssFill key="tailwind" />, <SiMicrosoftazure key="azure" />, <SiMicrosoftsharepoint key="sharepoint" />]
  },
  {
    title: 'YoSoyISTE',
    image: APP_MOVIL,
    github: '#',
    category: 'mobile',
    description: 'Aplicación móvil con consumo de APIs, autenticación y roles, gestión de estados con RiverPod, conexión con servicios en la nube.',
    tecnologies: [<DiDart key="dart" />, <RiFlutterFill key="flutter" />, <SiMicrosoftazure key="azure" />]
  },
  {
    title: 'Distributivos APP',
    image: ACCESS,
    github: '',
    category: 'desktop',
    description: 'Aplicación de escritorio en Microsoft Access para la gestión de distributivos académicos.',
    tecnologies: [<SiVisualbasic key="visualbasic" />, <SiMicrosoftaccess key="access" />, <SiMicrosoftexcel key="excel" />]
  },
];

const FILTER_OPTIONS = ['all', 'web', 'mobile', 'desktop'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [flippedIndex, setFlippedIndex] = useState(null);

  const filteredData = filter === 'all' ? CARD_DATA : CARD_DATA.filter(card => card.category === filter);

  const handleFlip = (index : any) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="text-white py-16">
      <div id="projects" className="container mx-auto text-center py-10">
        <h2 className="text-4xl font-bold mb-10">Proyectos</h2>
        <div className="flex justify-center mb-8">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`m-2 px-4 sm:px-8 py-2 ${filter === option ? 'text-white font-semibold border-b border-white' : 'text-gray-500'} hover:text-white`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((card, index) => (
            <ReactCardFlip isFlipped={flippedIndex === index} flipDirection="horizontal" key={index}>
              {/* Front of the card */}
              <div className="relative group rounded-lg overflow-hidden w-full h-full bg-transparent">
                <div className="relative rounded-lg overflow-hidden w-full h-full">
                  <div className="p-0 relative">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="rounded-lg"
                      layout="responsive"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 rounded-lg">
                      <div className="flex flex-wrap justify-center space-x-2 mb-4">
                        {card.tecnologies?.map((icon, i) => (
                          <span key={i} className="text-2xl">
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center p-4 bg-transparent relative">
                    <h3 className="text-xl font-bold text-center text-white">{card.title}</h3>
                    <Button
                      onClick={() => handleFlip(index)}
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-0 bg-white text-black hover:bg-blue-700 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </div>

              {/* Back of the card */}
              <div className="relative group rounded-lg overflow-hidden w-full h-full bg-transparent">
                <div className="relative rounded-lg overflow-hidden w-full h-full flex flex-col justify-center items-center">
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-6">{card.title}</h3>
                    <p className="mb-12 text-center ">{card.description}</p>
                    
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Button
                      onClick={() => handleFlip(index)}
                      className="bg-black text-white hover:bg-red-700"
                    >
                      Ocultar Detalles
                    </Button>
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
}
