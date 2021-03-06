import React, {useCallback, useState, useRef} from 'react'; // eslint를 쓰면 React를 import 하지 않으면 에러남
import {useSelector, useDispatch} from "react-redux";
import { Form, Input, Button } from 'antd';
import {addPost} from '../reducers/post'

const PostForm = () => {
  const {imagePaths} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const imageInput = useRef();
  const onchangeText = useCallback((e) => {
    setText(e.target.value);
  }, [])
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText('');
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current])

  return (
    <Form style={{margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
      value={text}
      onChange={onchangeText}
      maxLength={140}
      placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput}/>
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">twit</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v}/>
            <div>
              <Button>remove</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;