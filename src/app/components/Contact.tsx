// components/ContactForm.tsx
'use client';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      'service_vpib595',
      'template_e5ib0gs',
      form.current,
      'Z6FMouxjR6Mri20p1'
    ).then(
      () => {
        setIsSent(true);
        form.current?.reset();
      },
      (error) => {
        alert('送信に失敗しました: ' + error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
    <div className="bg-zinc-800/80 backdrop-blur-md rounded-xl p-8 shadow-lg">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
        <input
          type="text"
          name="user_name"
          placeholder="お名前"
          required
          className="bg-zinc-700 p-4 rounded-md border border-zinc-600 placeholder-gray-400 text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="メールアドレス"
          required
          className="bg-zinc-700 p-4 rounded-md border border-zinc-600 placeholder-gray-400 text-white"
        />
        <textarea
          name="message"
          placeholder="お問い合わせ内容"
          required
          className="bg-zinc-700 p-4 rounded-md border border-zinc-600 placeholder-gray-400 text-white h-40"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors"
        >
          送信
        </button>
        {isSent && (
          <p className="text-green-400 text-center">送信されました。ありがとうございました！</p>
        )}
      </form>
    </div>
  </div>
</section>

  );
};

export default Contact;
