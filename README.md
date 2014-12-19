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

### Première initialisation de git (localement)

```
git init
git remote add origin git@github.com:xxx/xxx.git
```

### Envoi des fichiers locaux vers le dépôt

```
git add --all
git commit -m "un commentaire sur ce commit"
git push origin myBranch
```

### Récupération locale des fichiers du dépôt

```
git pull
```

### Gestion des branches

* Créer un branche localement : `git branch myBranch`
* Basculer vers une branche localement : `git checkout myBranch`
* Récupérer l'ensemble des branches distantes qui n'existent pas localement : `git fetch`

Bibliographie et liens utiles
-----------------------------

### Commandes de base Cordova

Cela inclut la création de projets, l'ajout/suppression de plateformes et de plugins, la compilation et l'exécution sur votre téléphone et/ou un émulateur :

http://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html

### Liste des plugins de Cordova

* [Plugins officiels](http://cordova.apache.org/docs/en/4.0.0/cordova_plugins_pluginapis.md.html)
* [Tous les plugins](http://plugins.cordova.io/#/)

### Création des comptes développeur

Ces comptes servent à publier votre application sur les stores

* [Google Developers](https://developers.google.com/mobile/)
* [Google Developers: Developer Console](http://developer.android.com/distribute/index.html)
* [Apple Developer: iOS Dev Center](https://developer.apple.com/devcenter/ios/index.action)
* [Windows Phone: Dev Center](https://dev.windowsphone.com/fr-fr/dashboard)

### Génération des fichiers de signature

Si vous n'utilisez pas Phonegap, ignorez les parties *Submit to Build*, *Submitting your key to build* et *Unlocking your key*.

Pour Windows Phone, il n'y pas besoin de signature car elle se fait automatiquement au moment de l'envoi sur le Windows Phone Store.

* [iOS](http://docs.build.phonegap.com/en_US/signing_signing-ios.md.html)
* [Android](http://docs.build.phonegap.com/en_US/signing_signing-android.md.html)

### Compilation des version finales des applications

* [iOS: Xcode](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_ios_index.md.html)
* [Android: Android Studio](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_android_index.md.html)
* [Android: Android Studio (bis)](http://www.codenutz.com/getting-started-phonegap-android-studio/)
* [Windows Phone: Android Studio](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_wp8_index.md.html)
