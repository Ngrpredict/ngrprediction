import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPopup() {
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4bzaaqg', 'template_2z5nczp', e.target, 'xTAljVXOYBN7jLw-K')
      .then(() => {
        alert("✅ Message sent successfully!");
        setShowForm(false);
      }, (error) => {
        alert("❌ Failed to send message: " + error.text);
      });

    e.target.reset();
  };

  return (
    <>
      <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4 ml-4">
        Contact
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form onSubmit={sendEmail} className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Send us a message</h2>
            <input type="text" name="name" placeholder="Your name" required className="w-full mb-3 p-2 border rounded" />
            <input type="email" name="email" placeholder="Your email" required className="w-full mb-3 p-2 border rounded" />
            <textarea name="message" placeholder="Your message" required className="w-full mb-3 p-2 border rounded h-24" />
            <div className="flex justify-between">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Send</button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Close</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}