# Flashcards

W ostatnich 2 latach rozpowszechniła się nauka zdalna, a za nią w ślad poszly kursy i nauka samodzielna. 
W tych celach potrzebne są nowe narzędzia ułatwiające prace z uczniem i pracę samego ucznia. Znanym od dawna sposobem 
na szybką naukę nowych słów są fiszki. Jednak niepopularną metodą wciąż jest ich wykorzystywanie w nauce nauczyciel - uczen.
W zmianie tego stanu rzeczy może pomóc platforma Flashcards. 

Flashcards pozwala na dodanie przez nauczyciela słów, wraz z ich znaczeniem, oraz na przeglądanie/nauke dodanych słów przez ucznia.
Na obecnym etapie platforma w zupełności spełnia podstawowe zagadnienie. W przyszłości nalezy się skupić na filtrowaniu fiszek,
dedykowaniu ich konkretnym uczniom. 

Backend aplikacji został stworzony jako API z wystawionymi endpoitami, a więc może działać z każdym frontendem dla przeglądarek lub aplikacji na andorid/iOS.
Frontend to aplikacja w React, pozwala na prezentacje wynikow serwisu, komunikacje z api oraz wygodna nauke. Baza danych zostala
zaprojektowana jako trzy tabele w noSQL (mongoDB), ktore przechowuja dokumenty jako swoje rekordy. ich budowa zostala zaprojektowana nastepujaco:

Role:
- nazwa 
- id

Users:
- id 
- nickname 
- email 
- password 
- role

Flashcards:
- id
- word
- meaning
- category
- url

Platforma posiada dwa typy uzytkownikow: teacher oraz user. Teacher moze dodawac nowe fiszki, user nie ma takich uprawnien. Do autentykacji oraz uwierzytelniania
zostal uzyty JWT. 

Główny workflow Flashcards:

![](https://i.ibb.co/JnjJLnR/download-1.png)

Komunikacja miedzy frontend i backend za pomoca JWT 

![](https://i.ibb.co/tx6NCvS/Screenshot-10.png)
