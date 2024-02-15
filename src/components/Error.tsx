import React from 'react';
import {observable} from "mobx";
import {Alert, Space} from "antd";

const Error = observable(() => {


  return (
    <Space direction="vertical" style={{width: '100%'}}>
      <Alert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        onClose={() => {
        }}
      />
    </Space>
  );
});

export default Error;