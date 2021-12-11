$(function () {
  const btn = $("#przycisk");
  console.log(btn);

  btn.click(function () {
    console.log("klik");
    const kwadrat = $("#square");
    console.log(kwadrat);

    kwadrat.animate(
      {
        margin: "left 100px",
        width: "100px",
        height: "100px",
      },
      3000,
      function () {
        // $(this).animate({ backgroundColor: "blue" }), 5000;
        // $(this).css("background-color", "blue").animate({}), 5000;
        // $(this).css("background-color", "red")
        $(this).css({
          transition: "background-color 5s",
          backgroundColor: "blue",
        });

        setTimeout(() => {
          kwadrat.append("<h2>Animacja zakończona</h2>");
          
        });
      }
    );
  });
});

// 1. Stwórz przycisk - (element button)
// 2. Pod przyciskiem stwórz kwadrat (znacznik div) o wysokości i
// szerokości 200px oraz kolorze czerwonym
// 3. Po kliknięciu w przycisk kwadrat ma się przesunąć w prawo o 100px
// oraz ma się zmniejszyć do rozmiaru 100px na 100px - wykorzystaj do
// tego metodę animate() - animacja ma trwać 3 sekundy
// 4. Po zakończonej animacji zmień kolor kwadratu na niebieski - animacja
// zmiany ma trwać 5 sekund
// 5. Gdy kwadrat zmieni kolor na niebieski wyświetl wewnątrz niego napis
// w nagłówku h2 "Animacja zakończona"
