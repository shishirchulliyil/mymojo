export type Analysis = {
  createdAt: Date;
  updatedAt: Date;
  mood: string;
  summary: string;
  color: string;
  negative: boolean;
};

export type Entry = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  content: string;
  analysis?: Analysis;
};
