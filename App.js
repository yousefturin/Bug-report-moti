import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Skeleton } from 'moti/skeleton'

export default function App() {
  const SkeletonCommonProps = {
    colorMode: 'dark', 
    backgroundColor: "#333",
    transition:{
        opacity: {
            type: "timing",
            duration: 1000,
        }
    }
}
  return (
        <Skeleton
          show
          height={35}
          width={35}
          radius={'round'}
          {...SkeletonCommonProps}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
