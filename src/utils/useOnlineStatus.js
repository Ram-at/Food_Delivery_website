import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
export default useOnlineStatus;

// when we use useState(true)
//Your hook will always assume the user is online at the start — even if they opened the app offline.

// It won’t reflect the real network status on initial load, until a change triggers (online or offline event).

// So if the user starts offline, your app will wrongly show "online" until they connect/disconnect again.

// ✅ What Happens With navigator.onLine:
// const [isOnline, setIsOnline] = useState(navigator.onLine); // ← dynamic
// It uses the actual status from the browser at that moment.

// So the UI will correctly show “offline” immediately if the user opens the app with no internet.

/* navigator.onLine → Gets initial correct status (even if user starts offline).

eventListeners → Keep status updated live as the user goes online/offline.

useState + setIsOnline → Triggers re-render in your React UI.*/
