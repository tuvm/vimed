import vi_VN from '../utils/Antd_VI';
import { ConfigProvider, theme } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import en_US from 'antd/es/locale';
import dayjs from 'dayjs';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';
import '../styles/tailwind.css';

const antd_locales: Record<string, any> = {
  [LANGUAGES.VI]: vi_VN,
  [LANGUAGES.US]: en_US,
};

const ThemeContext = createContext({});

const LightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    fontSize: 12,
    borderRadiusSM: 2,
    borderRadiusLG: 4,
    borderRadius: 2,
    colorPrimary: '#4c80a4',
    // colorPrimaryHover: '#082434',
    colorText: '#000',
    colorBgBase: '#f8fafb',
    // colorBgContainer: 'transparent',
    // colorBorder: '#647a87',
    // controlItemBgActiveDisabled: '#2C4654',
    // controlItemBgActive: '#2C4654',
    controlOutlineWidth: 0,
    // colorBgElevated: '#1F313B',
    fontFamily: `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  },
  components: {
    Menu: {
      // colorItemBg: '#082434',
      colorItemBgSelected: '#dfeffe',
      // colorItemTextSelected: '#bed6e5',
      // colorSubItemBg: '#082434',
    },
  },
};

const DarkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    fontSize: 12,
    borderRadiusSM: 2,
    borderRadiusLG: 2,
    borderRadius: 2,
    colorPrimary: '#39C2D7',
    colorPrimaryHover: '#2799b0',
    colorText: '#fff',
    colorBgBase: '#172126',
    colorBgContainer: 'transparent',
    colorBorder: '#647a87',
    controlItemBgActiveDisabled: '#2C4654',
    controlItemBgActive: '#2C4654',
    controlOutlineWidth: 0,
    colorBgElevated: '#1F313B',
    fontFamily: `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  },
  components: {
    Menu: {
      colorItemBg: '#082434',
      colorItemBgSelected: '#2c5166',
      colorSubItemBg: '#082434',
    },
  },
};

export const ThemeProvider = ({
  children,
  appearance = 'dark',
}: {
  children: React.ReactNode;
  appearance?: 'light' | 'dark';
}): JSX.Element => {
  const [theme, setTheme] = useState(appearance);
  const { i18n } = useTranslation('Vindoc');

  useEffect(() => {
    dayjs.locale(i18n.language === LANGUAGES.VI ? 'vi' : 'en');
  }, [i18n.language]);

  return (
    <ConfigProvider
      theme={theme === 'dark' ? DarkTheme : LightTheme}
      locale={antd_locales[i18n.language]}
    >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className='bg-background-dark-3 text-xl p-6 text-red-600'>helldfdfdfassdfsdfsdfsdfdfo</div>
          {children}
        </ThemeContext.Provider>
    </ConfigProvider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }

  return context as {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    toggleTheme: () => void;
  };
};

export default ThemeProvider;
