import React from 'react';
import {
  StyleProp,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  hint?: string;
  value: string;
  onPressHandle?: any;
}

export type ProfileSettingProps = ComponentProps & ViewProps & ThemedComponentProps;

class ProfileSettingComponent extends React.Component<ProfileSettingProps> {

  private renderTextElement = (text: string, style: StyleProp<TextStyle>): React.ReactElement<TextProps> => {
    return (
      <Text
        style={style}
        appearance='hint'>
        {text}
      </Text>
    );
  };

  public render(): React.ReactNode {
    const { style, themedStyle, hint, value, onPressHandle, ...restProps } = this.props;
    const { container, hintLabel, valueLabel } = themedStyle;

    return (
      <TouchableOpacity
        {...restProps}
        onPress={(onPressHandle)?onPressHandle:()=>{}}
        style={[container, style]}>
        {hint ? this.renderTextElement(hint, hintLabel) : null}
        {this.renderTextElement(value, valueLabel)}
      </TouchableOpacity>
    );
  }
}

export const ProfileSetting = withStyles(ProfileSettingComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  hintLabel: textStyle.caption2,
  valueLabel: {
    color: theme['text-basic-color'],
    ...textStyle.caption2,
  },
}));
