# SEG3502 — Laboratoire 9 — Code de départ

Ce projet contient l'API REST de conversion de température à sécuriser pour le laboratoire 9.

Le code de départ **ne contient pas encore Spring Security**. Le travail demandé consiste à ajouter
l'authentification **In Memory** et à exiger **Basic Authentication** pour toutes les requêtes de l'API.

## Démarrage

Le projet utilise Java 21.

Sous macOS/Linux :

```bash
./gradlew bootRun
```

Sous Windows :

```text
gradlew.bat bootRun
```

Exemples de points de terminaison déjà disponibles :

```text
GET http://localhost:8080/temperature-converter/celsius-fahrenheit/50
GET http://localhost:8080/temperature-converter/fahrenheit-celsius/122
```

## Travail demandé

Conformément aux consignes du laboratoire :

- ajouter Spring Security au projet;
- configurer une authentification en mémoire;
- créer au minimum :
  - `user1` avec le mot de passe `pass1`;
  - `user2` avec le mot de passe `pass2`;
- exiger l'authentification Basic pour toutes les requêtes à l'API;
- tester l'API avec Postman, Insomnia, Curl ou un outil similaire.

Aucune interface utilisateur n'est demandée pour ce livrable.
