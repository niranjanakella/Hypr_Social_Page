import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://c1.wallpaperflare.com/preview/459/339/603/hand-holding-hold-iphone.jpg",
    user: USERS[3].user,
    hypes: 8678,
    caption: "This is my new iPhone",
    profile_picture: USERS[3].image,
    comments: [
      {
        user: "indiana",
        comment: "Wow!! Super cool..",
      },
      {
        user: "ethen",
        comment: "OOooo!! Classy..",
      },
      {
        user: "legend",
        comment: "Nice Click!!",
      },
      {
        user: "legend",
        comment: "Nice Click!!",
      },
      {
        user: "legend",
        comment: "Nice Click!!",
      },
    ],
  },

  {
    imageUrl:
      "https://i.pinimg.com/736x/80/4c/a8/804ca834eb56a750d198f657afbbd074.jpg",
    user: USERS[5].user,
    hypes: 1189,
    caption: "Makeup is art, Beauty is spirit",
    profile_picture: USERS[5].image,
    comments: [
      {
        user: "jessy",
        comment: "Amazing Shades!!",
      },
      {
        user: "indiana",
        comment: "That shades suits you..",
      },
    ],
  },

  {
    imageUrl: "https://m.media-amazon.com/images/I/51TSSZrjz9L._UL1024_.jpg",
    user: USERS[2].user,
    hypes: 6304,
    caption: "My New T-shirt at stealing price..",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "malinda",
        comment: "I love blues",
      },
      {
        user: "legend",
        comment: "Nice Shirt!!",
      },
    ],
  },

  {
    imageUrl:
      "https://images.unsplash.com/photo-1604269879264-b1cec41c0e41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9zZXMlMjBpbiUyMGElMjB2YXNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    user: USERS[5].user,
    hypes: 6304,
    caption: "My New T-shirt at stealing price..",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "malinda",
        comment: "I love blues",
      },
      {
        user: "legend",
        comment: "Nice Shirt!!",
      },
    ],
  },

  {
    imageUrl: "https://flxt.tmsimg.com/assets/p11904956_b1t_h9_aa.jpg",
    user: USERS[5].user,
    hypes: 1189,
    caption: "Run Barry!! Run",
    profile_picture: USERS[5].image,
    comments: [
      {
        user: "jessy",
        comment: "Amazing Shades!!",
      },
      {
        user: "indiana",
        comment: "That shades suits you..",
      },
    ],
  },
];

export function updateHypes(index, updateValue) {
  POSTS[index].hypes += updateValue;
}

// POSTS[0].hypes += 1
