import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru'
import { DayPicker } from 'react-day-picker';


export default function Calendar({ selected, setSelected}) {

  let footer = <p>Пожалуйста, введите дату</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, 'PP', {locale: ru})}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={ru}
    />
  );
}
