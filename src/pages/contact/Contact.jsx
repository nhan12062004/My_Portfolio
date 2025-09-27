import React, { useState } from "react";
import "./contact.css";
import TitleHeader from "../../components/title-header";
import ButtonCustom from "../../components/button/ButtonCustom";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      await emailjs.send(
        "service_2b2tl3e",   // Service ID
        "template_53bz33s", // Template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "jNon_OZshrJNXhrpL" // Public Key
      );

      setStatus({ type: "success", text: "✅ Message sent! I'll get back to you soon." });
      reset(); // clear form sau khi gửi
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: "❌ Failed to send message. Please try again." });
    }
  };

  return (
    <>
      <div className="slide"></div>
      <div className="section contact">
        <TitleHeader first={"get in"} second={"touch"} third={"contact"} />
        <div className="container">
          <div className="contact-wrapper">
            {/* ===== LEFT INFO ===== */}
            <div className="contact-info">
              <h3>Don't be shy</h3>
              <p>
                Thank you for reading to the end. I hope that you have learned a
                little about me through this site. If you have any comments
                about this site or me, please use the form.
              </p>
              <ul className="contact-info__list">
                <li>
                  <div className="icon"><PlaceIcon /></div>
                  <span>Address</span>
                  Linh Nam, Ha Noi
                </li>
                <li>
                  <div className="icon"><EmailIcon /></div>
                  <span>Email</span>
                  nhanmit120604@gmail.com
                </li>
                <li>
                  <div className="icon"><CallIcon /></div>
                  <span>Phone</span>
                  <a href="tel:0328104037">0328104037</a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/nhanmit1206/?locale=vi_VN" target="_blank" rel="noreferrer">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/nhan12062004" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                  </a>
                </li>
              </ul>
            </div>

            {/* ===== RIGHT FORM ===== */}
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form" id="contact-form" noValidate>
              <div className="field contact-form__info">
                <div className="contact-form__info-name">
                  <input
                    {...register("name", { required: "Must not be blank" })}
                    type="text"
                    placeholder="NAME"
                  />
                  {errors.name && <span className="text-red-500 text-[12px] pl-4">{errors.name.message}</span>}
                </div>
                <div className="contact-form__info-email">
                  <input
                    {...register("email", { required: "Must not be blank" })}
                    type="email"
                    placeholder="EMAIL"
                  />
                  {errors.email && <span className="text-red-500 text-[12px] pl-4">{errors.email.message}</span>}
                </div>
              </div>

              <div className="field contact-form__subject">
                <input
                  {...register("subject", { required: "Must not be blank" })}
                  type="text"
                  placeholder="SUBJECT"
                />
                {errors.subject && <span className="text-red-500 text-[12px] pl-4">{errors.subject.message}</span>}
              </div>

              <div className="field contact-form__message">
                <textarea
                  {...register("message", { required: "Must not be blank" })}
                  placeholder="YOUR MESSAGE"
                />
                {errors.message && <span className="text-red-500 text-[12px] pl-4">{errors.message.message}</span>}
              </div>

              <div className="field">
                <ButtonCustom type="submit" disabled={isSubmitting}>
                  <span className="btn-text">{isSubmitting ? "sending..." : "send message"}</span>
                  <span className="btn-icon"><SendIcon /></span>
                </ButtonCustom>
                {status && (
                  <div
                    className={`mt-4 px-4 py-3 rounded-lg shadow-md flex items-center gap-2 ${
                      status.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-300"
                        : "bg-red-50 text-red-700 border border-red-300"
                    }`}
                  >
                    <span className="text-lg">
                      {status.type === "success" ? "✅" : "❌"}
                    </span>
                    <span className="text-sm font-medium">{status.text}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
