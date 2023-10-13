import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { createstudent } from "../../redux/store/action/commonAction"
import { useDispatch } from "react-redux";

const FormData = () => {

  const dispatch = useDispatch()
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log('Success:', values);
    const id = Math.round(Math.random() * 100)
    const res = { ...values, id }
    console.log("res", res)
    dispatch(createstudent(res))
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="student"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="CollageName"
          name="collage"
          rules={[
            {
              required: true,
              message: 'Please input your CollageName!',
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default FormData;