import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru'
import { DayPicker } from 'react-day-picker';
import { CalendarP } from '../PopBrowse/PopBrowse.styled01';


export default function Calendar({ selected, setSelected, children}) {

  let footer = <div className="calendar__period">{children}</div>;
  if (selected) {
    footer = <CalendarP>Срок исполнения: {format(selected, 'PP', {locale: ru})}</CalendarP>;
  }

  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
  }
  .my-selected:hover:not([disabled]) { 
    color: #94A6BE;
  }
  .rdp-caption, .rdp-head_cell, .rdp-day {
    color: #94A6BE;
  }

  .rdp {
    --rdp-cell-size: 30px;
    --rdp-caption-font-size: 18px;
    --rdp-accent-color: #94A6BE;
    --rdp-background-color: #e7edff;
    --rdp-accent-color-dark: #94A6BE;
    --rdp-background-color-dark: #20202C;
    --rdp-outline: 2px solid var(--rdp-accent-color);
    --rdp-outline-selected: 3px solid var(--rdp-accent-color);
    --rdp-selected-color: #ffffff;
  }

  .rdp-caption {
    font-size: 18px;
    font-family: Roboto;
  }

  .rdp-head_cell {
    font-size: 14px;
    text-transform: lowercase;
  }

  .rdp-cell, .rdp-day {
    font-size: 12px;
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
