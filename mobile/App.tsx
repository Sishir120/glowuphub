import { registerRootComponent } from 'expo';
import { AuthProvider } from './src/context/AuthContext';
import TabNavigator from './src/navigation/TabNavigator';
import './global.css';

function App() {
  return (
    <AuthProvider>
      <TabNavigator />
    </AuthProvider>
  );
}

registerRootComponent(App);
