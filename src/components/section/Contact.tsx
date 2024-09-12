// components/section/Contact.js
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Objeto para las acciones de contacto
const contactActions = [
  {
    title: "Descargar CV",
    icon: <FaDownload size={20} />,
    path: "https://drive.google.com/file/d/1i524hjOd6LYruf3q2e6Fh1BQX4bqoVQN/view?usp=sharing", // Reemplaza esta ruta con la ruta correcta a tu CV
    color: "bg-white text-black",
    hoverColor: "hover:bg-blue-700 hover:text-white hover:font-semibold "
  },
  {
    title: "Más sobre mis proyectos en GitHub",
    icon: <FaGithub size={20} />,
    path: "https://github.com/Josue-R3", // Enlace a tu perfil de GitHub
    color: "bg-[#333]",
    hoverColor: "hover:bg-[#111] hover:font-semibold"
  },
  {
    title: "Búscame en LinkedIn",
    icon: <FaLinkedin size={20} />,
    path: "https://www.linkedin.com/in/josue-ruiz-0952001b3/", // Enlace a tu perfil de LinkedIn
    color: "bg-[#0072b1]",
    hoverColor: "hover:bg-[#005983] hover:font-semibold "
  },
  {
    title: "Más sobre mí en Instagram",
    icon: <FaInstagram size={20} />,
    path: "https://www.instagram.com/josue_r3/", // Reemplaza con tu enlace de Instagram
    color: "bg-[#E1306C]",
    hoverColor: "hover:bg-[#B62055] hover:font-semibold "
  },
  /*{
    title: "Chatea conmigo por WhatsApp",
    icon: <FaWhatsapp size={20} />,
    path: "", // Reemplaza 'tu-numero' con tu número de WhatsApp
    color: "bg-[#25D366]",
    hoverColor: "hover:bg-[#1da851] hover:font-semibold "
  },*/
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleEmailSend = () => {
    console.log("Enviando email con:", formData);
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contáctame</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 space-y-6 md:space-y-0">
          {/* Formulario de Contacto a la izquierda */}
          <div className="w-full md:w-3/5 flex flex-col items-center">
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <Input
                type="text"
                name="name"
                label="Nombre"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                label="Mensaje"
                placeholder="Escribe tu mensaje aquí"
                value={formData.message}
                onChange={handleChange}
                required
                minRows={4}
              />
              <div className="flex space-x-4">
                <Button
                isDisabled 
                  color="primary" 
                  className="flex-1 h-12"
                  startContent={<MdEmail size={20} />}
                  onClick={handleEmailSend}
                >
                  Enviar Correo
                </Button>
              </div>
            </form>
          </div>

          {/* Botones de acciones de contacto a la derecha */}
          <div className="w-full md:w-2/5 flex flex-col items-stretch space-y-4">
            {contactActions.map((action, index) => (
              <Button 
                key={index}
                className={`flex items-center justify-start h-12 text-white ${action.color} ${action.hoverColor} pl-4`}
                startContent={action.icon}
                onClick={() => window.open(action.path, '_blank')}
              >
                {action.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
