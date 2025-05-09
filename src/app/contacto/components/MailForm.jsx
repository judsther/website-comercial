
//import { useRef } from "react";
//import emailjs from "@emailjs/browser";

export default function MailForm(){
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "your_service_id",
//         "your_template_id",
//         form.current,
//         "your_user_id"
//       )
//       .then(
//         (result) => {
//           alert("Mensaje enviado ✅");
//         },
//         (error) => {
//           alert("Error al enviar ❌");
//         }
//       );
//   };

  return (
    <form className="space-y-4 max-w-md mx-auto bg-slate-800 p-5 my-8">
      <input
        name="user_name"
        placeholder="Tu nombre"
        className="w-full border p-2 rounded bg-white"
        required
      />
      <input
        name="user_email"
        type="email"
        placeholder="Tu correo"
        className="w-full border p-2 rounded bg-white"
        required
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        rows="5"
        className="w-full border p-2 rounded bg-white"
        required
      />
      <input
        name="user_whatsapp"
        type="whatsapp"
        placeholder="Tu WhatsApp (opcional)"
        className="w-full border p-2 rounded bg-white"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Enviar mensaje
      </button>
    </form>
  );
};


