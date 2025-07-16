import { useState } from "react";
export default function Contact() {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Manejador de cambios para todos los inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Obtiene el 'name' y 'value' del input que cambió
    setFormData((prevData) => ({
      ...prevData, // Mantiene los otros valores del formulario
      [name]: value, // Actualiza solo el campo que cambió
    }));
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);

    alert("¡Mensaje enviado con éxito! (Simulación)"); // Simulación de envío

    // Opcional: Limpiar el formulario después de enviar
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold text-center my-10 text-gray-800">
          Contáctame
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
        >
          <div className="md:grid md:grid-cols-2 md:gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name" // Importante: el atributo 'name' debe coincidir con la clave en 'formData'
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                placeholder="Nombre"
              />
            </div>
            <div className="mt-6 md:mt-0">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                placeholder="email@ejemplo.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              placeholder="Asunto"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="6" // Altura inicial del textarea
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 resize-y"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-md"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
