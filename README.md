NumediaTest
===========

Application réalisée dans le cadre du test technique Numédia, pour Mathieu Paré.

## Installation
Il faut tout d'abord se créer un fichier de configuration en se basant sur le fichier config/default.yml (par exemple, numedia.yml).
```
> mysql -u user -p database_name < init.sql
> npm install
```

## Lancement
```
> NODE_ENV=default node server.js
```
Dans le même exemple que précédement, remplacer default par numedia.
```
> NODE_ENV=numedia node server.js
```
Dans des cas d'environnements de production, on pourra utiliser des utilitaires de la même famille que forever.

## Bonnes pratiques
Idéalement, il aurait fallu faire une suite de tests sur l'API afin d'assurer une stabilité et une non-régression dans les développements futurs.

Je ne les ai pas réalisé pensant que ce n'était pas le but de ce test technique.
