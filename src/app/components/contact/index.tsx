"use client";

import { useRef, useState, FormEvent } from "react";
import * as S from "./styles";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Earth from "../scene/earth";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
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

  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (form.current === null) return;
    setIsSendingEmail(true);
    try {
      await emailjs.sendForm(
        "",
        "",
        form.current,
        ""
      );
      successSend();
      form.current.reset();
    } catch (error) {
      errorSend();
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <S.Section id="contato" className="mx-width">
      <S.Title>Contato</S.Title>
      <S.Container>
        <S.Map>
          <Earth />
        </S.Map>
        <S.Form ref={form} onSubmit={sendEmail}>
          <ToastContainer />
          <S.InputContainer>
            <S.Input
              maxLength={100}
              type="text"
              placeholder="Nome"
              name="name"
              required
            />
            <S.Input
              maxLength={100}
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </S.InputContainer>
          <S.Input
            required
            maxLength={100}
            placeholder="Assunto"
            name="subject"
          />
          <S.TextArea
            placeholder="Escreva sua mensagem"
            name="message"
            rows={10}
            maxLength={255}
            required
          />
          <S.btnContainer>
            {isSendingEmail ? (
              <S.Button disabled>Enviando...</S.Button>
            ) : (
              <S.Button type="submit">Enviar</S.Button>
            )}
          </S.btnContainer>
        </S.Form>
      </S.Container>
    </S.Section>
  );
};

export default Contact;
