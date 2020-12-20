export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'minkyung',
    },
    content: 'first post #hashtag #express',
    Images: [{
      src: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567062612/noticon/fqdjmxuq27tt7o4umaoy.gif'
    }, {
      src: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568697779/noticon/guv0uqiehnuzftlg4ifr.gif'
    }, {
      src: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603261622/noticon/hn81l3ow7lkmtk1wpmtz.gif'
    }],
    Comments: [{
      User: {
        nickname: 'user1',
      },
      content: 'comment test'
    }]
  }],
  imagePaths: [],
  postAdded: false
}

const ADD_POST = 'ADD_POST'; // action 이름은 상수로 빼주는 게 좋다.
export const addPost = { // 액션 객체
  type: ADD_POST,

}

const dummyPost = {
  id: 2,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi, corporis deleniti doloremque fuga ipsam, libero magnam obcaecati, odio quae rerum saepe tempora velit vitae voluptatem! Excepturi, nesciunt, possimus? Atque?",
  User: {
    id: 2,
    nickname: 'minkyung'
  },
  Images: [],
  Comments: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      }
    default:
      return state;
  }
}

export default reducer;