# SEG3502 — Laboratoire 9

Ajout de l'authentification In Memory + Basic Auth à l'API Temperature Converter (Lab 6).

## Fait

- `build.gradle.kts` : ajout de `spring-boot-starter-security`
- `configuration/WebSecurityConfig.kt` :
  - `securityFilterChain` : CSRF désactivé (API), toute requête doit être authentifiée, Basic Auth activé
  - `passwordEncoder` : `BCryptPasswordEncoder`
  - `userDetailsService` : `InMemoryUserDetailsManager` avec `user1` / `pass1`

## À faire

- Dans `WebSecurityConfig.userDetailsService`, ajouter un deuxième utilisateur :
  - `user2` avec le mot de passe `pass2`, rôle `USER`
  - Construire un `User.withUsername("user2")...build()` et le passer à `InMemoryUserDetailsManager(user1, user2)`

## Tests

Insomnia / curl :

```bash
curl -u user1:pass1 http://localhost:8080/temperature-converter/celsius-fahrenheit/50
curl -u user2:pass2 http://localhost:8080/temperature-converter/fahrenheit-celsius/122
```

## On doit aussi faire le rapport
