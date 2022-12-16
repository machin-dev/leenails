import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';

const  MyTimePicker= ({value}) => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const handleDateChange = (date) => {
    console.log(typeof(date));
    console.log(typeof(value));
    setSelectedDate(date);
  };

  return (
    <div className="bg-light">

      <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <KeyboardTimePicker
          id="time-picker"
          label="seleccione la hora"
          value={selectedDate}
          onChange={handleDateChange}
/>
        
      </MuiPickersUtilsProvider>

    </div>
  );
}
export default MyTimePicker