// pages/inicio.tsx
import { useState } from 'react';
import styles from '../styles/inicio.module.css';

const Inicio = () => {
  // Estado para controlar qual conteúdo mostrar
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // Função para renderizar o conteúdo com base no item selecionado
  const renderContent = () => {
    switch (selectedItem) {
      case 'item1':
        return <div>Conteúdo do Item 1</div>;
      case 'item2':
        return <div>Conteúdo do Item 2</div>;
      case 'item3':
        return <div>Conteúdo do Item 3</div>;
      default:
        return <div>Selecione um item no menu!</div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li>
            <button className={styles.menuItem} onClick={() => setSelectedItem('item1')}>
              Item 1
            </button>
          </li>
          <li>
            <button className={styles.menuItem} onClick={() => setSelectedItem('item2')}>
              Item 2
            </button>
          </li>
          <li>
            <button className={styles.menuItem} onClick={() => setSelectedItem('item3')}>
              Item 3
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Inicio;
