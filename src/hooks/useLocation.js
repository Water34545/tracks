import {useState, useEffect} from 'react';
import {
  requestForegroundPermissionsAsync, 
  watchPositionAsync, 
  Accuracy
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subcriber;
    const startWatching = async () => {
      try {
        await requestForegroundPermissionsAsync();
        subcriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        }, callback);
      } catch (e) {
        setErr(e);
      }
    };
    if(shouldTrack) {
      startWatching();
    }
    else {
      if(subcriber) {
        subcriber.remove();
      }
      subcriber = null;
    }

    return () => {
      if(subcriber) {
        subcriber.remove();
      }
    }
  }, [shouldTrack, callback]);

  return [err];
};