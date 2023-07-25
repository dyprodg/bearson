import React, { useState } from 'react';

const Impressum = () => {
  const [showAGB, setShowAGB] = useState(false);

  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      <footer id='impressum' className='bg-black text-white py-4'>
        <div className='container mx-auto px-4 sm:px-0'>
          <div className='flex flex-col sm:flex-row justify-center'>
            <p className='text-center sm:text-left'>&copy; {new Date().getFullYear()} Bearson Tattoo. All rights reserved.</p>
          </div>
          <div className='flex flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:space-x-4 text-xs'>
            <div className='bg-black p-4 rounded-lg'>
              <h4 className='text-lg font-bold mb-2 text-white'>Impressum</h4>
              <p>Bearson Tattoo</p>
              <p>Herrenstraße 2</p>
              <p>86911 Dießen am Ammersee</p>
            </div>
            <div className='bg-black p-4 rounded-lg'>
              <h4 className='text-lg font-bold mb-2 text-white'>Kontakt</h4>
              <p>Telefon: +49 178 9751672</p>
              <p>E-Mail: bearson@web.de</p>
            </div>
            <div className='bg-black p-4 rounded-lg'>
              <h4 className='font-bold mb-2 text-white text-lg'>Weitere Infos</h4>
              <p>Datenschutzerklärung
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              Datenerfassung auf unserer Website
              Wir, die Betreiber dieser Website, erheben und speichern auf unserer Website ausdrücklich keine personenbezogenen Daten (wie Name, Anschrift oder E-Mail-Adressen), es sei denn, diese werden freiwillig von Ihnen zur Verfügung gestellt (z. B. in einem Kontaktformular, sofern vorhanden).
              Verwendung von Cookies
              Wir verwenden auf unserer Website keine Cookies. Cookies sind kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen.
              Änderungen dieser Datenschutzerklärung
              Wir behalten uns vor, diese Datenschutzerklärung zu ändern, um sie an aktuelle rechtliche Anforderungen oder Änderungen unserer Dienste anzupassen, z. B. bei der Einführung neuer Dienste. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
              <br />
              <p>Steuernummer: 12345</p>
              
              <div className='flex flex-col'>
                <button
                  className='text-blue-500 font-semibold mt-2'
                  onClick={() => setShowAGB(!showAGB)}
                >
                  {showAGB ? 'AGB ausblenden' : 'AGB anzeigen'}
                </button>
                {showAGB && (
                  <div className='bg-black p-4 rounded-lg mt-4 overflow-auto h-64'>
                    <h4 className='text-lg font-bold my-2 text-white'>Allgemeine Geschäftsbedingungen</h4>
                    {/* Füge hier den Inhalt deiner AGB ein */}
                    <p>AGBs

Gültigkeit
Allen in Auftrag genommenen oder ausgeführten Aufträgen und Geschäftsbeziehungen der Tätowiererin/des Tätowierers liegen diese Geschäftsbedingungen zugrunde. <br />
<br />
Auftragsannahme
Bei der Annahme von Aufträgen bzw. der Vergabe von Terminen, behält sich die Tätowiererin/der Tätowierer vor, eine dem Auftrag angemessene Anzahlung in Rechnung zu stellen, welche sofort bei Terminvergabe bzw. Auftragsannahme fällig wird. Sollte der Termin seitens der Auftraggeberin/des Auftraggebers nicht eingehalten werden können und nicht spätestens sieben Werktage vor dem Termin storniert werden, verfällt der Anspruch auf die Anzahlung seitens der Auftraggeberin/des Auftraggebers.
Die Rückerstattung der Anzahlung, bei rechtzeitiger Stornierung, ist nur gegen einen Gutschein möglich.
Zudem behält sich die Tätowiererin/der Tätowierer vor, Arbeiten und Aufträge ohne Angabe von Gründen abzulehnen. 
Sollte keine Anzahlung geleistet worden sein und die Auftraggeberin/dem Auftraggeber erscheint nicht zum vereinbarten Termin oder sagt diesen innerhalb von 7 Werktagen ab, behält sich die Tätowiererin/der Tätowierer von, der Auftraggeberin/dem Auftraggeber eine Pauschale für den Verdienstausfall in Rechnung zu stellen.
Die Erstellung der Vorlage für das zu tätowierende Motiv erfolgt ab dem Zeitpunkt des Verfalles der Rückerstattung der Anzahlung, also sieben Tage vor dem Termin. Sollte die Auftraggeberin/der Auftraggeber vor diesem Zeitpunkt die Vorlage wünschen, so verfällt die Anzahlung ab dem Moment, ab dem die Auftraggeberin/der Auftraggeber den Auftrag zur vorzeitigen Erstellung der Vorlage erteilt.
Bei verspätetem Erscheinen zu vereinbarten Terminen behält sich die Tätowiererin/der Tätowierer vor den Termin verkürzt oder gar nicht wahrzunehmen. Die durch die Verspätung entstehenden Kosten werden der Auftraggeberin/ dem Auftraggeber in Rechnung gestellt.
Für die korrekte Schreibweise von Schrift-Tattoos ist die Auftraggeberin/der Auftraggeber verantwortlich. Für Fehler in der Rechtschreibung ist die Tätowiererin/ der Tätowierer nicht haftbar.<br />
<br />
Gutscheine<br />
Gutscheine können nicht mit anderen Gutscheinen oder Rabattaktionen sowie Gewinnspielen kombiniert werden. Eine Barauszahlung ist nicht möglich. Rabatt und Aktionsgutscheine sowie Gewinngutscheine haben eine verkürzte Gültigkeit. Enthält ein Gutschein keine Frist, gelten die Gesetzlichen Regelungen. 
Zudem können Gutscheine, die nach schon erfolgter Terminvereinbarungen erworben werden, nicht mit den Terminen und dazu gehörigen Folgeterminen kombiniert werden.
Einverständnis seitens der Auftraggeberin/ des Auftraggebers
Die Auftraggeberin/der Auftraggeber erklärt sich durch ihren/seinen Auftrag mit den an Ihr/Ihm vorzunehmenden Körpermodifikationen (Tattoo etc.) einverstanden und bestätigt, dass diese nach ihrem/seinem uneingeschränkten und freien Willen vorgenommen werden. Die Auftraggeberin/der Auftraggeber erklärt des Weiteren, sich eingehend über die eventuellen Risiken und Folgerisiken eines Tattoos informiert zu haben bzw. sich deren bewusst zu sein und nimmt diese durch seine Auftragserteilung billigend in Kauf.<br />
<br />
Haftung<br />
Die Haftung der Tätowiererin/des Tätowierers für die von ihr/ihm ausgeführten Arbeiten beschränken sich lediglich auf den reellen Schaden sowie auf grobe Fahrlässigkeit. In keinem Fall wird garantiert, dass die ausgeführten oder erstellten Arbeiten den Vorstellungen und Ansprüchen der Auftraggeberin/des Auftraggebers genüge leisten bzw. der Auftraggeberin/dem Auftraggeber gefallen. Des Weiteren behält sich die Tätowiererin/der Tätowierer das Recht auf Nachbesserung vor. Für eventuelle wirtschaftliche und/oder gesellschaftliche Einbußen die der Auftraggeberin/dem Auftraggeber durch die Tätowiererin/den Tätowierer ausgeführten Arbeiten entstehen, kann die Tätowiererin/der Tätowierer nicht in Haftung genommen werden.<br />
<br />
Nachstechen/Pflege <br />
Die Auftraggeberin/der Auftraggeber hat das Recht einen von der Tätowiererin/dem Tätowierer ausgeübten Auftrag innerhalb der darauffolgenden sechs Monate kostenfrei nachstechen zu lassen, vorausgesetzt der Auftraggeber/die Auftraggeberin hat sich an die von der Tätowiererin/dem Tätowierer ausgehändigten Pflegeanleitung gehalten. Die Auftraggeberin/der Auftraggeber verpflichtet sich den ihn/ihr auferlegten Pflegeanleitungen für Tattoos und Körpermodifikationen nachzukommen und diese nach bestem Wissen und Gewissen Folge zu leisten. Sollten dies Seitens der Auftraggeberin/des Auftraggebers nicht eingehalten werden, verfällt jede Art der Haftung durch die Tätowiererin/den Tätowierer für daraus resultierende Folgeerscheinungen gleich welcher Art.
Bei Nichteinhaltung der notwendigen Pflege und Schonung, sowie das Versäumen des Nachstechtermins ohne rechtzeitiges Stornieren (drei Werktage) behält sich die Tätowiererin/der Tätowierer vor, das Nachstechen in Rechnung zu stellen.<br />
​<br />
Bei Aufträgen an Körperstellen, bei denen eine schlechte Abheilung vorhersehbar ist (z.B. Horngewebe an Händen und Füßen) verfällt ebenfalls der Anspruch auf eine kostenlose Nachbesserung.<br />
<br />
Erkrankungen<br />
Der Auftraggeber/ die Auftraggeberin verpflichtet sich bei der Erteilung eines Auftrags über eventuelle bei der Auftraggeberin/ dem Auftraggeber vorhandene Allergien, Überempfindlichkeiten, Erbkrankheiten, Krankheiten und ansteckende Krankheiten zu informieren, auch wenn diese erst nach Auftragserteilung und/oder nach Ausführung der in Auftrag gegebenen Arbeiten bekannt werden.<br />
​<br />
Sollte die Auftraggeberin/der Auftraggeber wider besseren Wissens Falschangaben machen oder einen bzw. mehrere der o. g. Umstände verschweigen bzw. zurückhalten, behält sich die Tätowiererin/der Tätowierer das Recht vor, zivil- und/oder strafrechtlich gegen die Auftraggeberin/den Auftraggeber vorzugehen bzw. auch nach Ausführung der Arbeiten eine dem Risiko entsprechende Zulage zu verlangen und einzufordern.<br />
​<br />
Die Unwirksamkeit einzelner Punkte dieser Allgemeinen Geschäftsbedingungen berührt die Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen Bestimmung tritt eine neue Bestimmung, die in ihrer wirtschaftlichen, rechtlichen und sinngemäßen Auswirkung der unwirksamen Bestimmung im Sinne der Tätowiererin/ des Tätowierers möglichst nahe kommt.</p>
                  
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
