import { Calendar, Badge } from 'antd';
import React, { useContext } from 'react';
// import { CustomersContext } from '../../state/contexts/CustomersContext';

const AppointmentCalendar = ({ msg }) => {

  // Need to comment this out just until we hook it up because its making the code fail to commit
  // const {appointment, setAppointment} = useContext(CustomersContext);

  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  return (
    <Calendar
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
    />
  );
};

export default AppointmentCalendar;

// .events {
//   margin: 0;
//   padding: 0;
//   list-style: none;
// }
// .events .ant-badge-status {
//   width: 100%;
//   overflow: hidden;
//   font-size: 12px;
//   white-space: nowrap;
//   text-overflow: ellipsis;
// }
// .notes-month {
//   font-size: 28px;
//   text-align: center;
// }
// .notes-month section {
//   font-size: 28px;
// }
