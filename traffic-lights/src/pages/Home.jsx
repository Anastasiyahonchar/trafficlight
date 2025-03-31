const Home = () => {
  return (
    <div className="home-container">
      <h2>Ласкаво просимо!</h2>
      <p>Ця програма дозволяє взаємодіяти зі світлофорами та відстежувати їх стан.</p>
      <h3>Основний функціонал:</h3>
      <ul className="task-list">
        <li><strong>Два типи світлофорів:</strong> горизонтальний та вертикальний режими.</li>
        <li><strong>Підрахунок кліків:</strong> збереження кількості натискань на кольори світлофора.</li>
        <li><strong>Анімації:</strong> використання Framer Motion для створення ефектів.</li>
        <li><strong>Маршрутизація:</strong> реалізована за допомогою React Router.</li>
        <li><strong>Context API:</strong> використання глобального стану для збереження даних.</li>
        <li><strong>Збереження даних:</strong> інформація про кліки та стан світлофорів зберігається у Google Sheets через Google Apps Script.</li>
      </ul>

      <p>Скористайтеся меню для перемикання між сторінками та керування світлофорами.</p>
    </div>
  );
};


export default Home;
