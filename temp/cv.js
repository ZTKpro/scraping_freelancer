const CV = `<link rel="stylesheet" type="text/css" href="style.css">

<h1>Damian Szmurło</h1>

<img src="https://raw.githubusercontent.com/ZTKpro/ZTKpro/main/cv_300.png" width="30%">

<p>
  📞 <strong>Kontakt:</strong> +48 727 702 545<br>
  🌐 <strong>Strona:</strong> <a href="http://ds-code.netlify.app">ds-code.netlify.app</a><br>
  🏠 <strong>Adres:</strong> Jana III Sobieskiego 114, Warsaw<br>
  🌍 <strong>Języki:</strong> Polski (Ojczysty), Angielski (B2)
</p>

<h2>Podsumowanie:</h2>
<p> </p>

<h2>Umiejętności techniczne:</h2>

<ul>
  <li>JavaScript (5 lat)</li>
  <li>React (5 lata)</li>
  <li>Node.js (4 lata)</li>
  <li>TypeScript (3 lata)</li>
  <li>AI (2 lata)</li>
  <li>Blockchain (1 rok)</li>
  <li>3D (1 rok)</li>
  <li>Cyberbezpieczeństwo i testy penetracyjne (Na platformie Hack The Box)</li>
</ul>

<h2>Doświadczenie zawodowe:</h2>

<h3>DS Website (2018-Obecnie):</h3>
<p>
  Programista JavaScript<br>
  Dostarczałem usługi na zlecenie dla firm outsourcingowych oraz indywidualnych klientów, dostarczając rozwiązania dostosowane do ich wymagań. Wymagało to dogłębnej analizy potrzeb biznesowych, planowania projektów oraz stałej komunikacji, aby zapewnić zgodność z oczekiwaniami klienta.<br>
  Rozwinąłem aplikację do zarządzania transportem, usprawniając operacje takie jak rejestracja zamówień, planowanie trasy, śledzenie ładunków i zarządzanie flotą. Aplikacja ta odegrała kluczową rolę w poprawie procesu logistycznego dla wielu firm, redukując koszty i skracając czasy dostawy.<br>
  Dostarczyłem stronę internetową dla Durex International.<br>
  Rozwinięty i wdrożony system "LeadMe" do wysyłania spersonalizowanych wiadomości do klientów za pomocą ChatGPT. System ten zwiększył zaangażowanie klientów i poprawił efektywność procesu komunikacji z klientem.
</p>

<h3>Polska Press (2022-2022):</h3>
<p>
  Programista JavaScript<br>
  Praca nad silnikiem reklamowym, Marketing.<br>
  Rozwój platformy adTech, która pomogła Polska Press optymalizować operacje reklamowe. Gdzie scisle współpracowałem z działem Marketingowem. Skróty CPC, PCV, CPM, CPL, CPA nie są mi obce.
</p>

<h3>Aexol (2018-2019):</h3>
<p>
  Programista JavaScript<br>
  Wykonywanie różnych zadań z zakresu front-endu, wykorzystując React i Vue.js.
</p>

<h2>Kluczowe projekty:</h2>

<ul>
  <li><a href="https://ds3d.netlify.app">ds3d.netlify.app</a></li>
  <li><a href="https://edumat.pl">edumat.pl</a></li>
  <li><a href="https://hrk.pl">hrk.pl</a></li>
  <li><a href="https://leadme.ai">leadme.ai</a></li>
  <li><a href="https://github.com/ZTKpro/BlockChain">BlockChain Wallet</a></li>
  <li><a href="https://github.com/ZTKpro/Solidity">Solidity Contract</a></li>
  <li><a href="https://ds-3d-configurator.netlify.app/">3D Shoe Configurator</a></li>
  <li><a href="https://car-network.netlify.app/">AI Car Game</a></li>
  <li><a href="https://www.youtube.com/watch?v=9rQ8pgYKtBY">AR Application for Samsung</a></li>
</ul>

<p>
  Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
</p>
  `;

let cleanCV = CV.replace(/\n/g, "").replace(/\s+/g, " ");
module.exports = cleanCV;
