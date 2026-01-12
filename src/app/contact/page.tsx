"use client";

import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Davi from "../components/scene/davi";
import ReCAPTCHA from "react-google-recaptcha";
import { colors } from "../lib/global";
import { config } from "../lib/config";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const sectionRef = useRef(null);

  const successSend = () =>
    toast.success("Mensagem enviada!!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const errorSend = () =>
    toast.error("Erro no envio!!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captcha) {
      toast.error("Por favor, complete o CAPTCHA!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (form.current === null) return;
    setIsSendingEmail(true);
    try {
      await emailjs.sendForm(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        form.current,
        config.emailjs.publicKey
      );
      successSend();
      form.current.reset();
      setCaptcha(null);
    } catch (error) {
      errorSend();
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="flex items-center flex-col py-12 px-4"
      style={{
        background: `linear-gradient(to bottom right, ${colors.primaryColor}, ${colors.secondColor}, ${colors.primaryColor})`,
      }}
    >
      <h2
        className="relative w-full flex items-center justify-center uppercase mb-4 font-bold text-center"
        style={{
          fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
          color: colors.accentColor,
        }}
      >
        Contato
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-6">
        <div className="max-h-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
          <Davi />
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full flex flex-col gap-4 lg:gap-4 z-25"
        >
          <ToastContainer />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-1.5">
            <input
              maxLength={100}
              type="text"
              placeholder="Nome"
              name="name"
              required
              className="px-3 py-2.5 rounded-lg border-none font-light"
              style={{
                backgroundColor: colors.secondColor,
                color: colors.thirdColor,
                fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
                border: `2px solid ${colors.thirdColor}40`,
              }}
            />
            <input
              maxLength={100}
              type="email"
              placeholder="Email"
              name="email"
              required
              className="px-3 py-2.5 rounded-lg border-none font-light"
              style={{
                backgroundColor: colors.secondColor,
                color: colors.thirdColor,
                fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
                border: `2px solid ${colors.thirdColor}40`,
              }}
            />
          </div>

          <input
            required
            maxLength={80}
            placeholder="Assunto"
            name="subject"
            className="px-3 py-2.5 rounded-lg border-none font-light"
            style={{
              backgroundColor: colors.secondColor,
              color: colors.thirdColor,
              fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
              border: `2px solid ${colors.thirdColor}40`,
            }}
          />

          <textarea
            placeholder="Escreva sua mensagem"
            name="message"
            rows={10}
            maxLength={255}
            required
            className="resize-none max-h-[250px] px-3 py-2.5 rounded-lg border-none font-light"
            style={{
              backgroundColor: colors.secondColor,
              color: colors.thirdColor,
              fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
              border: `2px solid ${colors.thirdColor}40`,
            }}
          />

          <div className="w-full flex flex-col items-end justify-end gap-2.5">
            <div className="w-full flex justify-end">
              <ReCAPTCHA
                sitekey={config.recaptcha.siteKey}
                onChange={setCaptcha}
                theme="dark"
              />
            </div>
            <button
              type="submit"
              disabled={isSendingEmail}
              className="text-center w-[150px] rounded-full px-5 py-2 lg:py-2 lg:px-5 z-2 cursor-pointer transition-all duration-300 ease-out hover:scale-105"
              style={{
                border: `1px solid ${colors.accentColor}`,
                color: colors.accentColor,
                backgroundColor: colors.primaryColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentColor;
                e.currentTarget.style.color = colors.secondColor;
                e.currentTarget.style.border = `1px solid ${colors.primaryColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.primaryColor;
                e.currentTarget.style.color = colors.accentColor;
                e.currentTarget.style.border = `1px solid ${colors.accentColor}`;
              }}
            >
              {isSendingEmail ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
