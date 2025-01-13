interface Song {
  artist: string;
  title: string;
  yearReleased: number;
  isGood?: boolean;
  tracks: number;
}

const mySong: Song = {
  artist: "The Beatles",
  title: "Let It Be",
  yearReleased: 1970,
  //   isGood: true,
  tracks: 12,
};

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 123,
  username: "The Name",
};

user.username = "New Name";
