# mathlifier-to-html

Convertit les expressions `{@html math('...')}` d'un fichier Svelte en balises `<math>` MathML natives.

## Règles de conversion

- Chaque `{@html math('expression')}` devient `<math>...</math>`
- Les nombres entiers ou décimaux → `<mn>`
- Les lettres (variables) → `<mi>`
- Les opérateurs (`+`, `-`, `=`, `×`, `÷`, `(`, `)`, etc.) → `<mo>`
- Le signe moins d'un nombre négatif → `<mo>-</mo>` suivi de `<mn>`
- Le signe plus d'un nombre positif entre parenthèses → `<mo>+</mo>` suivi de `<mn>`
- Les fractions `\frac{a}{b}` → `<mfrac><mn>a</mn><mn>b</mn></mfrac>`
- Les exposants `a^{b}` ou `a^b` → `<msup><mn>a</mn><mn>b</mn></msup>`
- Supprimer l'import `mathlifier` s'il n'est plus utilisé après conversion

## Tâche

Lis le fichier $ARGUMENTS, convertis tous les `{@html math()}` en MathML, puis écris le fichier modifié.
