import { AuthProvider } from './src/context/AuthContext';
import TabNavigator from './src/navigation/TabNavigator';
import './global.css';

export default function App() {
  return (
    <AuthProvider>
      <TabNavigator />
    </AuthProvider>
  );
}
