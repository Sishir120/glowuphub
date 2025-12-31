import { AuthProvider } from './src/context/AuthContext';
import TabNavigator from './src/navigation/TabNavigator';
// import './global.css'; // Temporarily disabled for build testing

export default function App() {
  return (
    <AuthProvider>
      <TabNavigator />
    </AuthProvider>
  );
}
