# Lab 4

App Angular (formulaire réactif + routage) dans `lab4-coordonnees/`.

## À faire (Layth)

1. **`src/app/contact-form/contact-form.ts`** — ajouter le `Validators.pattern` au champ `phone`
   - 10 chiffres
   - 1er et 4e chiffres ≠ 0
   - Regex suggérée : `^[1-9][0-9]{2}[1-9][0-9]{6}$`

2. **`src/app/contact-form/contact-form.html`** — afficher un message d'erreur sous le champ téléphone si `phone.touched && phone.hasError('pattern')`

3. **`src/app/contact-result/contact-result.html`** — ajouter une ligne `<tr>` au tableau pour afficher `contact.email` (modèle : la ligne Téléphone juste au-dessus)

## On doit aussi faire le rapport

- même format que les labs précédents

## Lancer

```bash
cd lab4-coordonnees
npm install --legacy-peer-deps
npx ng serve
```

Puis ouvrir http://localhost:4200/

mes parties ont été ajoutées avec succès dans les fichiers, j'ai du ainsi repush le folder entier depuis mon vscode! 
