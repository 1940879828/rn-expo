import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={async (ev) => {
        console.log('Haptics available:');
        if (process.env.EXPO_OS === 'android') {
          await Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Confirm);
        } else {
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
