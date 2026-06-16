// Importation des scripts nécessaires pour Firebase en arrière-plan
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Configuration Firebase (Version Compat)
const firebaseConfig = {
    apiKey: "AIzaSyCozjk7u0rgP1iK7cR-5x_WDVYg7SJWVt0",
    authDomain: "baby-predict-292f1.firebaseapp.com",
    projectId: "baby-predict-292f1",
    storageBucket: "baby-predict-292f1.firebasestorage.app",
    messagingSenderId: "1000428556931",
    appId: "1:1000428556931:web:9cf6b2d306ec3114a381b6"
};

// Initialisation
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Gestion des notifications lorsque l'application est fermée/en arrière-plan
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Notification reçue en arrière-plan ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico', // Tu peux mettre une icône si tu en as une
        badge: '/favicon.ico',
        tag: 'new-prediction',
        renotify: true
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
