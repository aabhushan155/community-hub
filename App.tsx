import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { supabase } from './src/lib/supabase';

export default function App() {
  const [status, setStatus] = useState<string>('Checking connection...');

  useEffect(() => {
    async function checkConnection() {
      const { data, error } = await supabase.from('events').select('*');
      if (error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus(`Connected to Supabase! Events count: ${data.length}`);
      }
    }
    checkConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Hub Regina</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  status: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});