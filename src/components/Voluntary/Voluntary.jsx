import React from "react";
import "./style.css";

const Voluntary = () => {
  return (
    <div className="voluntary">
      <div className="voluntary-title">Wolontariat</div>
      <div className="voluntary-rule">
        <h3>Wolontariusz to osoba społeczna która:</h3>
        <p>Interweniuje w przypadku kiedy zwierze jest w niebezpieczeństwie</p>
        <p>Poszukuje bezdomnych zwierząt i pomaga im znaleść nowy dom</p>
        <p>Pomaga w opiece nad zwierzętami w schronisku</p>
        <p>Prowadzi dom tymczasowy</p>
        <p>Udziela się charytatywnie</p>
      </div>
      <div className="voluntary-information">
        <h4>
          <article>
            Jeśli chcesz brać czynny udział w życiu naszych pociech ze
            schroniska to zachęcamy do odbycia kursu. Umożliwia on opiekę nad
            psiakami
          </article>
          <p>Zapraszamy!</p>
          <p>Każda pomoc się przyda</p>
          <div className="voluntary-contact">
            <p>
              Więcej informacji na temat kursu i wolontariatu pod numerem lub
              e-mailem:
            </p>

            <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
            <div>+78 456 564 466</div>
            <p></p>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <div>schronisko@gmail.com</div>
          </div>
        </h4>
      </div>
    </div>
  );
};

export default Voluntary;
