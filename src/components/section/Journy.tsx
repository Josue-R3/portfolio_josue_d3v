import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { PiCertificateBold } from "react-icons/pi";

// Datos de trayectoria
const data = [
  { title: "Técnico en Desarrollo de Software", place: 'Instituto Superior Tecnológico España', status: "En curso", category: 'experience' },
  { title: "Técnico en Soporte Empresarial", place: 'PELByte', status: "2021 - 2023", category: 'experience' },
  { title: "Ingeniería en Ciberseguridad", place: 'Universidad de Saint Leo', status: "En curso", category: 'education' },
  { title: "Tecnólogo en Desarrollo Web", place: 'Instituto Superior Tecnológico España', status: "2021 - 2023", category: 'education' },
  { title: "Bachiller en Ciencias", place: 'Unidad Educativa Ambato', status: "2013 - 2020", category: 'education' },
  { title: "LCSPC", place: "CertiProf", status: "2024", category: 'certification', link: 'https://drive.google.com/file/d/1rB-RjxgaB5OWUaI48gYsnZmgE8e-8wPv/view?usp=sharing' },
  { title: "POWER BI: ANÁLISIS DE DAX", place: "Tutorias EC", status: "2024", category: 'certification', link: 'https://drive.google.com/file/d/1eRz5V7hsGR2AjnU3WFXPlEIvRHcvGdJL/view?usp=sharing' },
  { title: "BUSINESS INTELIGENCE", place: "Tutorias EC", status: "2024", category: 'certification', link: 'https://drive.google.com/file/d/1HwarTqLv-CLEMSR8rKEioADDZnLaF1hM/view?usp=sharing' },
  { title: "DevNet Associate", place: "CISCO Networking Academy", status: "2024", category: 'certification', link: 'https://drive.google.com/file/d/1_ko_CdA8G3p0jE5FKZeQxmYUOtMxsBhB/view?usp=sharing' },
  { title: "Experto Técnico Internacional", place: "SUDEN", status: "2023", category: 'certification', link: 'https://drive.google.com/file/d/1RUC6qYAFKjJ_72lGMY5wcYjNyrwMUrNk/view?usp=sharing' },
  { title: "Administración Técnica", place: "UDET", status: "2023", category: 'certification', link: 'https://drive.google.com/file/d/1IfdNNlDDBdb7mZPNXLcBB2O5LPgTrKrD/view?usp=sharing' },
  { title: "Experto en configuración y gestión de redes", place: "UDET", status: "2023", category: 'certification', link: 'https://drive.google.com/file/d/1a6CjsuGmh0fYl0gTnK492b9Oq-aixgEF/view?usp=sharing' },
  { title: "Administrador de base de datos MySQL", place: "Edutin", status: "2023", category: 'certification', link: 'https://drive.google.com/file/d/1cDXugAadK-heOATT3_y6FWJIGPnIGCEb/view?usp=sharing' },
  //{ title: "Certificación en Git", place: "Edutin", status: "2022", category: 'certification' },
];

// Renderiza un ítem de la línea de tiempo
const TimelineItem = ({ item, isLast }: { item: any, isLast: boolean }) => (
  <div className="relative pb-8">
    {!isLast && <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-700" aria-hidden="true"></span>}
    <div className="relative flex items-start">
      <Icon category={item.category} />
      <TimelineContent item={item} />
    </div>
  </div>
);

// Renderiza el ícono dependiendo de la categoría
const Icon = ({ category }: { category: string }) => (
  <div className="relative flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 rounded-full bg-gray-600 ring-8 ring-gray-900">
    {category === 'experience' && <FaBriefcase className="w-4 h-4 text-white" />}
    {category === 'education' && <FaGraduationCap className="w-4 h-4 text-white" />}
    {category === 'certification' && <PiCertificateBold className="w-4 h-4 text-white" />}
  </div>
);

// Renderiza el contenido de cada ítem de la línea de tiempo
const TimelineContent = ({ item }: { item: any }) => {
  const Wrapper = item.link ? 'a' : 'div';

  return (
    <Wrapper
      href={item.link ? item.link : undefined}
      target={item.link ? "_blank" : undefined}
      rel={item.link ? "noopener noreferrer" : undefined}
      className={`min-w-0 flex-1 ml-4 pt-1.5 rounded-lg bg-gray-800 p-4 
      hover:bg-gray-900 ${item.link ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-center text-sm text-gray-400 mb-1">
        <FaCalendarAlt className="mr-2 h-4 w-4 flex-shrink-0" />
        <span>{item.status}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="text-gray-400">{item.place}</p>
    </Wrapper>
  );
};



// Renderiza la línea de tiempo de una categoría específica
const Timeline = ({ title, items }: { title: string, items: any[] }) => (
  <div className="w-full mb-10">
    <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {items.map((item, index) => (
          <li key={index}>
            <TimelineItem item={item} isLast={index === items.length - 1} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Journy() {
  // Filtra los datos por categoría
  const experience = data.filter(item => item.category === 'experience');
  const education = data.filter(item => item.category === 'education');
  const certifications = data.filter(item => item.category === 'certification');

  return (
    <section id='journy' className="max-w-full mx-auto p-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">Trayectoria</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8">
        <Timeline title="Experiencia" items={experience} />
        <Timeline title="Educación" items={education} />
        <Timeline title="Certificaciones" items={certifications} />
      </div>
    </section>
  );
}
