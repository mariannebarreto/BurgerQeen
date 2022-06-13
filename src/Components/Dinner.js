// import { useNavigate } from 'react-router-dom';
import '../Styles/Dinner.css';
import '../Styles/Menu.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderDinner from './HeaderDinner';
import Order from './Order';
import Item from './ItemDish';

export default function Dinner() {
  const [dinnerDishes, setDinnerDishes] = useState([]);

  const getDinnerMenu = async () => {
    const urlDinnerMenu = 'http://localhost:3000/FullMenu?menu=Dinner';
    const fetchDinnerMenu = await fetch(urlDinnerMenu).then((response) => response.json());
    setDinnerDishes(fetchDinnerMenu);
  };// NAVEGA
  const navigate = useNavigate();

  const handleMorningMenu = () => {
    navigate('/Breakfast');
  };

  const handleDinnerMenu = () => {
    navigate('/Dinner');
  };

  useEffect(() => {
    getDinnerMenu();
  }, []);

  return (
    <body>
      <HeaderDinner />

      <section id="buttonsMenuSec">
        <button type="button" className="menuButtons" id="breakfastB" onClick={handleMorningMenu}>Breakfast</button>
        <button type="button" className="menuButtons" id="dinnerB" onClick={handleDinnerMenu}>Dinner</button>
      </section>

      <section id="dinnerSection">
        <section id="itemsDinnerMenu">
          { dinnerDishes?.map((dish) => <Item dish={dish} key={dish.menu} />)}
          <div className="orderContainer">
            <Order />
          </div>
        </section>
      </section>
    </body>
  );
}
