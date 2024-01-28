import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru'
import { DayPicker } from 'react-day-picker';


export default function Calendar({ selected, setSelected, children}) {

  let footer = <div className="calendar__period">{children}</div>;
  if (selected) {
    footer = <p>Срок исполнения: {format(selected, 'PP', {locale: ru})}</p>;
  }

  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
  }
  .my-selected:hover:not([disabled]) { 
    color: #94A6BE;
  }
  .rdp {
    --rdp-cell-size: 30px; /* Size of the day cells. */
    --rdp-caption-font-size: 18px; /* Font size for the caption labels. */
    --rdp-background-color: #e7edff; /* Background color for the hovered/focused elements. */
    --rdp-selected-color: #fff; /* Color of selected day text */
    font-family: "Roboto", sans-serif; /* Добавляем стиль шрифта */
  }
`;

  return (
    <>
     <style>{css}</style>
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={ru}
      modifiersClassNames={{
        selected: 'my-selected',
        today: 'my-today'
      }}
    />
    </>
  );
}
