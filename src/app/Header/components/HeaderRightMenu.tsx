import { Dropdown, Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Grid } from '../../../styles/sharedStyles';
import Button from '../../components/Button';
import { FaGithub, FaLanguage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function HeaderRightMenu() {
  const navigate = useNavigate();

  const menuItems: MenuProps['items'] = [
    { label: 'Home', key: '/' },
    { label: 'Station', key: '/station' },
    { label: 'Report', key: '/report' },
    { label: 'About', key: '/about' },
  ];

  const dropdownItems: MenuProps['items'] = [
    {
      label: 'Português',
      key: 'pt-br',
      onClick: () => console.log('portugues'),
    },
    {
      label: 'Inglês',
      key: 'en',
      onClick: () => console.log('ingles'),
    },
  ];

  const handleMenuSelect: MenuProps['onClick'] = (event) => {
    setCurrentKey(event.key);
    navigate(event.key);
  };

  const [currentKey, setCurrentKey] = useState<string>('home');

  return (
    <Grid css={{ gridTemplateColumns: `${menuItems.length}fr 0.5fr 0.5fr` }}>
      <Menu
        style={{ backgroundColor: 'inherit' }}
        onClick={handleMenuSelect}
        mode="horizontal"
        selectedKeys={[currentKey]}
        items={menuItems}
      />
      <Dropdown arrow={false} menu={{ items: dropdownItems }}>
        <Button icon={<FaLanguage />} />
      </Dropdown>
      <Button
        icon={<FaGithub />}
        onClick={() => console.log('Vai pro Github!')}
      />
    </Grid>
  );
}
