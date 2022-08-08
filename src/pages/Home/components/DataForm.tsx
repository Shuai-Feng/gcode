import { createElement } from 'rax';
import { Form, Input, Button } from '@alifd/meet';
import '@alifd/meet/es/core/index.css';
const DataForm = ({ handleSubmit, handleClose }) => {
  return (
    <div>
      <Form
        onSubmit={(value) => {
          if (value) {
            handleSubmit(value);
            handleClose();
            localStorage.gcodeValue = JSON.stringify(value);
          }
        }}
      >
        <Form.Item hasFeedback label="名字" required requiredMessage="用户名不能为空">
          <Input name="name" placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item hasFeedback label="地址" required requiredMessage="地址不能为空">
          <Input name="address" placeholder="请输入地址" />
        </Form.Item>
        <p>
          <Form.Submit>
            <Button type="primary" size="large" fullWidth>
              更新内容
            </Button>
          </Form.Submit>
        </p>
      </Form>
    </div>
  );
};
export default DataForm;
