Pythagore
=========

Récupération locale
-------------------

Seules les plateformes sont ignorées sur le dépôt, il faut donc exécuter (selon l'OS) :

```
cordova platform add android
cordova platform add ios
cordova platform add wp8
```

Utilisation de Git
------------------

La création d'un nouveau dépôt (repository) se fait directement sur le site.

### Première nitialisation de git localement (et attachement au dépôt)

```
git init
git remote add origin git@github.com:xxx/xxx.git
```

### Envoi des fichiers locaux vers le dépôt

```
git add --all
git commit -m "un commentaire sur ce commit"
git push origin <le nom de ma branche, par ex: master>
```

### Récupération locale des fichiers du dépôt

`git pull`

### Gestion des branches

* Créer un branche localement : `git branch myBranch`
* Basculer vers une branche localement : `git checkout myBranch`
* Récupérer l'ensemble des branches distantes qui n'existent pas localement : `git fetch`

Bibliographie et liens utiles
-----------------------------

### Création des comptes développeur (pour publier une application)

* [Google Developers](https://developers.google.com/mobile/)
* [Google Developers : Developer Console](http://developer.android.com/distribute/index.html)
* [Apple Developer : iOS Dev Center](https://developer.apple.com/devcenter/ios/index.action)
* [Windows Phone : Dev Center](https://dev.windowsphone.com/fr-fr/dashboard)

### Génération des fichiers de signature

Si vous n'utilisez pas Phonegap, ignorez les parties *Submit to Build*, *Submitting your key to build* et *Unlocking your key*.

Pour Windows Phone, il n'y pas besoin de signature car elle se fait automatiquement au moment de l'envoi sur le Windows Phone Store.

* [iOS](http://docs.build.phonegap.com/en_US/signing_signing-ios.md.html)
* [Android](http://docs.build.phonegap.com/en_US/signing_signing-android.md.html)
