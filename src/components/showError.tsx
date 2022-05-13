import { Modal } from 'antd';

export function showerror(error:any) {
  console.log(error);
  
  Modal.error({
    title: 'Error found:',
    content: error.message,
  });
}