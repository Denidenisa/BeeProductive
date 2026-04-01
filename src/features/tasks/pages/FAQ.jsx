import faqData from "../data/faq.json";
import { NavLink } from "react-router";

export function FAQ() {
  return (
    <section className="py-14 px-8 md:px-48 flex flex-col gap-8 items-center text-main-400 max-w-4xl mx-auto">

      <div className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-secondary-400">˚˖𓍢ִ໋❀ˋQuestions fréquentes ˚˖𓍢ִ໋❀ˋ</h1>
        <p className="text-main-400">Réponses aux questions les plus fréquentes sur Interface3 et notre formation.</p>
      </div>

      <ul className="w-full flex flex-col gap-4">
        {faqData.map((item, index) => (
          <li key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
            <strong className="text-secondary-400 text-lg">{item.question}</strong>
            <p className="text-main-400 text-sm leading-relaxed">{item.answer}</p>
          </li>
        ))}
      </ul>

      <NavLink className="text-secondary-400 underline underline-offset-4 hover:opacity-70 transition" to="/">
      ╰┈➤ˎˊ˗ Revenir à la page d'accueil
      </NavLink>

    </section>
  );
}