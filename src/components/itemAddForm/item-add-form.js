import React from 'react'
import { Col, Row } from 'antd';
import { Form, DatePicker, Input, Button } from 'antd';

import './item-add-form.css'

const ItemAddForm = ({ onAddFunction, adding, addingChange, person }) => {
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
          };
        const onchangeValue = ({BookingForName}) => {
            if (BookingForName) {
               return BookingForName            
            }
        }
        
        const [form] = Form.useForm()
        const { RangePicker } = DatePicker;
        
        return(
                <div className="itemAddForm">               
                <Form onFinishFailed = {(event) => console.log(event) } 
                onFinish={(event) => { onAddFunction(event, event.Service, event.bookingTime_interval, person); form.resetFields()}}
                onValuesChange={(event) => {addingChange(onchangeValue(event))}}
                form={form}
                >
                <Row>
                <Col span={24} className="inputGroup">
                <Form.Item name="Service" label="Service" rules={[{required:true}]} >  
                <Input className="form-control" placeholder="Which service you want" size="large"/>
                </Form.Item>
                </Col>
                <Col span={24} className="inputGroup">

                <Form.Item name="bookingTime_interval" label="Booking interval" {...rangeConfig}>
                    <RangePicker className="datePicker" showTime format="YYYY-MM-DD HH:mm:ss" size="large"/>
                </Form.Item>
                </Col>
                <Col span={24} className="inputGroup">
                <Form.Item>
                <Button type="primary" htmlType="submit" size="large">Button</Button>
                </Form.Item>
                </Col>
                </Row>
                </Form>                
                </div>
        )
}
export default ItemAddForm;
