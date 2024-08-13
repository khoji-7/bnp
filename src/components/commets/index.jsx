import "./style.css";
import { useState } from "react";

export default function Comments() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adres, setAdres] = useState("");
  const [chek, setChek] = useState("");
  const [qiymat, setQiymat] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    const botToken = "7058068827:AAEwJvDklNcroajvm3PUIx9SvYgbOVAXG1k";
    const chatId = "-4230106591";
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const Sended = `
    Xat jo'natmasi: -----------------------\n 
    Jo'natuvchi ismi: ${name}\n-----------------------\n 
    Nomer: ${phone}\n-----------------------\n
    Manzil:${adres}\n-----------------------\n
    Chek: ${chek}\n-----------------------\n
    Qiymat: ${qiymat}
  `;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: Sended,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res?.status === 200) {
          alert("Xabaringiz yetkazildi");
          document.getElementById("form").reset();
        } else {
          alert("Xatolik yuz berdi");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="commentsParent">
      <div className="container">
        <div className="comments">
            <p className="commentsTitle">
                izoh qoldiring
            </p>
            <p className="commentsText">
            Sizning elektron pochta manzilingiz nashr etilmaydi. Majburiy maydonlar belgilangan *
            </p>
        <form className="forma" onSubmit={sendMessage} id="form">
          <div className="inputPar">
          <input
            type="text"
            placeholder="Ismingiz"
            required
            className="commentsInput"
            onChange={(e) => setName(e?.target.value)}
          />
          <input
          required
            type="email"
            placeholder="Email manzilingiz"
            className="commentsInput"
            style={{ width: "460px" }}
            onChange={(e) => setPhone(e?.target.value)}
          />
          </div>
          <input
          required
            type="text"
            placeholder="Fikringiz"
            className="commentsInputFikr"
            onChange={(e) => setAdres(e?.target.value)}
          />
    
          
          <button type="submit" className="commentsBtn">Yuborish</button>
        </form>
        </div>
      </div>
    </div>
  );
}
