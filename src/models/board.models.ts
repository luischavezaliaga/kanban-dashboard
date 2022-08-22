export interface User {
  name: string;
  profileImageUrl: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  user?: User;
  points: number;
  bucketId: string;
}

export interface Bucket {
  id: string;
  name: string;
}
