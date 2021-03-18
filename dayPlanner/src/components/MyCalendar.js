import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() { 
  const [value, setValue] = useState(new Date()); //vaihdoin tähän oppien mukaisen setValue:n

  function onChange(nextValue) {
    setValue(nextValue);
  }

    return(
        <div>
            <Calendar onChange={onChange}
                      value={value}/>
        </div>
      );
}

export default MyCalendar;