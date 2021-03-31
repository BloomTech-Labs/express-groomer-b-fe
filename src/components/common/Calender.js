import { Calendar, Badge, Modal } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import { APIContext } from '../../state/contexts/APIContext';
import { useOktaAuth } from '@okta/okta-react';
import './calendar.scss';

const AppointmentCalendar = ({ msg }) => {
  const [apptsToRender, setApptsToRender] = useState();
  const [apptsForSelectedDate, setApptsForSelectedDate] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { getAllAppointments, deleteAppointment } = useContext(APIContext);
  const { authState } = useOktaAuth();

  useEffect(() => {
    getAllAppointments(authState).then(res => {
      setApptsToRender(res.data);
    });
  }, []);

  function getListData(value) {
    //state of appts filtered to match value
    let listData = [];
    for (let i = 0; i < apptsToRender.length; i++) {
      if (new Date(apptsToRender[i].date).getDate() === value.date()) {
        listData.push(apptsToRender[i]);
      }
    }

    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.apptId}>
            <Badge status={'default'} text={item.time} />
          </li>
        ))}
      </ul>
    );
  }

  function onDateClickHandler(value) {
    const appts = apptsToRender.filter(
      appt => new Date(appt.date).getDate() === value.date()
    );
    setApptsForSelectedDate(appts);
    setIsModalVisible(true);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteClickHandler = appointmentId => {
    deleteAppointment(appointmentId);
    setIsModalVisible(false);
  };

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
  return apptsToRender ? (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onSelect={onDateClickHandler}
      ></Calendar>
      <Modal
        title="Appointments for Selected Date"
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={null}
      >
        {apptsForSelectedDate?.map(appt => (
          <>
            <p>{appt.time}</p>
            <button onClick={e => deleteClickHandler(appt.id)}>delete</button>
            <button>edit</button>
          </>
        ))}
      </Modal>
    </>
  ) : (
    <Calendar />
  );
};

export default AppointmentCalendar;
