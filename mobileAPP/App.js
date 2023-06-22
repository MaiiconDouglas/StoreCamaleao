import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider, Text } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';

export default function App() {
  return (
  <NativeBaseProvider>
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="Center">
      <Text>Hello World</Text>
    </Box>
  </NativeBaseProvider>
  );
}