import { Empty as AntEmpty, ConfigProvider } from 'antd';
import { ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';

type IEmpty = Omit<Parameters<typeof AntEmpty>[0], 'image'> & {
  image?: 'simple' | 'default' | ReactNode;
  color?: string;
};

const Empty = ({
  image = 'simple',
  color = '#2c5166',
  description,
  ...rest
}: IEmpty): JSX.Element => {
  const { t } = useTranslation('Vindoc');

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: color,
        },
      }}
    >
      <AntEmpty
        {...rest}
        image={typeof image === 'string' ? mapImage[image] : image}
        description={description || t('No Data')}
      />
      <div className='bg-aqua-pale p-10 text-primary-600'>Some text</div>
    </ConfigProvider>
  );
};

const mapImage = {
  simple: AntEmpty.PRESENTED_IMAGE_SIMPLE,
  default: AntEmpty.PRESENTED_IMAGE_DEFAULT,
};

export default memo(Empty);
