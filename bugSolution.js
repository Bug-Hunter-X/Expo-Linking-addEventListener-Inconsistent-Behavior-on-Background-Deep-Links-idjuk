This solution uses `Linking.getInitialURL()` to check for a pending deep link on app launch, and also keeps an event listener active.  This ensures that deep links are handled whether the app is launched from a deep link or already running.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async (url) => {
      console.log('Deep link received:', url);
      // Process the deep link here
    };

    // Check for initial URL on app launch
    Linking.getInitialURL().then(url => {
      setInitialUrl(url);
      if (url) {
        handleUrl(url);
      }
    });

    // Add event listener
    const subscription = Linking.addEventListener('url', ({ url }) => {
      handleUrl(url);
    });

    // Cleanup the event listener when the component unmounts
    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
}

export default App;
```