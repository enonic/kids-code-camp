# Oppgave: Kompass

I denne oppgaven skal vi lage ett kompass. Når vi peker nordover skal
det stå `N` på skjermen, når vi peker mot sør skal det stå `S` på skjermen osv.

På MicroBit'en kan vi få ut kompassretningen i antall grader. For øst så vil
retningen være mellom 45 og 135 grader.

![Kode](compass.png)

Først lager vi en variabel `grader` og setter denne til kompassretningen. Hele
blokken skal kjøre hele tiden for å gi kontinuerlig retning.

![Kode](block-1.png)

Vi må nå lage en betingelsesblokk som skal ha flere `ellers hvis` blokker.
Fem forskjellige betingelser totalt.

![Kode](block-2.png)

For å få til dette må man trykke på tannhjulet og dra `else if` fra den grå
delen inn på den hvite delen.

![Kode](block-3.png)

Første betingelsen er `grader < 45`, og da viser vi `N`.

![Kode](block-4.png)

Andre betingelsen er `grader < 135`. Da viser vi `O` som i øst. `Ø` vil
ikke vises på MicroBit.

![Kode](block-5.png)

Den tredje betingelsen er `grader < 225`. Da viser vi `S`.

![Kode](block-6.png)

Og den siste retningen hvor `grader < 315`.

![Kode](block-7.png)

Men vi må også tenke på at nord er faktisk over null grader og også over
315 grader. Derfor må vi skrive ut `N` hvis ingen av de øvrige betingelsene
holder.

![Kode](block-8.png)

For å vise det med retninger kan man bruke `show arrow`. Merk at denne ikke
er oversatt på Norsk.

![Kode](block-9.png)


## Ferdig Kode

Her finner du ferdig JavaScript kode for oppgavene:

* [Kompass med tekst](code-1.js)
* [Kompass med piler](code-2.js)
