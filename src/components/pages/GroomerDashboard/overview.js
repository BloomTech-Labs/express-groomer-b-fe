import './overview.scss';
import AppointmentCalendar from '../../common/Calender';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ApptForm from '../../common/appointmentsform';
// import { APIContext } from '../../../state/contexts/APIContext';
// import { useOktaAuth } from '@okta/okta-react';

export default function Overview() {
  // const { addAppointment } = useContext(APIContext);
  // const { authState } = useOktaAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Appointments
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ApptForm setIsModalVisible={setIsModalVisible} />
      </Modal>
      <AppointmentCalendar />
    </div>
  );
}
