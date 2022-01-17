import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div className="contact_info_container">
      <h2>Biblioteka PK</h2>
      <p>
        pl. Jana Nowaka-Jeziorańskiego 3 <br /> 31-154 Kraków
        <br /> sekretariat tel. 12 61 89 100 (czynny w godz. 8.00–15.30)
        <br /> e-mail: <href>sekretariat@biblioteka.pk.pl</href>
      </p>
      <h3>p.o. Dyrektor</h3>
      <p>
        Mariusz Pudzianowski <br />
        tel. 12 61 89 100
        <br />
        e-mail: Mariusz.Pudzianowski@biblioteka.pk.pl
        <br />
      </p>
      <h3>Zastępca Dyrektora ds. merytorycznych</h3>
      <p>
        Adam Małysz
        <br />
        tel. 12 61 89 100
        <br />
        e-mail: adam.małysz@biblioteka.pk.pl
        <br />
      </p>
      <h3>Zastępca Dyrektora ds. administracyjnych i organizacyjnych</h3>
      <p>
        Robert Kubica
        <br />
        tel. 12 61 89 100
        <br />
        e-mail: robert.kubica@biblioteka.pk.pl
        <br />
      </p>
    </div>
  );
}

export default ContactInfo;
