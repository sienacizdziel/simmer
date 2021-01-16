import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import './AddRecipe.css';
import TextArea from "antd/lib/input/TextArea";

const layout = {
    labelCol: {
        span: 16,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


const AddRecipe = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };

    return (
        <div id="wrap">
            <div id="name">
                <h1>Recipe Name</h1>
                    <div>
                        <button className="image">image</button>
                    </div>
                <h2>Type</h2>
                <h2>Category</h2>
                <h2>Rating</h2>
            </div>
            <div id="form">
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="name"
                    label="Name"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="type"
                    label="Type"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="ingred"
                    label="Ingredients"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="directions"
                    label="Directions"
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                    Reset
                    </Button>
                </Form.Item>
            </Form>
            </div>
            <div class="clearer"></div>
        </div>
    );
};

export default AddRecipe;